// next
import Link from "next/link";

// font
import { Lora } from "next/font/google";

// icon
import { LuCheckCircle2 } from "react-icons/lu";

// components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
import prices from "@/data/price";

// css
const lora = Lora({ subsets: ["latin"] });
const defaultSpaceY = ["space-y-16"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];

export default function Pricing() {
  return (
    <>
      <section id="price">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Paket Harga</p>
              <div className={lora.className}>
                <h2 className={cn(defaultHead)}>Harga Undangan Pernikahan</h2>
              </div>
              <p>
                Pilih harga undangan digital sesuai dengan kebutuhanmu.
                <br className="hidden lg:block" />
                Anda dapat merubah jenis paket kapanpun, jadi coba gratis aja
                dulu.
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {prices.map((price, index) => (
                <Card
                  key={index}
                  className={cn(defaultCard, "lg:p-5", "hover:shadow-xl")}
                >
                  <CardHeader className="space-y-5">
                    <div className={cn(defaultSpaceY, "space-y-2")}>
                      <p className="font-semibold text-xl">{price.tier}</p>
                      <p>{price.description}</p>
                    </div>
                    <div className={cn(defaultSpaceY, "space-y-2")}>
                      <CardDescription className="line-through text-red-500">
                        {price.money}
                      </CardDescription>

                      <CardTitle>{price.diskon}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className={cn(defaultSpaceY, "space-y-3")}>
                    {price.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <LuCheckCircle2 className="w-5 h-5 text-green-600" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Link href={price.href} target="_blank" className="w-full">
                      <Button className="w-full" variant="primary">
                        Pesan Sekarang
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
