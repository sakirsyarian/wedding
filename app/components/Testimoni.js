// next
import Image from "next/image";

// font
import { Lora } from "next/font/google";

// component
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
import testimonials from "@/data/testimoni";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = [
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "lg:grid-cols-3",
  "gap-5",
];

export default function Testimoni() {
  return (
    <>
      <section id="testimoni">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Testimonial</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Mereka Mempercayai Kami</h2>
              </div>
              <p>
                Kami telah dipercaya oleh 240.680 mempelai. Serta telah terkirim
                ke 845.624 tamu, <br className="hidden lg:block" />
                lihat seberapa puas mereka yang sudah menggunakan undangan
                pernikahan Andaring
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {testimonials.map((testimoni, index) => (
                <Card
                  key={index}
                  className={cn(defaultCard, "hover:shadow-xl")}
                >
                  <CardHeader className="flex flex-row items-center gap-5">
                    <Image
                      src={`/img/testimoni/${testimoni.photo}`}
                      width={50}
                      height={50}
                      alt={testimoni.name}
                      className="rounded-full"
                    />
                    <CardTitle className="text-lg">{testimoni.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{testimoni.testimoni}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
