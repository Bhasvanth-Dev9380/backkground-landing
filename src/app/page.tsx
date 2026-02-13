/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";

const logosDir = path.join(process.cwd(), "public", "logos");
const ALL_TOOL_LOGOS = fs
  .readdirSync(logosDir)
  .filter((f) => /\.(svg|png)$/i.test(f))
  .filter((f) => !/(white|dark|black|logo\.|aicrew)/i.test(f));

function pickRandom(arr: string[], n: number) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export default function Home() {
  const toolLogos = pickRandom(ALL_TOOL_LOGOS, 10);
  return (
    <section className="relative mt-32 w-full overflow-hidden border-b border-[#eee] py-12 md:h-[800px] lg:py-48">
      <div className="px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-md">
            <div className="space-y-3 text-[#222]">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF8C00]">AI Workforce Platform</div>
              <h2 className="z-20 text-pretty text-3xl font-light tracking-tight lg:text-[2.8rem] lg:leading-[1.2]">
                <span className="word-animate" style={{ animationDelay: "0s" }}>Your </span>
                <span className="word-animate" style={{ animationDelay: "0.12s", color: "#FF8C00", filter: "drop-shadow(rgba(255,140,0,0.5) 0px 0px 10px)" }}>AI&nbsp;crew </span>
                <span className="word-animate" style={{ animationDelay: "0.24s" }}>just </span>
                <span className="word-animate" style={{ animationDelay: "0.36s" }}>clocked&nbsp;in. </span>
              </h2>
              <p className="max-w-[380px] text-[13px] leading-[1.7] text-[#666]">
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
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Can&#39;t hire fast enough? Deploy a rep that never sleeps. Sub-500ms.</span>

              <div className="flex flex-col items-center gap-1 pt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#FF8C00]"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] font-medium text-[#333]">SLM</span>
              </div>
              <span className="pt-1 text-[13px] leading-[1.6] text-[#555]">Stop sending data to third-party LLMs. Your model, your terms.</span>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-interactive-framework" className="absolute top-0 hidden h-[838px] w-full -translate-x-1/3 translate-y-20 scale-[0.5] md:-top-20 md:-translate-x-1/4 md:translate-y-8 md:scale-[0.94] lg:translate-x-0 lg:translate-y-0 md:block">
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

            {/* Voice Agents Stack — human in the loop */}
            <div id="stack-voice" data-label="Voice" className="card-hover-corners relative absolute top-[592px] left-[calc(50%-60px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>Voice</span>
                </div>
              </div>
              {/* Headset / agent */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Sound wave */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Human-in-the-loop */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="7" r="4" fill="currentColor" />
                      <path d="M5 21v-2a7 7 0 0114 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M17 13l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 17H13a4 4 0 00-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* AI avatar talk */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M3 21v-1a6 6 0 0112 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <path d="M17 8l2-2 2 2M17 12l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
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

              {/* Line 9 — Voice Agents → Human in the loop */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_voice_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="0s" from="-3 0" to="3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M628,616 L670,616" stroke="url(#_r_voice_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* Line 9b — Human in the loop → Voice Agents */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_voice_b_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                    <animateTransform attributeName="gradientTransform" type="translate" additive="sum" begin="1.5s" from="3 0" to="-3 0" dur="3s" repeatCount="indefinite" restart="whenNotActive" />
                  </linearGradient>
                </defs>
                <path d="M670,624 L628,624" stroke="url(#_r_voice_b_)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
              </svg>

              {/* AI Magic pill */}
              <div className="absolute top-[735px] left-[calc(50%+335px)] z-20 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <span style={{ opacity: 1 }}>Our AI magic layer</span>
              </div>

              {/* gRPC pill */}
              <div className="absolute top-[313px] left-[calc(50%+180px)] z-20 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <span style={{ opacity: 1 }}>gRPC</span>
              </div>

            </div>

            {/* Input Node Stack */}
            <div id="stack-io" data-label="Input" className="card-hover-corners relative absolute top-[289px] left-[calc(50%+17px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
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
            <div id="stack-sdks" data-label="APIs" className="card-hover-corners relative absolute top-[290px] left-[calc(50%+118px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>APIs</span>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="20" height="20" alt="Swift Logo" src="/logos/square/swift.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="20" height="20" alt="Flutter Logo" src="/logos/square/flutter.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="20" height="20" alt="React Logo" src="/logos/square/react-native.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img width="20" height="20" alt="Python Logo" src="/logos/square/python.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Workflows Node Stack */}
            <div id="stack-stt" data-label="Workflows" className="card-hover-corners relative absolute top-[520px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
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
                    <img alt="Clover" className="h-6 w-6 object-contain" src="/logos/clover.svg" />
                  </div>
                </div>
              </div>
              {/* Salesforce */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Salesforce" className="h-6 w-6 object-contain" src="/logos/salesforce.png" />
                  </div>
                </div>
              </div>
              {/* Microsoft Dynamics CRM */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Microsoft Dynamics CRM" className="h-6 w-6 object-contain" src="/logos/ms-dynamics-crm.png" />
                  </div>
                </div>
              </div>
              {/* Chat / AI Avatar */}
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="currentColor" />
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
              <div className="absolute inset-0" style={{ maskImage: "linear-gradient(90deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 40%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.2) 100%)", WebkitMaskImage: "linear-gradient(90deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 40%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.2) 100%)", maskPosition: "-35.25px 0px", maskSize: "250px 150px" }}>
                <img alt="Map" className="h-full w-full" src="/images/map.png" />
              </div>
              <div className="relative z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center" style={{ opacity: 1 }}>Orchestrator</div>
                </div>
              </div>
              <div className="relative z-20 flex items-center justify-center card-hover-corners label-push rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center" style={{ opacity: 1 }}>Agent runtime</div>
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

            {/* Spinabot Engine box */}
            <div className="absolute top-[450px] left-[calc(50%-95px)] z-[5] flex h-[300px] w-[597px] px-3 py-2" style={{ opacity: 1, backgroundColor: "rgba(247, 247, 247, 0.85)", backdropFilter: "blur(6px)" }}>
              <a href="#" className="group h-fit self-start text-[#555] hover:text-[#FF8C00] hover:underline">
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
