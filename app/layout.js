// font
import { Open_Sans } from "next/font/google";

// css
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });

// seo
export const metadata = {
  icons: {
    icon: "/img/logo/favicon.ico",
    shortcut: "/logo.png",
    apple: [
      "/img/logo/apple-icon-57x57.png",
      "/img/logo/apple-icon-60x60.png",
      "/img/logo/apple-icon-72x72.png",
    ],
  },
  creator: "Ahmad Sarian",
  authors: {
    name: "Ahmad Sarian",
    url: "https://github.com/sakirsyarian",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={open.className}>{children}</body>
    </html>
  );
}
