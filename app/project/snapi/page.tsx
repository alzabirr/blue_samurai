import React from "react";
import Link from "next/link";
import { ScrollBurnText } from "@/components/ui/scroll-burn-text";
import { SnapiFeaturesStack } from "@/components/snapi/features-stack";

export const metadata = {
  title: "Snapi – Intelligent Screenshot Management | Blue Samurai",
  description:
    "Snapi automatically detects screenshots, extracts text with offline OCR, categorizes captures with smart search, voice notes, and recovery options.",
};

const SNAPI_SECTIONS = [
  {
    text: "Offline OCR",
    className: "text-[clamp(3.5rem,14vw,13rem)] text-[#0038FF]",
  },
  {
    text: "Smart Vaults",
    className: "text-[clamp(3rem,11vw,10rem)] text-[#0038FF]",
  },
  {
    text: "Voice Notes",
    className: "text-[clamp(3rem,12vw,11rem)] text-[#0038FF]",
  },
  {
    text: "100% Private",
    className: "text-[clamp(2.5rem,10vw,9rem)] text-[#0038FF]",
  },
];



export default function SnapiPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-clip">

      {/* ── BLUE HERO ZONE (navbar + hero together) ── */}
      <div className="relative bg-[#0038FF] min-h-screen flex flex-col justify-between overflow-hidden w-full">

        {/* NAVBAR */}
        <header className="relative z-30 px-6 py-5 md:px-12 md:py-7 max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 md:gap-6 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 z-10">
            <Link href="/" className="w-8 h-8 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" title="Home">
              <img src="/samuraiicon.png" alt="Home" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity select-none" />
            </Link>
            <Link href="/project" className="w-8 h-8 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" title="Projects">
              <img src="/projects.png" alt="Projects" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity select-none" />
            </Link>
            <Link href="/#contact" className="w-8 h-8 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" title="Contact">
              <img src="/contact.png" alt="Contact" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity select-none" />
            </Link>
          </nav>
          <Link
            href="/project"
            className="ml-auto flex items-center gap-2 bg-[#CCFF00] hover:bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 z-20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden md:inline">Products</span>
          </Link>
        </header>

        {/* HERO */}
        <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-4 overflow-hidden">

          {/* Large blurred glow behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white/5 blur-[140px] pointer-events-none" />

          {/* Giant full-screen title */}
          <h1
            className="hero-title-3d font-black leading-[0.84] tracking-tighter text-white text-center mb-8 md:mb-10 uppercase text-[clamp(6rem,28vw,340px)] select-none whitespace-nowrap"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            Snapi
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-white text-black font-black px-7 py-3.5 rounded-full text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              About the App
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-full text-sm transition-all backdrop-blur-sm"
            >
              Features
            </a>
            <a
              href="#privacy"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-full text-sm transition-all backdrop-blur-sm"
            >
              Privacy
            </a>
          </div>
        </section>

        {/* Scroll cue */}
        <div className="relative z-10 pb-6 md:pb-8 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Scroll to explore
          </span>
          <div className="w-4 h-7 border-2 border-white/30 rounded-full mt-2 flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>{/* end blue hero zone */}

      {/* ── SCROLL BURN EFFECT (white background, blue text) ── */}
      <div className="relative z-10 w-full flex flex-col items-center bg-white">
        <ScrollBurnText
          sections={SNAPI_SECTIONS}
          className="bg-white text-[#0038FF]"
          textClassName="text-[#0038FF]"
          columnClassName="w-auto max-w-[98vw] text-center font-black uppercase tracking-tighter leading-[0.88] whitespace-nowrap"
          far={1.6}
          near={0.85}
          runway="35vh"
          hint={null}
        />
      </div>

      {/* ── ABOUT THE APP ── */}
      <div className="relative z-20">
        <section
          id="about"
          className="bg-[#F4F6FB] text-black px-6 md:px-12 py-16 md:py-24 w-full"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0038FF] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              About the App
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6 text-neutral-900">
              What is <span className="text-[#0038FF]">Snapi?</span>
            </h2>
            <div className="space-y-5 text-neutral-700 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-neutral-900">Snapi</strong> is a smart screenshot management app designed for people who take a lot of screenshots but struggle to find them later. Instead of scrolling through hundreds of images, Snapi automatically intercepts every new screenshot, reads its content using <strong>offline OCR</strong>, and files it into the right smart vault — instantly.
              </p>
              <p>
                Whether it&apos;s a receipt, a code snippet, a social media post, or a handwritten note, Snapi reads, labels, and stores it. Everything stays completely on your device — no cloud uploads, no account required, no data ever leaves your phone.
              </p>
              <p>
                Beyond organization, Snapi lets you attach <strong>voice notes</strong> to captures, search across image text and audio transcripts at once, and recover accidentally deleted screenshots from its built-in trash system.
              </p>
            </div>

          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          id="features"
          className="bg-white text-black px-6 md:px-12 py-16 md:py-24 w-full"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-neutral-900">
                Built for <span className="text-[#0038FF]">Power Users</span>
              </h2>
            </div>

            {/* ── STACKING CARDS FEATURES ── */}
            <div className="w-full my-6 md:my-10">
              <SnapiFeaturesStack />
            </div>

            {/* Screenshots gallery */}
            <div className="mt-32 md:mt-48 pt-10 text-center">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-12">
                See Snapi in <span className="text-[#0038FF]">Action</span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
                {[
                  { src: "/assets/projects/snapi/image.png", caption: "Home Screen", tag: "Instant Capture" },
                  { src: "/assets/projects/snapi/image2.png", caption: "Smart Vaults", tag: "Auto Categorized" },
                  { src: "/assets/projects/snapi/image3.png", caption: "OCR Search", tag: "Deep Search" },
                ].map((sc) => (
                  <div key={sc.src} className="flex flex-col items-center gap-3 flex-1 w-full max-w-xs group">
                    <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200/80 bg-neutral-100 p-2 group-hover:-translate-y-2">
                      <img src={sc.src} alt={sc.caption} className="w-full h-auto object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-black uppercase tracking-wider text-neutral-800">{sc.caption}</span>
                      <span className="text-xs font-semibold text-neutral-400">{sc.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRIVACY POLICY ── */}
        <section
          id="privacy"
          className="bg-[#F4F6FB] text-black px-6 md:px-12 py-16 md:py-24 w-full"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0038FF] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              Privacy Policy
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8 text-neutral-900">
              Your Privacy, <span className="text-[#0038FF]">Guaranteed.</span>
            </h2>

            <div className="bg-white rounded-[2rem] border border-neutral-200 p-8 md:p-12 space-y-8 shadow-sm">
              {[
                {
                  title: "1. Data Collection",
                  content:
                    "Snapi does not collect any personal data. All screenshot content, OCR text, voice notes, and metadata are stored exclusively on your device and never transmitted to any server.",
                },
                {
                  title: "2. On-Device Processing",
                  content:
                    "All text extraction (OCR), voice transcription, and categorization happens entirely on-device using local machine learning models. No image or audio data is sent to the internet at any point.",
                },
                {
                  title: "3. No Account Required",
                  content:
                    "Snapi requires no user account, email address, or phone number to function. You can use all features anonymously from the moment you install the app.",
                },
                {
                  title: "4. Storage Permissions",
                  content:
                    "Snapi requests access to your photo library solely to detect and process new screenshots. We do not access, upload, or share any other photos or media.",
                },
                {
                  title: "5. Microphone Permission",
                  content:
                    "Microphone access is only used when you explicitly record a voice note. The app does not record audio passively or in the background.",
                },
                {
                  title: "6. Third-Party Services",
                  content:
                    "Snapi does not integrate with any third-party analytics, advertising, or tracking services. There are no SDKs that report usage data.",
                },
                {
                  title: "7. Data Deletion",
                  content:
                    "Uninstalling Snapi permanently removes all app data from your device. There is no server-side data to request deletion of, because we never stored any.",
                },
                {
                  title: "8. Changes to This Policy",
                  content:
                    "Any updates to this Privacy Policy will be reflected within the app. Continued use of Snapi after changes constitutes acceptance of the updated policy.",
                },
                {
                  title: "9. Contact",
                  content:
                    "If you have questions about this Privacy Policy, you can reach us via the contact section of the Blue Samurai website.",
                },
              ].map((item) => (
                <div key={item.title} className="border-b border-neutral-100 last:border-0 pb-8 last:pb-0">
                  <h4 className="text-base md:text-lg font-black text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{item.content}</p>
                </div>
              ))}

              <div className="pt-4">
                <p className="text-xs text-neutral-400 font-medium">
                  Last updated: September 2026 &nbsp;·&nbsp; Blue Samurai Studio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <section className="bg-[#0038FF] px-6 md:px-12 py-16 w-full">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                Interested in Snapi?
              </h3>
              <p className="text-white/70 text-base">
                See all our other products or get in touch with the team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-white text-black font-black px-6 py-3 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                All Products
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-full text-sm transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
