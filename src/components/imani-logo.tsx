import Image from "next/image";
import { cn } from "@/lib/utils";

type ImaniLogoProps = {
  className?: string;
  treatment?: "light" | "dark";
  showWordmark?: boolean;
};

export function ImaniMark({ className }: { className?: string }) {
  return (
    <Image
      src="/favicon-real.svg"
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      priority
      className={cn("size-10 shrink-0 object-contain", className)}
    />
  );
}

export function ImaniLogo({
  className,
  treatment = "light",
  showWordmark = true,
}: ImaniLogoProps) {
  return (
    <div className={cn("inline-flex items-center", className)} aria-label="Imani">
      {showWordmark ? (
        <>
          <Image
            src="/imani-logotype-light.svg"
            alt="Imani"
            width={156}
            height={40}
            priority
            style={{ width: "auto", height: "40px" }}
            className={cn(
              "h-10 w-auto object-contain dark:hidden",
              treatment === "dark" && "hidden"
            )}
          />
          <Image
            src="/imani-logotype.svg"
            alt="Imani"
            width={156}
            height={40}
            priority
            style={{ width: "auto", height: "40px" }}
            className={cn(
              "hidden h-10 w-auto object-contain dark:block",
              treatment === "dark" && "block"
            )}
          />
        </>
      ) : (
        <ImaniMark />
      )}
    </div>
  );
}
