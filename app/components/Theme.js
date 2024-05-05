// next
import Link from "next/link";
import Image from "next/image";

// font
import { Lora } from "next/font/google";

// components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// data
import themes from "@/data/themes";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultGrid = [
  "grid",
  "grid-cols-1",
  "sm:grid-cols-2",
  "lg:grid-cols-3",
  "gap-5",
];

export default function Theme() {
  return (
    <>
      <section id="theme">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Pilihan Tema</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Desain Undangan Pernikahan</h2>
              </div>
              <p>
                Silakan pilih beragam desain undangan pernikahan yang telah kami
                sediakan <br className="hidden lg:block" /> sesuai selera dan
                telah kami desain secara special khusus untuk Anda
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {themes.map((theme, index) => (
                <Card
                  key={index}
                  className={cn(defaultCard, "hover:shadow-xl")}
                >
                  <CardHeader>
                    <Link title={theme.title} href={theme.link} target="_blank">
                      <Image
                        className="transition duration-300 ease-in-out hover:scale-110"
                        src={`/img/theme/${theme.source}`}
                        width={500}
                        height={500}
                        alt={theme.title}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <Link title={theme.title} href={theme.link}>
                      <p className="font-semibold text-lg">{theme.title}</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* more theme */}
            <div className="text-center">
              <Link href="/themes">
                <Button variant="primary">Tema Lainnya</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
