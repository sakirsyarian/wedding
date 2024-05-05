// next
import Link from "next/link";
import Image from "next/image";

// icon
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { LuInstagram, LuFacebook } from "react-icons/lu";

// component
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// data
import keywords from "@/data/keyword";
import { benefits, menus } from "@/data/footer";

// css
const defaultSpaceY = ["space-y-10"];
const defaultFlex = [
  "flex",
  "flex-col",
  "md:flex-row",
  "items-center",
  "justify-between",
  "md:gap-20",
];

export default function Footer({ keyword }) {
  return (
    <>
      {/* whatsapp */}
      <div className="z-50 fixed bottom-32 md:bottom-40 right-5 md:right-10">
        <div className="p-2 bg-green-500 rounded-full">
          <Link title="Whatsapp" href="https://wa.link/sub1l2" target="_blank">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </Link>
        </div>
      </div>

      <footer className="border">
        <div className="px-5 py-5 md:container">
          <div className={cn(defaultSpaceY, "space-y-2")}>
            <div
              className={cn(
                "grid",
                "grid-cols-1",
                "lg:grid-cols-2",
                "lg:gap-20"
              )}
            >
              {/* brand */}
              <div className={cn(defaultSpaceY, "py-5", "space-y-5")}>
                <Link href="/">
                  <Image
                    src="/img/logo/andaring.png"
                    width={250}
                    height={250}
                    alt="andaring"
                  />
                </Link>
                <p>
                  Andaring adalah platform{" "}
                  {keyword || "undangan pernikahan online"} yang dapat membantu
                  membuat undangan online untuk pernikahan impian Anda dengan
                  cara mudah dan cepat
                </p>
              </div>

              {/* menu */}
              <div
                className={cn(
                  "grid",
                  "grid-cols-2",
                  "xl:grid-cols-3",
                  "items-start",
                  "md:items-center",
                  "w-full"
                )}
              >
                {menus.map((menu, index) => (
                  <div
                    key={index}
                    className={cn(defaultSpaceY, "py-5", "space-y-5")}
                  >
                    {/* title */}
                    <h3 className="font-medium text-tertiary">{menu.title}</h3>
                    {/* list */}
                    <ul className={cn(defaultSpaceY, "space-y-2")}>
                      {menu.listMenu.map((item, index) => (
                        <li key={index} className="hover:text-primary">
                          <Link href={item.link}>{item.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* credit */}
            <div className={cn(defaultFlex, "py-5", "gap-5")}>
              <p>
                © {new Date().getFullYear()} <Link href="/">Andaring</Link>. All
                rights reserved
              </p>

              {/* social */}
              <div className="flex gap-5">
                <Link
                  title="Instagram"
                  href="/"
                  className="p-2 rounded-md bg-yellow-100/20 text-primary"
                >
                  <LuInstagram className="w-5 h-5" />
                </Link>
                <Link
                  title="Facebook"
                  href="/"
                  className="p-2 rounded-md bg-yellow-100/20 text-primary"
                >
                  <LuFacebook className="w-5 h-5" />
                </Link>
                <Link
                  title="Twitter"
                  href="/"
                  className="p-2 rounded-md bg-yellow-100/20 text-primary"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <Separator />

          {/* link */}
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {keywords.map((keyword, index) => (
              <div key={index}>
                <Link
                  title={keyword.name}
                  href={`/${keyword.link}`}
                  className="text-sm hover:text-primary"
                >
                  {keyword.title}
                </Link>
              </div>
            ))}
          </div>

          <Separator />

          {/* article */}
          <div className="mt-5 space-y-5 text-sm">
            <p>
              Pernikahan adalah momen yang sakral dan istimewa bagi setiap
              pasangan. Oleh karena itu, tidak mengherankan jika pasangan ingin
              mempersiapkan pernikahan sebaik mungkin, termasuk dalam hal {""}
              {keyword || "undangan pernikahan online"}.
            </p>

            <p>
              Dalam beberapa tahun terakhir,{" "}
              {keyword || "undangan pernikahan online"} semakin populer.
              Undangan online memiliki beberapa keunggulan dibandingkan undangan
              pernikahan fisik, seperti lebih praktis, lebih terjangkau, dan
              lebih ramah lingkungan.
            </p>

            <h3 className="font-semibold">
              Keunggulan {keyword || "undangan pernikahan online"}
            </h3>

            <p>
              Undangan digital memiliki beberapa keunggulan dibandingkan
              undangan pernikahan fisik, antara lain:
            </p>

            <ol className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <p className="mb-3 font-semibold">{benefit.title}</p>
                  <p>{benefit.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </footer>
    </>
  );
}
