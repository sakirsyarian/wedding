// font
import { Lora } from "next/font/google";

// third party
import { Toaster } from "@/components/ui/toaster";

// components
import { cn } from "@/lib/utils";

// custome components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FormContact from "./component/Form";

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

export const metadata = {
  title: "Kontak - Andaring",
  description:
    "Buat undangan pernikahan online gratis, elegan dan modern. Ciptakan momen kebahagiaan Anda bersama Andaring. Selesai cepat, hemat uang & tanpa repot!",
};

export default function Contact() {
  return (
    <>
      <Toaster />
      <div className="text-slate-500">
        <Navbar />

        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Contact</p>
              <div className={lora.className}>
                <h1 className={cn(defaultHead)}>Kontak Kami</h1>
              </div>
              <p>
                Hubungi kami apabila ada yang ingin ditanyakan terkait produk
                Andaring
              </p>
            </div>

            <div className="grid gap-10 text-slate-500">
              {/* form */}
              <FormContact />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
