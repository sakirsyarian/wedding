// next
import Link from "next/link";
import Image from "next/image";

// icon
import { FaXTwitter } from "react-icons/fa6";
import { LuMenu, LuInstagram, LuFacebook } from "react-icons/lu";

// components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// data
import { menus, supports } from "@/data/navbar";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];
const defaultHover = ["hover:text-primary"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-10 sticky bg-white shadow-sm">
        <div className="px-5 py-5 md:container">
          <div className={cn(defaultFlex, "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className={cn(defaultFlex, "gap-2", "text-xl")}>
                <Image
                  src="/img/logo/andaring.png"
                  width={130}
                  height={130}
                  alt="andaring"
                />
              </Link>
            </div>

            {/* menu */}
            <div className={cn(defaultFlex, "hidden", "md:flex")}>
              {menus.map((menu, index) => (
                <Link key={index} href={menu.href} className={cn(defaultHover)}>
                  {menu.name}
                </Link>
              ))}
            </div>

            {/* auth */}
            <div className={cn(defaultFlex, "gap-5", "hidden")}>
              <Link href="/login">
                <Button
                  className="text-primary hover:text-primary hover:bg-white"
                  variant="ghost"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button variant="primary">Register</Button>
              </Link>
            </div>

            {/* burger */}
            <div className="md:hidden flex items-center test">
              <Sheet className="focus:ring-emerald-500">
                <SheetTrigger title="Menu" className="focus:ring-emerald-500">
                  <LuMenu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent className="text-left focus:ring-emerald-500">
                  <SheetHeader className="text-left focus:ring-emerald-500">
                    <SheetTitle className="text-slate-600 focus:ring-emerald-500">
                      <Link href="/">
                        <Image
                          src="/img/logo/andaring.png"
                          width={150}
                          height={150}
                          alt="andaring"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* menu */}
                  <div className="mt-8 flex flex-col gap-5 text-slate-600">
                    {menus.map((menu, index) => (
                      <Link
                        key={index}
                        href={menu.href}
                        className={cn(defaultHover)}
                      >
                        {menu.name}
                      </Link>
                    ))}

                    {/* auth */}
                    <div className="hidden flex-col gap-5">
                      <Link href="/login">
                        <Button
                          className="w-full text-primary hover:text-primary hover:bg-white"
                          variant="ghost"
                        >
                          Login
                        </Button>
                      </Link>

                      <Link href="/register">
                        <Button className="w-full" variant="primary">
                          Register
                        </Button>
                      </Link>
                    </div>

                    <Separator />

                    {/* support */}
                    {supports.map((support, index) => (
                      <Link
                        key={index}
                        href={support.href}
                        className={cn(defaultHover)}
                      >
                        {support.name}
                      </Link>
                    ))}

                    <Separator />

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

                    <Separator />

                    {/* credit */}
                    <div>
                      © {new Date().getFullYear()}{" "}
                      <Link href="/">Andaring</Link>.
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
