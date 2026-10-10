"use client"

import React, { useState } from "react"
import { Landmark, MapPin, Search, Sparkles, X } from "lucide-react"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="relative z-40 overflow-hidden border-b-2 border-[#FFD700] bg-linear-to-r from-[#E64A00] via-[#FF5500] to-[#D83B00] text-white shadow-2xl">
      {/* =========================================================
          SINDURI CHOLA & GOLDEN RADIANT AMBIENT GLOWS
      ========================================================== */}

      {/* Bright Sinduri Orange Glow - Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#FF6600]/40 blur-[100px]"
      />

      {/* Golden Sun Radiant Glow - Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[650px] -translate-x-1/2 rounded-full bg-[#FFD700]/30 blur-[110px]"
      />

      {/* Vibrant Saffron Glow - Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#FF3300]/35 blur-[100px]"
      />

      {/* =========================================================
          TRADITIONAL PATTERN OVERLAY
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FFFFFF 1px, transparent 1px), linear-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* =========================================================
          HERITAGE SILHOUETTE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-28 w-full opacity-20"
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 160
              C90 150 140 138 220 145
              C300 152 350 125 425 130
              C505 136 555 108 630 115
              C710 122 755 92 835 100
              C915 108 965 78 1040 88
              C1120 98 1170 70 1240 82
              C1320 95 1365 72 1440 75
              L1440 180
              L0 180
              Z
            "
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* =========================================================
          GOLDEN DECORATIVE ACCENTS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-8 hidden h-2.5 w-2.5 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700] md:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[16%] top-14 hidden h-1.5 w-1.5 rounded-full bg-[#FFF066] shadow-[0_0_8px_#FFF066] md:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-10 hidden h-2 w-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700] md:block"
      />

      {/* =========================================================
          MAIN HEADER CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-8 lg:py-8">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* =====================================================
              BRAND IDENTITY
          ====================================================== */}

          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            {/* =================================================
                GOVERNMENT EMBLEM WITH SINDURI & GOLD RINGS
            ================================================== */}

            <div className="group relative shrink-0">
              {/* Outer Golden Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500 group-hover:rotate-12" />

              {/* Inner Dashed Ring */}
              <div className="absolute -inset-3.5 rounded-full border border-dashed border-[#FFF066]/70 transition-all duration-700 group-hover:-rotate-12" />

              {/* Emblem Container */}
              <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#FFD700] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(255,215,0,0.5)] sm:h-22 sm:w-22">
                <img
                  src="/governmentlogo.png"
                  alt="Government Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* =================================================
                BRAND CONTENT
            ================================================== */}

            <div className="min-w-0">
              {/* Official Badges */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD700] bg-[#B33600]/80 px-3 py-1 text-[9px] font-black tracking-[0.15em] text-[#FFD700] uppercase shadow-sm backdrop-blur-md">
                  <Landmark className="h-3 w-3 text-[#FFD700]" />
                  Uttar Pradesh Government
                </span>

                <span className="hidden items-center gap-1.5 rounded-full border border-[#FFD700]/60 bg-[#992E00]/70 px-3 py-1 text-[9px] font-bold tracking-wider text-white uppercase backdrop-blur-md sm:inline-flex">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
                  Official Portal
                </span>
              </div>

              {/* Hindi Name */}
              <h1 className="font-serif text-[22px] font-black leading-tight tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] sm:text-[26px] md:text-[30px]">
                नगर पंचायत, गोशांईगंज, अयोध्या
              </h1>

              {/* English Name */}
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFE5B4] drop-shadow-sm sm:text-xs md:text-sm">
                Nagar Panchayat Goshainganj, Ayodhya
              </p>

              {/* Location + Sacred Shri Ram & Hanuman Ji Identity */}
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-medium text-[#FFF0C2] sm:text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                  <MapPin className="h-3.5 w-3.5 text-[#FFD700]" />
                  अयोध्या, उत्तर प्रदेश
                </span>

                <span className="hidden text-[#FFD700] sm:inline">•</span>

                <span className="inline-flex items-center gap-1.5 font-bold italic tracking-wide text-[#FFD700] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <Sparkles className="h-3.5 w-3.5 text-[#FFD700]" />
                  जय श्री राम • सियावर रामचंद्र की जय
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              SEARCH INPUT
          ====================================================== */}

          <div className="relative z-10 flex w-full items-center lg:w-auto">
            <div className="group relative flex h-12 w-full items-center overflow-hidden rounded-2xl border-2 border-[#FFD700] bg-[#802600]/85 px-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white focus-within:border-white focus-within:ring-2 focus-within:ring-[#FFD700]/60 focus-within:shadow-[0_16px_40px_rgba(255,215,0,0.35)] sm:w-[330px]">
              {/* Search Hover Background Glow */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FF6600]/30 via-transparent to-[#FFD700]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex w-full items-center gap-2.5">
                {/* Search Icon with Golden Accent */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#FFD700] to-[#FFA500] text-[#802600] shadow-md transition-all duration-300 group-hover:scale-105">
                  <Search className="h-4 w-4 stroke-[2.5]" />
                </span>

                {/* Input Field */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="खोजें / Search services..."
                  className="w-full bg-transparent text-xs font-bold text-white placeholder-[#FFC299] outline-none"
                />

                {/* Clear / Shortcut Indicator */}
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#FFD700] text-[#802600] transition-colors hover:bg-white"
                  >
                    <X className="h-3 w-3 stroke-[3]" />
                  </button>
                ) : (
                  <span className="hidden shrink-0 rounded-lg border border-[#FFD700]/50 bg-[#661F00] px-2 py-1 text-[9px] font-black text-[#FFD700] shadow-xs transition-all duration-300 group-hover:border-[#FFD700] sm:inline-flex">
                    /
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          GOLDEN SUB-BAR ACCENT
      ========================================================== */}

      <div className="relative border-t border-[#FFD700]/40 bg-[#661F00]/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 md:px-8">
          {/* Left Decorative Golden Line */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
            <span className="h-0.5 w-12 bg-linear-to-r from-[#FFD700] to-transparent" />
          </div>

          <p className="w-full text-center text-[10px] font-black tracking-widest text-[#FFD700] uppercase sm:w-auto">
            ।। जय श्री राम • श्री राम जी की कृपा भूम ।।
          </p>

          {/* Right Decorative Golden Line */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-0.5 w-12 bg-linear-to-l from-[#FFD700] to-transparent" />
            <span className="h-2 w-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
          </div>
        </div>
      </div>

      {/* =========================================================
          BRIGHT GOLDEN BOTTOM ACCENT BORDER
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFD700] shadow-[0_0_12px_#FFD700]"
      />
    </header>
  )
}
