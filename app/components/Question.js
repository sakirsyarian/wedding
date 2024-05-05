// font
import { Lora } from "next/font/google";

// component
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// data
import faq from "@/data/question";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultGrid = ["grid", "grid-cols-4", "gap-5"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];

export default function Question() {
  return (
    <>
      <section id="faq">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>FAQ</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Pertanyaan Umum</h2>
              </div>
              <p>
                Berikut merupakan daftar pertanyaan yang sering diajukan kepada
                kami
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid, "grid-cols-1")}>
              <Accordion type="single" collapsible>
                {faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="text-left"
                  >
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
