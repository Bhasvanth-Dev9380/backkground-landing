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
                <span style={{ opacity: 1 }}>Our AI magic</span>
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
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                      <path d="M7.00171 7C7.00171 4.23858 9.24029 2 12.0017 2C14.7631 2 17.0017 4.23858 17.0017 7V12C17.0017 14.7614 14.7631 17 12.0017 17C9.24029 17 7.00171 14.7614 7.00171 12V7Z" fill="currentColor" />
                      <path d="M5.25323 13.867L5.12021 13.385L4.15625 13.6511L4.28928 14.133C5.18021 17.3611 8.04316 19.7714 11.5016 19.9846V22H12.5016V19.9846C15.9601 19.7714 18.8231 17.3611 19.714 14.133L19.847 13.6511L18.8831 13.385L18.75 13.867C17.9331 16.827 15.2205 19 12.0016 19C8.78279 19 6.07019 16.827 5.25323 13.867Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2 4H16V9.19141L22 6.19141V17.8094L16 14.8094V20H2V4ZM16 13.6914L21 16.1914V7.80944L16 10.3094V13.6914Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2 4H5V5H3V7H2V4ZM7 4H11V5H7V4ZM13 4H17V5H13V4ZM18.8889 4H22V7H21V5H18.8889V4ZM3 10V14H2V10H3ZM18.5 11C16.0147 11 14 13.0147 14 15.5C14 17.9853 16.0147 20 18.5 20C20.9853 20 23 17.9853 23 15.5C23 13.0147 20.9853 11 18.5 11ZM13 15.5C13 12.4624 15.4624 10 18.5 10C21.5376 10 24 12.4624 24 15.5C24 18.5376 21.5376 21 18.5 21C15.4624 21 13 18.5376 13 15.5ZM15.5 15.5C15.5 13.8431 16.8431 12.5 18.5 12.5C20.1569 12.5 21.5 13.8431 21.5 15.5C21.5 17.1569 20.1569 18.5 18.5 18.5C16.8431 18.5 15.5 17.1569 15.5 15.5ZM3 16.8571V19H5V20H2V16.8571H3ZM7 19H11V20H7V19Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] px-3 py-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                      <path d="M3 3V5.625C3 14.1164 9.88362 21 18.375 21H21V14.8785L16.1513 12.4541L14.539 14.0664C12.2916 13.1001 10.8999 11.7084 9.93361 9.46099L11.5459 7.84873L9.12152 3H3Z" fill="currentColor" />
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

            {/* NLU Node Stack */}
            <div id="stack-stt" data-label="NLU" className="card-hover-corners relative absolute top-[520px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>NLU</span>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Deepgram Logo" className="h-6 w-6" src="/logos/square/deepgram.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="OpenAI Logo" className="h-6 w-6" src="/logos/square/open-ai.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Groq Logo" className="h-6 w-6" src="/logos/square/groq.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Google Logo" className="h-6 w-6" src="/logos/square/google.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* LLM Node Stack */}
            <div id="stack-llm" data-label="LLM" className="card-hover-corners relative absolute top-[660px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>LLM</span>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="OpenAI Logo" className="h-6 w-6" src="/logos/square/open-ai.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Google Logo" className="h-6 w-6" src="/logos/square/google.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Cerebras Logo" className="h-6 w-6" src="/logos/square/cerebras.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Perplexity Logo" className="h-6 w-6" src="/logos/square/perplexity.svg" />
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
                <img alt="Business Logic" className="h-[115px] w-[149px]" src="/images/home/tile-business-logic.svg" />
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
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF8C00]" role="img" aria-label="Spinabot logo">
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M5.64 18.36l2.83-2.83M15.54 8.46l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
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
