// font
import { Lora } from "next/font/google";

// components
import { cn } from "@/lib/utils";

// custome components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
  title: "Tentang Kami - Andaring",
  description:
    "Andaring adalah platform undangan pernikahan online yang dapat membantu membuat undangan online untuk pernikahan impian Anda dengan cara mudah dan cepat.",
};

export default function About() {
  return (
    <>
      <div className="text-slate-500">
        <Navbar />

        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>About</p>
              <div className={lora.className}>
                <h1 className={cn(defaultHead)}>Tentang Kami</h1>
              </div>
              <p>
                Mengenal lebih dekat tentang platform undangan pernikahan
                Andaring
              </p>
            </div>

            {/* content */}
            <div className="space-y-5">
              <p>
                Andaring merupakan platform untuk membuat undangan pernikahan
                online yang elegan, modern & ramah lingkungan. Undangan yang
                dibuat akan berbentuk sebuah website yang dapat di akses dan
                dibagikan kapanpun.
              </p>

              <p>
                Andaring memudahkan mempelai untuk membuat undangan yang cepat
                dan murah. Pengiriman undangannya juga gampang, cukup sebarkan
                link website ke berbagai platform sosial media. Proses pembuatan
                undangan pernikahan online realtif cepat tanpa mengurangi
                eksklusifitas dan kelengkapan dari website undangan online Anda.
              </p>

              <p>
                Website undangan pernikahan online yang disediakan Andaring
                memungkinkan Anda untuk menampilkan informasi yang tidak bisa
                disampaikan melalui undangan cetak seperti buku tamu online
                beserta ucapan, amplop atau kado online, galeri foto, soundtrack
                undangan, pilihan tema yang variatif dengan background estetik
                serta masih banyak lagi.
              </p>

              <p>
                Kami yakin Andaring bisa menjadi pilihan tepat dan terbaik untuk
                membantu mempersiapkan pernikahan impian Anda. Karena kami
                percaya bahwa moment terbaik harus didukung pula dengan platform
                terbaik untuk menyempurnakan momen perayaan Anda yang paling
                berharga.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
