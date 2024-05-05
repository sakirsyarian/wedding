// next
import Link from "next/link";

// font
import { Lora } from "next/font/google";

// component
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultCard = ["px-5 py-8", "text-slate-500", "shadow-md", "rounded-lg"];

export default function CallAction({ keyword }) {
  return (
    <>
      <section id="action">
        <div className="px-5 py-16 md:container">
          <div className={cn(defaultCard)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-6", "text-center")}>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>
                  Buat <span className="capitalize">{keyword}</span> Anda di
                  Andaring Sekarang
                </h2>
              </div>

              <div>
                <Link href="https://wa.link/sub1l2" target="_blank">
                  <Button variant="primary">Buat Undangan Online</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
