// next
import Link from "next/link";
import Image from "next/image";

// font
import { Lora } from "next/font/google";

// icon
import { LuChevronsDown } from "react-icons/lu";

// component
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-10"];
const defaultBackground = [
  "bg-[url('/img/hero/background.webp')]",
  "bg-cover lg:bg-center bg-no-repeat",
];
const defaultFlex = [
  "flex",
  "flex-col",
  "lg:flex-row",
  "items-center",
  "justify-between",
  "gap-8",
];

export default function Hero({ keyword }) {
  return (
    <>
      <section id="hero" className={cn(defaultBackground)}>
        <div className="px-5 py-24 md:container">
          <div
            className={cn(defaultFlex, "grid grid-cols-1 md:grid-cols-2 gap-5")}
          >
            {/* left */}
            <div className={cn(defaultSpaceY)}>
              {/* description */}
              <div className={cn(defaultSpaceY, "space-y-5")}>
                <div className={lora.className}>
                  <h1 className="font-semibold text-tertiary text-3xl md:text-4xl leading-10">
                    <span className="capitalize">{keyword}</span>
                  </h1>
                </div>

                <p className="leading-7">
                  Buat {keyword} secara elegan, unik & mewah. Rayakan momen
                  kebahagiaan dan impian Anda bersama Andaring.
                  <br className="hidden md:block" /> {""}
                  Selesai cepat, hemat uang & tanpa repot!
                </p>
              </div>

              {/* call to action */}
              <div className={cn(defaultSpaceY)}>
                <div className={cn(defaultFlex, "justify-start", "gap-5")}>
                  <Link
                    href="https://wa.link/sub1l2"
                    target="_blank"
                    className="w-full md:w-auto"
                  >
                    <Button className="w-full" variant="primary">
                      Buat Undangan
                    </Button>
                  </Link>
                  <Link href="/#theme" className="w-full md:w-auto">
                    <Button
                      className="w-full text-primary hover:text-primary hover:bg-transparent"
                      variant="ghost"
                    >
                      <LuChevronsDown className="mr-2 h-4 w-4 animate-bounce" />
                      Lihat Tema
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="order-first md:order-none">
              <Image
                className="w-auto h-auto"
                src="/img/hero/hero.webp"
                alt="hero"
                width={800}
                height={800}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
