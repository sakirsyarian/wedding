// font
import { Lora } from "next/font/google";

// component
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
import chooses from "@/data/chooses";

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
  "md:grid-cols-2",
  "lg:grid-cols-3",
  "justify-center mx-auto ",
  "gap-5",
];

export default function WhyUs() {
  return (
    <>
      <section id="choose">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Kenapa Kami</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Mengapa Memilih Andaring?</h2>
              </div>
              <p>
                Kami hadir sebagai sebuah solusi untuk membantu kedua mempelai
                yang
                <br className="hidden lg:block" />
                sedang berbahagia untuk buat undangan online gratis dengan cepat
                dan mudah
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {chooses.map((choose, index) => (
                <Card
                  key={index}
                  className={cn(defaultCard, "hover:shadow-xl")}
                >
                  <CardHeader className="flex gap-3">
                    <span className="text-primary">{choose.icon}</span>
                    <CardTitle className="text-xl">{choose.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{choose.description}</p>
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
