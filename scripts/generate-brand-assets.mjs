import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const iconsDir = path.join(publicDir, "icons");
const ogDir = path.join(publicDir, "og");
const artifactsDir = path.join(publicDir, "artifacts");
const fontsDir = path.join(root, "fonts");

const markSvg = path.join(publicDir, "favicon-real.svg");
const darkLogotypeSvg = path.join(publicDir, "imani-logotype.svg");
const lightLogotypeSvg = path.join(publicDir, "imani-logotype-light.svg");
const fontConfigDir = path.join(os.tmpdir(), "imani-design-system-fontconfig");
const fontConfigFile = path.join(fontConfigDir, "fonts.conf");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

await Promise.all([
  mkdir(iconsDir, { recursive: true }),
  mkdir(ogDir, { recursive: true }),
  mkdir(artifactsDir, { recursive: true }),
  mkdir(fontConfigDir, { recursive: true }),
]);

await writeFile(
  fontConfigFile,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${escapeXml(fontsDir)}</dir>
  <cachedir>${escapeXml(fontConfigDir)}</cachedir>
</fontconfig>
`
);

process.env.FONTCONFIG_FILE = fontConfigFile;

const { default: sharp } = await import("sharp");

await Promise.all([
  copyFile(markSvg, path.join(publicDir, "favicon.svg")),
  copyFile(markSvg, path.join(artifactsDir, "imani-mark.svg")),
  copyFile(darkLogotypeSvg, path.join(artifactsDir, "imani-logotype-dark.svg")),
  copyFile(lightLogotypeSvg, path.join(artifactsDir, "imani-logotype-light.svg")),
  copyFile(lightLogotypeSvg, path.join(artifactsDir, "imani-logo.svg")),
]);

const iconSizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];

await Promise.all(
  iconSizes.map((size) =>
    sharp(markSvg)
      .resize(size, size, { fit: "contain" })
      .png()
      .toFile(
        path.join(
          iconsDir,
          size === 180 ? "apple-touch-icon.png" : `icon-${size}x${size}.png`
        )
      )
  )
);

await copyFile(path.join(iconsDir, "apple-touch-icon.png"), path.join(publicDir, "apple-touch-icon.png"));

await sharp(markSvg)
  .resize(192, 192, { fit: "contain" })
  .png()
  .toFile(path.join(iconsDir, "android-chrome-192x192.png"));

await sharp(markSvg)
  .resize(512, 512, { fit: "contain" })
  .png()
  .toFile(path.join(iconsDir, "android-chrome-512x512.png"));

await sharp(markSvg)
  .resize(512, 512, { fit: "contain" })
  .extend({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "#073C2B",
  })
  .png()
  .toFile(path.join(iconsDir, "maskable-icon-512x512.png"));

await Promise.all([
  copyFile(path.join(iconsDir, "icon-16x16.png"), path.join(iconsDir, "favicon-16x16.png")),
  copyFile(path.join(iconsDir, "icon-32x32.png"), path.join(iconsDir, "favicon-32x32.png")),
]);

async function writePngIco(entries, outputPath) {
  const images = await Promise.all(
    entries.map(async ({ size, file }) => ({
      size,
      bytes: await readFile(file),
    }))
  );
  const headerSize = 6;
  const directorySize = 16 * images.length;
  let offset = headerSize + directorySize;
  const header = Buffer.alloc(headerSize);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directories = images.map(({ size, bytes }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(bytes.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += bytes.length;

    return entry;
  });

  await writeFile(
    outputPath,
    Buffer.concat([header, ...directories, ...images.map(({ bytes }) => bytes)])
  );
}

await writePngIco(
  [
    { size: 16, file: path.join(iconsDir, "icon-16x16.png") },
    { size: 32, file: path.join(iconsDir, "icon-32x32.png") },
    { size: 48, file: path.join(iconsDir, "icon-48x48.png") },
  ],
  path.join(publicDir, "favicon.ico")
);

const darkLogoPng = await sharp(darkLogotypeSvg)
  .resize({ width: 500, withoutEnlargement: true })
  .png()
  .toBuffer();

const lightLogoPng = await sharp(lightLogotypeSvg)
  .resize({ width: 460, withoutEnlargement: true })
  .png()
  .toBuffer();

const ogText = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { fill: #00CA00; font: 700 34px Agency, sans-serif; }
      .title { fill: #FFFFFF; font: 700 84px Agency, sans-serif; }
      .body { fill: rgba(255,255,255,0.78); font: 500 34px "DM Sans", sans-serif; }
      .meta { fill: #B8E0D9; font: 500 25px "DM Sans", sans-serif; }
    </style>
    <text x="76" y="260" class="eyebrow">Eco-friendly cleaning, reimagined.</text>
    <text x="76" y="356" class="title">Imani Design System</text>
    <text x="76" y="420" class="body">Bun · Next.js · TypeScript · shadcn/ui</text>
    <text x="76" y="530" class="meta">Fresh, modern, unmistakably green.</text>
  </svg>
`);

const ogBase = sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#073C2B",
  },
});

await ogBase
  .clone()
  .composite([
    { input: darkLogoPng, left: 72, top: 74 },
    {
      input: await sharp(markSvg).resize(420, 420).png().toBuffer(),
      left: 860,
      top: -40,
      blend: "screen",
    },
    { input: ogText, left: 0, top: 0 },
  ])
  .png()
  .toFile(path.join(ogDir, "imani-og.png"));

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#F2F2F2",
  },
})
  .composite([
    { input: lightLogoPng, left: 72, top: 84 },
    {
      input: Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <style>
            .title { fill: #073C2B; font: 700 86px Agency, sans-serif; }
            .body { fill: #101C23; opacity: .78; font: 500 34px "DM Sans", sans-serif; }
            .pill { fill: #00CA00; }
            .pillText { fill: #FFFFFF; font: 700 24px "DM Sans", sans-serif; }
          </style>
          <rect x="76" y="450" width="292" height="54" rx="27" class="pill"/>
          <text x="112" y="485" class="pillText">Design system</text>
          <text x="76" y="310" class="title">Build clean interfaces.</text>
          <text x="76" y="376" class="body">Reusable Imani primitives for future projects.</text>
        </svg>
      `),
      left: 0,
      top: 0,
    },
  ])
  .png()
  .toFile(path.join(ogDir, "imani-og-light.png"));

await copyFile(path.join(ogDir, "imani-og.png"), path.join(ogDir, "imani-twitter.png"));

await writeFile(
  path.join(publicDir, "site.webmanifest"),
  `${JSON.stringify(
    {
      name: "Imani Design System",
      short_name: "Imani DS",
      description:
        "Technical design system for Imani interfaces built with Bun, Next.js, TypeScript, and shadcn/ui.",
      start_url: "/",
      display: "standalone",
      background_color: "#073C2B",
      theme_color: "#073C2B",
      icons: [
        {
          src: "/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icons/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    null,
    2
  )}\n`
);

console.log("Generated Imani brand assets.");
