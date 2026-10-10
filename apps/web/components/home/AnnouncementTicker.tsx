"use client"

import { ArrowUpRight, Megaphone } from "lucide-react"

export default function AnnouncementTicker() {
  const notices = [
    {
      id: "property-tax",
      text: "संपत्ति कर सूचना: नगर पंचायत गोशांईगंज के नागरिकों के लिए संपत्ति एवं गृह कर भुगतान की सुविधा उपलब्ध है। नागरिक समय से अपना कर जमा करें।",
      link: "/propertytax",
    },
    {
      id: "water-supply",
      text: "जल आपूर्ति सूचना: गोशांईगंज नगर क्षेत्र में जल आपूर्ति, जल बिल एवं जल संबंधी नागरिक सेवाओं के लिए आवश्यक सुविधाएं उपलब्ध हैं।",
      link: "/services",
    },
    {
      id: "public-grievance",
      text: "जन शिकायत सूचना: नागरिक सड़क, नाली, सफाई, स्ट्रीट लाइट, जल आपूर्ति एवं अन्य नागरिक समस्याओं से संबंधित शिकायत ऑनलाइन दर्ज कर सकते हैं।",
      link: "/public-grievance",
    },
    {
      id: "citizen-services",
      text: "नागरिक सेवा सूचना: जन्म प्रमाण पत्र, मृत्यु प्रमाण पत्र, व्यापार लाइसेंस एवं अन्य नगर पंचायत सेवाओं से संबंधित जानकारी और सुविधाएं पोर्टल पर उपलब्ध हैं।",
      link: "/services",
    },
    {
      id: "cleanliness",
      text: "स्वच्छता अभियान: स्वच्छ एवं सुंदर गोशांईगंज के लिए नगर पंचायत द्वारा सफाई, कचरा प्रबंधन एवं जन-जागरूकता से संबंधित गतिविधियों पर निरंतर कार्य किया जा रहा है।",
      link: "/about",
    },
    {
      id: "goshainganj-development",
      text: "गोशांईगंज विकास सूचना: नगर क्षेत्र में सड़क, नाली, प्रकाश व्यवस्था, स्वच्छता एवं अन्य आवश्यक नागरिक सुविधाओं के विकास और सुधार के लिए कार्य किए जा रहे हैं।",
      link: "/about",
    },
    {
      id: "development",
      text: "विकास सूचना: नगर पंचायत गोशांईगंज द्वारा नागरिक सुविधाओं को बेहतर बनाने तथा नगर के सुव्यवस्थित विकास के लिए विभिन्न विकास कार्य किए जा रहे हैं।",
      link: "#news-notices",
    },
    {
      id: "tender",
      text: "निविदा सूचना: नगर पंचायत गोशांईगंज द्वारा विभिन्न विकास कार्यों एवं नागरिक सुविधाओं से संबंधित निविदा एवं अन्य महत्वपूर्ण सूचनाएं समय-समय पर प्रकाशित की जाती हैं।",
      link: "#news-notices",
    },
  ]

  return (
    <section
      aria-label="Latest announcements"
      className="relative z-30 flex w-full flex-col overflow-hidden border-y border-amber-600/30 bg-linear-to-r from-[#b45309] via-[#d97706] to-[#b45309] text-white shadow-[0_8px_25px_rgba(180,83,9,0.2)] md:flex-row"
    >
      {/* =====================================================
          ANNOUNCEMENT TITLE
      ====================================================== */}
      <div className="relative z-20 flex shrink-0 items-center border-b border-white/10 bg-linear-to-r from-[#78350f] to-[#92400e] px-5 py-3 md:border-b-0 md:border-r md:px-7">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200/30 bg-amber-100/10 shadow-inner">
            <span className="absolute inset-0 animate-ping rounded-xl bg-amber-300/20" />
            <Megaphone className="relative h-4 w-4 text-amber-200" />
          </div>

          {/* Text */}
          <div className="whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white sm:text-[11px]">
                Announcements
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
            </div>

            <p className="mt-0.5 text-[8px] font-semibold text-amber-100 sm:text-[9px]">
              नवीनतम सूचनाएं • गोशांईगंज
            </p>
          </div>
        </div>

        {/* Decorative edge */}
        <div className="absolute right-0 top-0 hidden h-full w-px bg-linear-to-b from-transparent via-amber-200/40 to-transparent md:block" />
      </div>

      {/* =====================================================
          TICKER CONTENT
      ====================================================== */}
      <div className="relative flex min-w-0 flex-1 items-center overflow-hidden bg-linear-to-r from-[#d97706] via-[#ea580c] to-[#d97706]">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-linear-to-r from-[#d97706] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#d97706] to-transparent" />

        {/* Marquee */}
        <div
          className="announcement-marquee flex min-w-max items-center gap-12 whitespace-nowrap py-3.5 pl-8 pr-12"
          style={{
            animationDuration: "70s",
          }}
        >
          {/* FIRST LOOP */}
          {notices.map((notice) => (
            <a
              key={notice.id}
              href={notice.link}
              className="group flex items-center gap-2.5 text-[10px] font-semibold text-amber-50/90 transition-all duration-300 hover:text-white sm:text-[11px]"
            >
              {/* Bullet */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-200/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_7px_rgba(252,211,77,0.8)]" />
              </span>

              {/* Notice */}
              <span className="transition-colors duration-200 group-hover:text-amber-200">
                {notice.text}
              </span>

              {/* Arrow */}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 transition-all duration-200 group-hover:border-amber-200/50 group-hover:bg-amber-100/20">
                <ArrowUpRight className="h-3 w-3 text-amber-200 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </span>
            </a>
          ))}

          {/* SECOND LOOP */}
          {notices.map((notice) => (
            <a
              key={`${notice.id}-duplicate`}
              href={notice.link}
              aria-hidden="true"
              tabIndex={-1}
              className="group flex items-center gap-2.5 text-[10px] font-semibold text-amber-50/90 transition-colors hover:text-white sm:text-[11px]"
            >
              {/* Bullet */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
              </span>

              {/* Notice */}
              <span className="transition-colors group-hover:text-amber-200">
                {notice.text}
              </span>

              {/* Arrow */}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 transition-all group-hover:border-amber-200/50 group-hover:bg-amber-100/20">
                <ArrowUpRight className="h-3 w-3 text-amber-200 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}
      <style jsx>{`
        .announcement-marquee {
          animation: announcement-scroll linear infinite;
          will-change: transform;
        }

        .announcement-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes announcement-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
