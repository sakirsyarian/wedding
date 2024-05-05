// font
import { Lora } from "next/font/google";

// util
import { cn } from "@/lib/utils";

// data
import features from "@/data/feature";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
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
  "lg:grid-cols-4",
  "gap-5",
];

export default function Feature() {
  return (
    <>
      <section id="feature">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead, "text-primary")}>
                Fitur Wedding
              </p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Fitur Unggulan Andaring</h2>
              </div>
              <p>
                Berikut fitur-fitur undangan digital kami yang
                <br className="hidden md:block" />
                menarik, unggul dari yang lain dan siap Anda gunakan dengan
                mudah
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    defaultSpaceY,
                    "p-5",
                    "space-y-3",
                    "text-center"
                  )}
                >
                  {/* title */}
                  <div className="grid gap-3 justify-center">
                    <div className="mx-auto p-3 rounded-md bg-yellow-100/20 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                  </div>

                  {/* description */}
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
