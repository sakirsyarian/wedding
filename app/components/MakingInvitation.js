// next
import Image from "next/image";

// font
import { Lora } from "next/font/google";

// component
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
import tutorials from "@/data/tutorial";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultGrid = ["grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];

export default function MakingInvitation() {
  return (
    <>
      <section id="tutorial">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Tutorial Andaring</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Cara Buat Undangan Digital</h2>
              </div>
              <p>
                Hanya perlu 3 langkah untuk buat undangan online gratis Anda
                yang siap disebar!
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              <div>
                <Image
                  src="/img/hero/hero.webp"
                  alt="hero"
                  width={450}
                  height={450}
                  priority={true}
                />
              </div>

              <div className={cn(defaultGrid, "md:grid-cols-1")}>
                {tutorials.map((tutorial, index) => (
                  <Card
                    key={index}
                    className={cn(defaultCard, "hover:shadow-xl")}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {tutorial.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{tutorial.description}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
