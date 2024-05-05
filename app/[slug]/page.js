// next
import { notFound } from "next/navigation";

// data
import keywords from "@/data/keyword";

// custome components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Feature from "../components/Feature";
import MakingInvitation from "../components/MakingInvitation";
import Theme from "../components/Theme";
import Testimoni from "../components/Testimoni";
import CallAction from "../components/CallAction";
import Pricing from "../components/Pricing";
import Question from "../components/Question";
import Footer from "../components/Footer";

// seo
export async function generateMetadata({ params }) {
  const findSlug = keywords.find((item) => item.link === params.slug);

  // jika keywords tidak ditemukan lempar ke 404
  if (!findSlug) {
    notFound();
  }

  return {
    title: `${findSlug.title} - Andaring`,
    description: `Buat undangan pernikahan secara gratis, unik dan mewah. Rayakan momen kebahagiaan dengan ${findSlug.name} Andaring. Selesai cepat dan tanpa repot!`,
    metadataBase: new URL("https://andaring.com"),
    keywords: [
      "undangan online",
      "undangan digital",
      "undangan pernikahan",
      findSlug.name,
      "undangan digital website",
      "undangan pernikahan gratis",
    ],
    openGraph: {
      title: `${findSlug.title} - Andaring`,
      description: `Buat undangan pernikahan secara gratis, unik dan mewah. Rayakan momen kebahagiaan dengan ${findSlug.name} Andaring. Selesai cepat dan tanpa repot!`,
      url: "https://andaring.com/",
      siteName: "Andaring",
      locale: "id_ID",
      type: "website",
      authors: "Ahmad Sarian",
      publishedTime: new Date().toISOString(),
      images: [
        {
          url: "/logo.png",
          width: 500,
          height: 500,
          alt: "Andaring",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${findSlug.title} - Andaring`,
      site: "https://andaring.com/",
      description: `Buat undangan pernikahan secara gratis, unik dan mewah. Rayakan momen kebahagiaan dengan ${findSlug.name} Andaring. Selesai cepat dan tanpa repot!`,
      authors: "Ahmad Sarian",
      publishedTime: new Date().toISOString(),
      url: "https://andaring.com/",
      siteName: "Andaring",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 500,
          height: 500,
          alt: "Andaring",
        },
      ],
    },
  };
}

// static
export async function generateStaticParams() {
  // const posts = keywords.find((item) => item.link === params.slug);

  return keywords.map((post) => ({
    slug: post.link,
  }));

  // return keywords;
}

export default function Slug({ params }) {
  // const { slug } = params;
  const findSlug = keywords.find((item) => item.link === params.slug);

  // console.log(keywords, ">>> keywords");
  // console.log(params, ">>> params");

  // jika keywords tidak ditemukan lempar ke 404
  if (!findSlug) {
    notFound();
  }

  return (
    <>
      <div className="text-slate-500">
        <Navbar />
        <Hero keyword={findSlug.name} />
        <WhyUs />
        <Feature />
        <MakingInvitation />
        <Theme />
        <Pricing />
        <Testimoni />
        <CallAction keyword={findSlug.name} />
        <Question />
        <Footer keyword={findSlug.name} />
      </div>
    </>
  );
}
