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
  title: "Privacy Policy - Andaring",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="text-slate-500">
        <Navbar />

        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Policy</p>
              <div className={lora.className}>
                <h1 className={cn(defaultHead)}>Privacy Policy</h1>
              </div>
              <p>
                The existence of this privacy policy is a real commitment from
                Andaring to respect
                <br className="hidden lg:block" />
                and protect any personal data or information of website users
              </p>
            </div>

            {/* content */}
            <div className="space-y-5">
              <h3 className="font-semibold text-xl">
                Privacy Policy for Andaring
              </h3>

              <p>
                At Andaring, accessible from https://andaring.com/, one of our
                main priorities is the privacy of our visitors. This Privacy
                Policy document contains types of information that is collected
                and recorded by Andaring and how we use it.
              </p>

              <h3 className="font-semibold text-xl">Log Files</h3>

              <p>
                Andaring follows a standard procedure of using log files. These
                files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services&apos;
                analytics. The information collected by log files include
                internet protocol (IP) addresses, browser type, Internet Service
                Provider (ISP), date and time stamp, referring/exit pages, and
                possibly the number of clicks. These are not linked to any
                information that is personally identifiable. The purpose of the
                information is for analyzing trends, administering the site,
                tracking users&apos; movement on the website, and gathering
                demographic information.
              </p>

              <h3 className="font-semibold text-xl">Cookies and Web Beacons</h3>

              <p>
                Like any other website, Andaring uses &quat;cookies&quat;. These
                cookies are used to store information including visitors&apos;
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users&apos; experience by customizing our web page content based
                on visitors&apos; browser type and/or other information.
              </p>

              <h3 className="font-semibold text-xl">
                Google DoubleClick DART Cookie
              </h3>

              <p>
                Google is one of a third-party vendor on our site. It also uses
                cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to www.website.com and other
                sites on the internet. However, visitors may choose to decline
                the use of DART cookies by visiting the Google ad and content
                network Privacy Policy at the following URL –{" "}
                <a href="https://policies.google.com/technologies/ads">
                  https://policies.google.com/technologies/ads
                </a>
              </p>

              <h3 className="font-semibold text-xl">
                Our Advertising Partners
              </h3>

              <p>
                Some of advertisers on our site may use cookies and web beacons.
                Our advertising partners are listed below. Each of our
                advertising partners has their own Privacy Policy for their
                policies on user data. For easier access, we hyperlinked to
                their Privacy Policies below.
              </p>

              <ul className="space-y-3">
                <li>
                  <p className="mb-3 font-semibold text-lg">Google</p>
                  <p>
                    <a href="https://policies.google.com/technologies/ads">
                      https://policies.google.com/technologies/ads
                    </a>
                  </p>
                </li>
              </ul>

              <h3 className="font-semibold text-xl">Privacy Policies</h3>

              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of Andaring.
              </p>

              <p>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on Andaring,
                which are sent directly to users&apos; browser. They
                automatically receive your IP address when this occurs. These
                technologies are used to measure the effectiveness of their
                advertising campaigns and/or to personalize the advertising
                content that you see on websites that you visit.
              </p>

              <p>
                Note that Andaring has no access to or control over these
                cookies that are used by third-party advertisers.
              </p>

              <h3 className="font-semibold text-xl">
                Third Party Privacy Policies
              </h3>

              <p>
                Andaring&apos;s Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options.
              </p>

              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers&apos; respective websites. What Are Cookies?
              </p>

              <h3 className="font-semibold text-xl">
                Children&apos;s Information
              </h3>

              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>

              <p>
                Andaring does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.
              </p>

              <h3 className="font-semibold text-xl">
                Online Privacy Policy Only
              </h3>

              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in Andaring. This
                policy is not applicable to any information collected offline or
                via channels other than this website.
              </p>

              <h3 className="font-semibold text-xl">Consent</h3>

              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its Terms and Conditions.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
