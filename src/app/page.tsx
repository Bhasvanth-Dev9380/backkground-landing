/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const logosDir = path.join(process.cwd(), "public", "logos");
const ALL_TOOL_LOGOS = fs
  .readdirSync(logosDir)
  .filter((f) => /\.(svg|png)$/i.test(f))
  .filter((f) => !/(white|dark|black|logo\.|aicrew|imessage)/i.test(f));

function pickRandom(arr: string[], n: number) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export default function Home() {
  const toolLogos = pickRandom(ALL_TOOL_LOGOS, 10);
  return (
    <section className="relative mt-32 w-full overflow-hidden border-b border-[#eee] py-12 min-[900px]:h-[800px] lg:py-48">
      <div className="px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-md">
            <div className="space-y-3 text-[#111]">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF8C00]">AI Workforce Platform</div>
              <h2 className="z-20 text-pretty text-3xl font-normal tracking-tight lg:text-[2.8rem] lg:leading-[1.2]">
                <span className="word-animate" style={{ animationDelay: "0s" }}>Your </span>
                <span className="word-animate font-semibold" style={{ animationDelay: "0.12s", color: "#FF8C00" }}>AI&nbsp;crew </span>
                <span className="word-animate" style={{ animationDelay: "0.24s" }}>just </span>
                <span className="word-animate" style={{ animationDelay: "0.36s" }}>clocked&nbsp;in. </span>
              </h2>
              <p className="max-w-[380px] text-[13.5px] leading-[1.7] text-[#555]">
                Your team burns 3+ hours a day on scheduling, follow-ups, and busywork. Just text your crew — it schedules, calls, builds, and ships. You stay in the loop.
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-[auto_1fr] items-start gap-x-3.5 gap-y-3 pt-7">
              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">AI Crew</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Meetings pile up. Tasks slip. Your crew handles it before you notice.</span>

              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><circle cx="5" cy="6" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="19" cy="6" r="3" stroke="currentColor" strokeWidth="2" /><path d="M8 6h8M5 9v6a3 3 0 003 3h8" stroke="currentColor" strokeWidth="2" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">Workflows</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Manual ops drain margins. Build automations visually, ship in minutes.</span>

              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">Chatbots</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Customers wait hours for answers already in your docs. Instant, RAG-powered.</span>

              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><path d="M8.91 3.75H3.75V5.81C3.75 13.79 10.21 20.25 18.19 20.25H20.25V15.09L16.13 13.03L14.58 14.58C12 13.55 10.45 12 9.42 9.42L10.97 7.88L8.91 3.75Z" stroke="currentColor" strokeWidth="2" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">Voice</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Losing leads after hours? Your AI agent picks up every call, 24/7 — no hold times, no missed revenue.</span>

              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">SLM</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Stop sending data to third-party LLMs. Your model, your terms.</span>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-interactive-framework" className="relative mt-8 h-[500px] w-full scale-[0.35] origin-top-left translate-x-0 min-[900px]:absolute min-[900px]:top-0 min-[900px]:mt-0 min-[900px]:h-[838px] min-[900px]:-top-20 min-[900px]:-translate-x-1/4 min-[900px]:translate-y-8 min-[900px]:scale-[0.94] lg:translate-x-0 lg:translate-y-0">
        <div className="h-[838px] w-full" style={{ opacity: 1 }}>
          <div className="absolute top-[120px] left-[calc(50%-600px)] h-[1095px] w-[1580px] -rotate-30 skew-x-30">
            <img className="absolute top-0 left-0 object-none" alt="Grid" src="/images/home/hero-grid.svg" style={{ opacity: 1 }} />

            {/* User icon card */}
            <div data-label="User" className="absolute top-[297px] left-[calc(50%-89px)] z-20 flex h-12 w-12 items-center justify-center card-hover-corners rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5 text-[#FF8C00]">
                  <path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor" />
                  <path d="M11.9989 12C7.21736 12 3.91209 15.7691 3.50083 20.4563L3.45312 21H20.5447L20.497 20.4563C20.0857 15.7691 16.7805 12 11.9989 12Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Voice Agents Stack — multilingual */}
            <div id="stack-voice" data-label="Voice" className="card-hover-corners relative absolute top-[592px] left-[calc(50%-60px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Voice</span>
                </div>
              </div>
              {/* English */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">EN</span>
                </div>
              </div>
              {/* Hindi */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">हिं</span>
                </div>
              </div>
              {/* Telugu */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">తె</span>
                </div>
              </div>
              {/* Tamil */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">தமி</span>
                </div>
              </div>
              {/* French */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">FR</span>
                </div>
              </div>
              {/* Japanese */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <span className="text-sm font-bold text-[#FF8C00]">日本</span>
                </div>
              </div>
            </div>

            {/* Pipeline lines container */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2">
              {/* Line 1 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_ir_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0.14542044792931447, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M600,328 L994,329" stroke="url(#_r_ir_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 2 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_is_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(179.85457955207067, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="3s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M994,321 L600,322" stroke="url(#_r_is_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 3 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_it_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(146.30993247402023, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0.5s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M1020,350 L1020,477 Q1020,485 1012,485 L773,485 Q765,485 765,493 L765,520" stroke="url(#_r_it_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 4 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_iu_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(89.59075139196507, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="1s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M760,550 L760,629.5 Q760,630 760.5,630 L760.5,630 Q761,630 761,630.5 L761,690" stroke="url(#_r_iu_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 5 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_iv_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0.3274008908443882, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="1.5s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M765,685 L940,686" stroke="url(#_r_iv_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 6a — Business Logic → Database */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j0_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(119.248826336547, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0s" from="-3 0" to="3 0" dur="5s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M1018,700 L1018.9360020479018,814.0002559877126 Q1019,821 1011,821 L798,821" stroke="url(#_r_j0_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 6b — Database → Business Logic */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j0b_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(119.248826336547, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0s" from="3 0" to="-3 0" dur="5s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M1030,700 L1030.9360020479018,822.0002559877126 Q1031,833 1023,833 L798,833" stroke="url(#_r_j0b_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 7 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j1_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(-89.23610153907002, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="2s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M1025,625 L1025,608 Q1025,600 1025.1599680095967,592.00159952016 L1026,550" stroke="url(#_r_j1_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 8 */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j2_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(-90.5729386976835, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="2.5s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M1030,550 L1028,350" stroke="url(#_r_j2_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* AI Magic pill */}
              <div className="absolute top-[735px] left-[calc(50%+335px)] z-20 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <span style={{ opacity: 1 }}>Our AI magic layer</span>
              </div>

              {/* Omnichannel pill */}
              <div className="absolute top-[313px] left-[calc(50%+180px)] z-20 flex items-center gap-1 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF8C00]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ opacity: 1 }}>Omnichannel</span>
              </div>

            </div>

            {/* Input Node Stack */}
            <div id="stack-io" data-label="Input" className="card-hover-corners relative absolute top-[289px] left-[calc(50%+17px)] z-20 text-[#FF8C00]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Input</span>
                </div>
              </div>
              {/* Chat bubble */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Text / keyboard */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M6 8h2M10 8h2M14 8h2M18 8h0M6 12h2M10 12h2M14 12h2M18 12h0M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Voice / microphone */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
                      <path d="M5 11a7 7 0 0014 0M12 18v4M9 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Phone call */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* APIs Node Stack */}
            <div id="stack-sdks" data-label="Apps" className="card-hover-corners relative absolute top-[290px] left-[calc(50%+118px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Apps</span>
                </div>
              </div>
              {/* iMessage */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="32" height="32" alt="iMessage" src="/logos/imessage.png" />
                  </div>
                </div>
              </div>
              {/* Spinabot App */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="40" height="40" alt="Spinabot" src="/logos/logo.svg" />
                  </div>
                </div>
              </div>
              {/* Telegram */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-2.357 1.022-18.044 7.267-19.513 7.86-.203.082-.78.352-.78.874s.508.727.764.826l4.58 1.667 1.753 5.584c.175.53.607.662.966.462l2.88-2.143 4.177 3.188c.303.232.665.358 1.04.358.69 0 1.139-.472 1.292-1.13L22.97 3.073c.2-.832-.275-1.478-.92-1.496zM9.6 14.28l-.57 3.456L7.78 13.2l11.4-7.5L9.6 14.28z" fill="#2AABEE" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="#25D366" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Discord */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflows Node Stack */}
            <div id="stack-stt" data-label="Workflows" className="card-hover-corners relative absolute top-[520px] left-[calc(50%+100px)] z-20 text-[#FF8C00]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Workflows</span>
                </div>
              </div>
              {/* Flowchart / decision tree */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="2" width="7" height="5" rx="1" fill="currentColor" />
                      <rect x="14" y="2" width="7" height="5" rx="1" fill="currentColor" />
                      <rect x="8" y="17" width="8" height="5" rx="1" fill="currentColor" />
                      <path d="M6.5 7v3h11V7M12 10v7" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Gear / automation */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Branch / split arrows */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="5" r="3" fill="currentColor" />
                      <circle cx="5" cy="19" r="3" fill="currentColor" />
                      <circle cx="19" cy="19" r="3" fill="currentColor" />
                      <path d="M12 8v2l-7 7M12 10l7 7" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Repeat / loop */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 13v2a4 4 0 01-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Node Stack */}
            <div id="stack-llm" data-label="Chatbot" className="card-hover-corners relative absolute top-[660px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Chatbot</span>
                </div>
              </div>
              {/* Clover */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Clover" className="h-8 w-8 object-contain" src="/logos/clover.svg" />
                  </div>
                </div>
              </div>
              {/* Salesforce */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Salesforce" className="h-8 w-8 object-contain" src="/logos/salesforce.png" />
                  </div>
                </div>
              </div>
              {/* Microsoft Dynamics CRM */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Microsoft Dynamics CRM" className="h-8 w-8 object-contain" src="/logos/ms-dynamics-crm.png" />
                  </div>
                </div>
              </div>
              {/* Chat / AI Avatar */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF8C00]">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent card — dual label: AI Crew (top) + Agent (bottom) */}
            <div className="agent-dual-label absolute top-[792px] left-[calc(50%+108px)] z-20" data-label="Agent" data-label-top="AI Crew">
              <div className="flex h-[50px] w-[50px] items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5 text-[#FF8C00]">
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M5 21v-2a7 7 0 0114 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <circle cx="18" cy="5" r="2.5" fill="currentColor" />
                    <circle cx="18" cy="5" r="1" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Logic card */}
            <div className="absolute top-[600px] left-[calc(50%+300px)] z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <img alt="Business Logic" className="h-[115px] w-[149px]" src="/images/home/tile-business-logic.png" />
              </div>
            </div>

            {/* Tools Node Stack */}
            <div id="stack-tools" data-label="Tools" className="card-hover-corners relative absolute top-[520px] left-[calc(50%+365px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Tools</span>
                </div>
              </div>
              {toolLogos.map((logo) => (
                <div key={logo} className="absolute">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                    <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                      <img alt={logo.replace(/\.\w+$/, "")} className="h-6 w-6" src={`/logos/${logo}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spinabot Cloud box */}
            <div className="absolute top-[268px] left-[1043px] flex h-[150px] w-[250px] flex-col items-center justify-center gap-2 rounded border border-dashed border-[#E8A020] bg-white transition-colors">
              <div className="absolute inset-0 overflow-hidden">
                <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <defs>
                    <radialGradient id="cloud-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Soft center glow */}
                  <rect width="250" height="150" fill="url(#cloud-glow)" />
                  {/* Dense dot grid */}
                  {Array.from({ length: 19 }).map((_, r) =>
                    Array.from({ length: 32 }).map((_, c) => (
                      <circle key={`g${r}-${c}`} cx={4 + c * 8} cy={4 + r * 8} r="0.7" fill="#E8A020" opacity={
                        Math.abs(c - 15.5) < 6 && Math.abs(r - 9) < 4 ? "0.35" : "0.15"
                      } />
                    ))
                  )}
                  {/* Cross-hair lines through center */}
                  <line x1="0" y1="75" x2="250" y2="75" stroke="#E8A020" strokeWidth="0.3" opacity="0.2" strokeDasharray="2 6" />
                  <line x1="125" y1="0" x2="125" y2="150" stroke="#E8A020" strokeWidth="0.3" opacity="0.2" strokeDasharray="2 6" />
                  {/* Subtle concentric rings */}
                  <circle cx="125" cy="75" r="24" stroke="#E8A020" strokeWidth="0.3" fill="none" opacity="0.15" />
                  <circle cx="125" cy="75" r="48" stroke="#E8A020" strokeWidth="0.3" fill="none" opacity="0.1" />
                  {/* Scanning line */}
                  <line x1="0" y1="0" x2="250" y2="0" stroke="#FF8C00" strokeWidth="0.5" opacity="0">
                    <animate attributeName="y1" values="0;150;0" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="0;150;0" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0.15;0;0.15;0" dur="6s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
              <div className="relative z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center" style={{ opacity: 1 }}>Orchestrator</div>
                </div>
              </div>
              <div className="relative z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center gap-1" style={{ opacity: 1 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF8C00]">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    </svg>
                    Encryption &amp; Security
                  </div>
                </div>
              </div>
              <div data-label="Spinabot" className="absolute -top-[70px] left-1 z-0 flex h-12 w-12 items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <img alt="Spinabot" className="spin-logo h-9 w-9" src="/logos/logo.svg" />
                </div>
              </div>
              
            </div>

            {/* Intent detection card */}
            <div className="absolute top-[470px] left-[calc(50%+160px)] z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <div className="flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="mr-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-4 w-4 text-[#FF8C00]">
                      <path d="M7.75 3.75V20.25M3.75 9.75V14.25M12 7.75V16.25M16.25 5.75V18.25M20.25 9.75V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  Intent detection
                </div>
              </div>
            </div>

            {/* Context memory card */}
            <div className="absolute top-[600px] left-[calc(50%+30px)] z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <div className="flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="mr-1">
                    <div style={{ transform: "rotate(103.392deg)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-4 w-4 text-[#FF8C00]">
                        <path d="M19.7596 14.75C18.627 17.9543 15.5711 20.25 11.979 20.25C7.42266 20.25 3.729 16.5563 3.729 12C3.729 7.44365 7.42266 3.75 11.979 3.75C14.7962 3.75 16.6791 4.95438 18.5 7.00891M19.25 4V8H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                  Human always in the loop
                </div>
              </div>
            </div>

            {/* Line 9 — Voice Agents ↔ Human in the loop */}
            <div className="pointer-events-none absolute top-[614px] left-[calc(50%-12px)] z-20 h-[1px] w-[42px] voice-line-fwd" />
            <div className="pointer-events-none absolute top-[618px] left-[calc(50%-12px)] z-20 h-[1px] w-[42px] voice-line-rev" />

            {/* Spinabot Engine box */}
            <div className="absolute top-[450px] left-[calc(50%-95px)] z-[5] flex h-[300px] w-[597px] px-3 py-2" style={{ opacity: 1, backgroundColor: "rgba(247, 247, 247, 0.85)", backdropFilter: "blur(6px)" }}>
              <a href="https://dashboard.spinabot.com" className="group h-fit self-start text-[#555] hover:text-[#FF8C00] hover:underline">
                <span className="flex gap-1 font-mono text-xs uppercase tracking-widest" style={{ opacity: 1 }}>
                  Spinabot Ecosystem
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-4 w-4 text-[#999] group-hover:text-[#FF8C00]">
                    <path d="M18.25 15.25V5.75H8.75M6 18L17.6002 6.39983" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </span>
              </a>
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j3_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(255,140,0,0.15)" />
                    <stop offset="20%" stopColor="rgba(255,140,0,0.15)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(255,140,0,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,140,0,0.15)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0s" from="-3 0" to="3 0" dur="4s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M298,1 L592,1 Q596,1 596,5 L596,293 Q596,297 592,297 L5,297 Q1,297 1,293 L1,5 Q1,1 5,1 L298,1" stroke="url(#_r_j3_)" strokeWidth="1.5" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
