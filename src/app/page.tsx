/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <section className="relative mt-32 w-full overflow-hidden border-b border-[#eee] py-12 md:h-[800px] lg:py-48">
      <div className="px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-md">
            <div className="space-y-2 text-[#222]">
              <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#222]">Developer platform</div>
              <h2 className="z-20 text-pretty text-3xl font-light tracking-tight lg:text-4xl">
                <span className="word-animate" style={{ animationDelay: "0s" }}>The </span>
                <span className="word-animate" style={{ animationDelay: "0.1s", color: "#FF8C00", filter: "drop-shadow(rgba(255,140,0,0.6) 0px 0px 12px)" }}>complete </span>
                <span className="word-animate" style={{ animationDelay: "0.2s" }}>stack </span>
                <span className="word-animate" style={{ animationDelay: "0.3s" }}>for </span>
                <span className="word-animate" style={{ animationDelay: "0.4s" }}>Voice </span>
                <span className="word-animate" style={{ animationDelay: "0.5s" }}>AI </span>
              </h2>
            </div>
            <div className="relative z-10 flex flex-col items-start gap-0 py-8 md:py-12">
              <div className="relative">
                <div className="pointer-events-none flex w-full max-w-md gap-3 py-2 text-sm text-[#444] transition-all duration-300 md:pointer-events-auto">
                  <span className="shrink-0 text-[#FF8C00]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5">
                      <path d="M9.75 20.25L14.25 3.75M18.25 7.75L22.25 12L18.25 16.25M5.75 16.25L1.75 12L5.75 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </span>
                  <span>Open source framework to build and test agents</span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none flex w-full max-w-md gap-3 py-2 text-sm text-[#444] transition-all duration-300 md:pointer-events-auto">
                  <span className="shrink-0 text-[#FF8C00]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5">
                      <path d="M8.75 13.75C10.5449 13.75 12 15.2051 12 17M15.25 10.25C13.4551 10.25 12 8.79493 12 7M12 3.65628V20.1132M19.0167 17.8991C20.3271 17.3617 21.25 16.0734 21.25 14.5694C21.25 13.5629 20.8366 12.6529 20.1703 12C20.8366 11.3471 21.25 10.4371 21.25 9.43056C21.25 7.57553 19.8459 6.04846 18.0425 5.8542C17.5934 4.07047 15.9787 2.75 14.0556 2.75C13.3067 2.75 12.6047 2.9502 12 3.29999C11.3953 2.9502 10.6933 2.75 9.94444 2.75C8.02133 2.75 6.40662 4.07047 5.95754 5.8542C4.15413 6.04846 2.75 7.57553 2.75 9.43056C2.75 10.4371 3.16341 11.3471 3.82969 12C3.16341 12.6529 2.75 13.5629 2.75 14.5694C2.75 16.0734 3.67291 17.3617 4.98327 17.8991C5.5365 19.8338 7.31815 21.25 9.43056 21.25C10.3813 21.25 11.2651 20.9631 12 20.4712C12.7349 20.9631 13.6187 21.25 14.5694 21.25C16.6819 21.25 18.4635 19.8338 19.0167 17.8991Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </span>
                  <span>Inference gateway to access TTS, LLM, and STT models</span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none flex w-full max-w-md gap-3 py-2 text-sm text-[#444] transition-all duration-300 md:pointer-events-auto">
                  <span className="shrink-0 text-[#FF8C00]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5">
                      <path d="M17.125 19.25H8.925C4.96236 19.25 1.75 16.0041 1.75 12C1.75 7.99594 4.96236 4.75 8.925 4.75C11.8865 4.75 14.4289 6.56294 15.5245 9.15037C16.0281 8.98326 16.5661 8.89286 17.125 8.89286C19.9555 8.89286 22.25 11.2114 22.25 14.0714C22.25 16.9315 19.9555 19.25 17.125 19.25Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span>Cloud platform for deploying and scaling agents</span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none flex w-full max-w-md gap-3 py-2 text-sm text-[#444] transition-all duration-300 md:pointer-events-auto">
                  <span className="shrink-0 text-[#FF8C00]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5">
                      <path d="M8.90625 3.75H3.75V5.8125C3.75 13.7861 10.2139 20.25 18.1875 20.25H20.25V15.0938L16.125 13.0312L14.5781 14.5781C12 13.5469 10.4531 12 9.42188 9.42188L10.9688 7.875L8.90625 3.75Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span>Phone numbers and SIP integrations for telephony</span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none flex w-full max-w-md gap-3 py-2 text-sm text-[#444] transition-all duration-300 md:pointer-events-auto">
                  <span className="shrink-0 text-[#FF8C00]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5">
                      <path d="M3.75 9.25H9.25V3.75H3.75V9.25ZM3.75 9.25V14.75M3.75 9.25H14.75V14.75H3.75M3.75 14.75V20.25H20.25V14.75H3.75ZM3.75 1.75V22.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </span>
                  <span>Full-stack observability for every agent session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-interactive-framework" className="absolute top-0 hidden h-[838px] w-full -translate-x-1/3 translate-y-20 scale-[0.5] md:-top-20 md:-translate-x-1/4 md:translate-y-8 md:scale-[0.94] lg:translate-x-0 lg:translate-y-0 md:block">
        <div className="h-[838px] w-full" style={{ opacity: 1 }}>
          <div className="absolute top-[120px] left-[calc(50%-600px)] h-[1095px] w-[1580px] -rotate-30 skew-x-30">
            <img className="absolute top-0 left-0 object-none" alt="Grid" src="/images/home/hero-grid.svg" style={{ opacity: 1 }} />

            {/* User icon card */}
            <div className="absolute top-[297px] left-[calc(50%-89px)] z-20 flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
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

              {/* Line 6 (static) */}
              <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <defs>
                  <linearGradient id="_r_j0_" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(119.248826336547, 0.5, 0.5)">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="20%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="80%" stopColor="rgba(0,0,0,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
                  </linearGradient>
                </defs>
                <path d="M1020,700 L1020.9360020479018,817.0002559877126 Q1021,825 1013,825 L950,825" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" strokeLinecap="round" pathLength={1} strokeDashoffset="0px" strokeDasharray="1px 1px" />
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

              {/* HTTP/Websocket pill */}
              <div className="absolute top-[735px] left-[calc(50%+320px)] z-20 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <span style={{ opacity: 1 }}>HTTP/Websocket</span>
              </div>

              {/* WebRTC pill */}
              <div className="absolute top-[313px] left-[calc(50%+180px)] z-20 rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                <span style={{ opacity: 1 }}>WebRTC</span>
              </div>
            </div>

            {/* I/O Node Stack */}
            <div id="stack-io" className="relative absolute top-[289px] left-[calc(50%+17px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>I/O</span>
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

            {/* SDKs Node Stack */}
            <div id="stack-sdks" className="relative absolute top-[290px] left-[calc(50%+118px)] z-20 text-[#333]" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>SDKs</span>
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

            {/* STT Node Stack */}
            <div id="stack-stt" className="relative absolute top-[520px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>STT</span>
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
            <div id="stack-llm" className="relative absolute top-[660px] left-[calc(50%+100px)] z-20" style={{ transformStyle: "preserve-3d" }}>
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

            {/* Database card */}
            <div className="absolute top-[792px] left-[calc(50%+258px)] z-20 flex h-[50px] w-[50px] items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-5 w-5 text-[#FF8C00]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 5.14C20 4.57 19.67 4.09 19.23 3.73C18.79 3.36 18.18 3.05 17.47 2.8C16.05 2.3 14.11 2 12 2C9.89 2 7.95 2.3 6.53 2.8C5.82 3.05 5.21 3.36 4.77 3.73C4.33 4.09 4 4.57 4 5.14V9.24C4 9.45 4.12 9.71 4.49 10.02C4.86 10.33 5.42 10.62 6.16 10.88C7.63 11.4 9.7 11.73 12 11.73C14.3 11.73 16.37 11.4 17.84 10.88C18.58 10.62 19.14 10.32 19.51 10.02C19.88 9.71 20 9.45 20 9.24V5.14ZM5.41 4.5C5.73 4.24 6.22 3.98 6.86 3.75C8.15 3.3 9.97 3.01 12 3.01C14.03 3.01 15.85 3.3 17.14 3.75C17.79 3.98 18.28 4.24 18.59 4.5C18.91 4.77 19 4.99 19 5.14C19 5.29 18.91 5.52 18.59 5.78C18.27 6.04 17.78 6.3 17.14 6.53C15.85 6.98 14.03 7.27 12 7.27C9.97 7.27 8.15 6.98 6.86 6.53C6.21 6.3 5.72 6.04 5.41 5.78C5.09 5.51 5 5.29 5 5.14C5 4.99 5.09 4.76 5.41 4.5ZM18.18 11.83C18.9 11.58 19.53 11.27 20 10.91V13.49C20 13.7 19.88 13.96 19.51 14.27C19.14 14.58 18.58 14.87 17.84 15.13C16.37 15.65 14.3 15.98 12 15.98C9.7 15.98 7.63 15.65 6.16 15.13C5.42 14.87 4.86 14.57 4.49 14.27C4.12 13.96 4 13.7 4 13.49V10.91C4.48 11.27 5.1 11.57 5.82 11.83C7.42 12.39 9.61 12.73 12 12.73C14.39 12.73 16.57 12.39 18.18 11.83ZM18.18 16.08C18.9 15.83 19.53 15.52 20 15.16V18.86C20 19.43 19.67 19.91 19.23 20.27C18.79 20.64 18.18 20.95 17.47 21.2C16.05 21.7 14.11 22 12 22C9.89 22 7.95 21.7 6.53 21.2C5.82 20.95 5.21 20.64 4.77 20.27C4.33 19.9 4 19.43 4 18.86V15.16C4.48 15.52 5.1 15.82 5.82 16.08C7.42 16.64 9.61 16.98 12 16.98C14.39 16.98 16.57 16.64 18.18 16.08Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Business Logic card */}
            <div className="absolute top-[600px] left-[calc(50%+300px)] z-20 flex items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <img alt="Business Logic" className="h-[115px] w-[149px]" src="/images/home/tile-business-logic.svg" />
              </div>
            </div>

            {/* TTS Node Stack */}
            <div id="stack-tts" className="relative absolute top-[520px] left-[calc(50%+365px)] z-20" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 1 }}>
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>TTS</span>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="Cartesia Logo" className="h-6 w-6" src="/logos/square/cartesia.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] p-3 shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                  <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                    <img alt="ElevenLabs Logo" className="h-6 w-6" src="/logos/square/elevenlabs.svg" />
                  </div>
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
                    <img alt="Groq Logo" className="h-6 w-6" src="/logos/square/groq.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* LiveKit Cloud box */}
            <div className="absolute top-[268px] left-[1043px] flex h-[150px] w-[250px] flex-col items-center justify-center gap-2 rounded border border-dashed border-[#E8A020] bg-white transition-colors">
              <div className="absolute inset-0" style={{ maskImage: "linear-gradient(90deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 40%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.2) 100%)", WebkitMaskImage: "linear-gradient(90deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 40%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.2) 100%)", maskPosition: "-35.25px 0px", maskSize: "250px 150px" }}>
                <img alt="Map" className="h-full w-full" src="/images/map.png" />
              </div>
              <div className="relative z-20 flex items-center justify-center rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center" style={{ opacity: 1 }}>Media server</div>
                </div>
              </div>
              <div className="relative z-20 flex items-center justify-center rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="flex items-center justify-center" style={{ opacity: 1 }}>Agent server</div>
                </div>
              </div>
              <div className="absolute -top-[70px] left-1 z-0 flex h-12 w-12 items-center justify-center rounded-md border border-[#E8A020] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
                <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF8C00]" role="img" aria-label="LiveKit wordmark">
                    <path d="M14.4004 9.59961H9.59961V14.4004H14.4004V9.59961Z" fill="currentColor" />
                    <path d="M19.2011 4.80078H14.4004V9.60153H19.2011V4.80078Z" fill="currentColor" />
                    <path d="M19.2011 14.4004H14.4004V19.2011H19.2011V14.4004Z" fill="currentColor" />
                    <path d="M24 0H19.1992V4.80075H24V0Z" fill="currentColor" />
                    <path d="M24 19.1992H19.1992V24H24V19.1992Z" fill="currentColor" />
                    <path d="M4.80075 19.1992V14.4004V9.59962V4.80075V0H0V4.80075V9.59962V14.4004V19.1992V24H4.80075H9.59963H14.4004V19.1992H9.59963H4.80075Z" fill="#FF8C00" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-4 -left-5">
                <div className="rounded-full border border-[#E8A020] bg-white px-2 py-0.5 text-[10px] text-[#333] transition-all duration-500 ease-out">
                  <span style={{ opacity: 1 }}>LiveKit Cloud</span>
                </div>
              </div>
            </div>

            {/* Noise cancellation card */}
            <div className="absolute top-[470px] left-[calc(50%+160px)] z-20 flex items-center justify-center rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <div className="flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="mr-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-4 w-4 text-[#FF8C00]">
                      <path d="M7.75 3.75V20.25M3.75 9.75V14.25M12 7.75V16.25M16.25 5.75V18.25M20.25 9.75V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  Noise cancellation
                </div>
              </div>
            </div>

            {/* Semantic turn detection card */}
            <div className="absolute top-[600px] left-[calc(50%+30px)] z-20 flex items-center justify-center rounded-md border border-[#E8A020] px-3 py-1.5 text-xs text-[#333] shadow-[-3px_3px_0px_0px_rgba(255,140,0,0.25)] transition-all duration-500 ease-out hover:border-[#FF8C00] hover:shadow-[-3px_3px_0px_0px_#FF8C00]" style={{ backgroundColor: "#ffffff", transform: "none" }}>
              <div className="relative flex items-center justify-center" style={{ opacity: 1 }}>
                <div className="flex items-center justify-center" style={{ opacity: 1 }}>
                  <div className="mr-1">
                    <div style={{ transform: "rotate(103.392deg)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-4 w-4 text-[#FF8C00]">
                        <path d="M19.7596 14.75C18.627 17.9543 15.5711 20.25 11.979 20.25C7.42266 20.25 3.729 16.5563 3.729 12C3.729 7.44365 7.42266 3.75 11.979 3.75C14.7962 3.75 16.6791 4.95438 18.5 7.00891M19.25 4V8H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                  Semantic turn detection
                </div>
              </div>
            </div>

            {/* Agents Framework box */}
            <div className="absolute top-[450px] left-[calc(50%-95px)] z-[5] flex h-[300px] w-[597px] px-3 py-2" style={{ opacity: 1, backgroundColor: "rgba(247, 247, 247, 0.85)", backdropFilter: "blur(6px)" }}>
              <a href="https://docs.livekit.io/agents" target="_blank" rel="noopener noreferrer" className="group h-fit self-start text-[#555] hover:text-[#FF8C00] hover:underline">
                <span className="flex gap-1 font-mono text-xs uppercase tracking-widest" style={{ opacity: 1 }}>
                  Agents Framework
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
