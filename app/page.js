// next
import Script from "next/script";

// custome components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Feature from "./components/Feature";
import MakingInvitation from "./components/MakingInvitation";
import Theme from "./components/Theme";
import Testimoni from "./components/Testimoni";
import CallAction from "./components/CallAction";
import Pricing from "./components/Pricing";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

// data
import seo from "../data/seo";
import metatag from "../data/metatag";

// seo
export const metadata = metatag;

export default function Home() {
  return (
    <>
      {/* analytics */}
      <Script
        strategy="lazyOnload"
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-QVSM360VQ9"
      />
      <Script id="google-tag-manager">
        {`window.dataLayer = window.dataLayer || [];`}
        {`function gtag(){dataLayer.push(arguments);}`}
        {`gtag('js', new Date());`}
        {`gtag('config', 'G-QVSM360VQ9');`}
      </Script>

      {/* seo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo) }}
      />

      <div className="relative text-slate-500">
        <Navbar />
        <Hero keyword="undangan pernikahan online" />
        <WhyUs />
        <Feature />
        <MakingInvitation />
        <Theme />
        <Pricing />
        <Testimoni />
        <CallAction keyword="undangan pernikahan online" />
        <Question />
        <Footer keyword="undangan pernikahan online" />
        <Notification />
      </div>
    </>
  );
}
