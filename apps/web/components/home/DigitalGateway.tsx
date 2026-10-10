"use client"

import { m } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Coins,
  Droplet,
  Hammer,
  HardHat,
  Headphones,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react"
import React from "react"

interface DepartmentCard {
  name: string
  nameHi: string
  shortCode: string
  desc: string
  icon: React.ReactNode
  services: string[]
  gradient: string
  iconBg: string
  badge: string
}

/* =========================================================
   NAGAR PANCHAYAT GOSAINGANJ DEPARTMENTS
========================================================= */

const departments: DepartmentCard[] = [
  {
    name: "Public Works Department",
    nameHi: "लोक निर्माण विभाग",
    shortCode: "PWD",
    desc: "नगर की सड़कों, नालियों, सार्वजनिक भवनों, मार्ग प्रकाश व्यवस्था तथा नागरिक आधारभूत संरचना के रखरखाव और विकास का दायित्व।",
    icon: <HardHat className="h-6 w-6" />,
    services: [
      "Road Damage Reporting",
      "Road Cut / Trenching Permission",
      "NOC & Civic Infrastructure",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    iconBg: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Revenue Department",
    nameHi: "राजस्व विभाग",
    shortCode: "REV",
    desc: "संपत्ति कर, स्थानीय कर संग्रह, संपत्ति अभिलेख तथा नगर पंचायत से संबंधित राजस्व सेवाओं का पारदर्शी प्रबंधन।",
    icon: <Coins className="h-6 w-6" />,
    services: [
      "Property Tax Services",
      "Property Mutation",
      "Tax & NOC Services",
    ],
    gradient: "from-amber-500 via-orange-500 to-red-400",
    iconBg: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Water Supply Department",
    nameHi: "जल आपूर्ति विभाग",
    shortCode: "WTR",
    desc: "नागरिकों को स्वच्छ जलापूर्ति, जल कनेक्शन, बिल संबंधी सेवाएं तथा पाइपलाइन रखरखाव जैसी सुविधाएं उपलब्ध कराना।",
    icon: <Droplet className="h-6 w-6" />,
    services: [
      "New Water Connection",
      "Water Bill Services",
      "Water Supply Complaint",
    ],
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    iconBg: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Sanitation Department",
    nameHi: "स्वास्थ्य एवं स्वच्छता विभाग",
    shortCode: "SAN",
    desc: "स्वच्छता, कचरा संग्रहण, ठोस अपशिष्ट प्रबंधन, सार्वजनिक सफाई तथा नगर स्वच्छता अभियान का संचालन।",
    icon: <Trash2 className="h-6 w-6" />,
    services: [
      "Garbage Complaint",
      "Sanitation Request",
      "Community Bin Request",
    ],
    gradient: "from-orange-500 via-red-500 to-amber-400",
    iconBg: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Health Department",
    nameHi: "लोक स्वास्थ्य विभाग",
    shortCode: "HLT",
    desc: "जन्म एवं मृत्यु पंजीकरण, सार्वजनिक स्वास्थ्य सेवाओं तथा नागरिक स्वास्थ्य से संबंधित नगर पंचायत कार्यों का संचालन।",
    icon: <HeartPulse className="h-6 w-6" />,
    services: [
      "Birth Registration",
      "Death Registration",
      "Health & Hygiene Services",
    ],
    gradient: "from-red-500 via-orange-500 to-amber-400",
    iconBg: "bg-red-50 text-red-600",
    badge: "bg-red-50 text-red-700 border-red-200",
  },
  {
    name: "Engineering & Town Planning",
    nameHi: "अभियांत्रिकी एवं नगर नियोजन",
    shortCode: "ENG",
    desc: "भवन अनुमति, निर्माण संबंधी स्वीकृतियां, नगर नियोजन, विकास कार्यों और निर्माण गतिविधियों की निगरानी।",
    icon: <Hammer className="h-6 w-6" />,
    services: [
      "Building Plan Approval",
      "Construction NOC",
      "Town Planning Services",
    ],
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    iconBg: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
]

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DigitalGateway() {
  return (
    <section
      id="digital-gateway"
      className="
        relative isolate overflow-hidden
        bg-gradient-to-br
        from-[#FFF8E7]
        via-[#FFF3D6]
        to-[#FFE0B2]
        px-4 py-20
        font-sans
        sm:py-24
        md:px-8
        lg:py-28
      "
    >
      {/* =====================================================
          PREMIUM SAFFRON BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 -top-40
          h-[480px] w-[480px]
          rounded-full
          bg-orange-400/20
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 bottom-0
          h-[500px] w-[500px]
          rounded-full
          bg-amber-400/25
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[380px] w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-300/10
          blur-[100px]
        "
      />

      {/* =====================================================
          LIGHT ARCHITECTURAL GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.38]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(180, 83, 9, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(180, 83, 9, 0.06) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          SMALL DECORATIVE BLOCKS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-6 top-24
          hidden h-20 w-20
          rounded-2xl
          border border-orange-300/50
          bg-white/30
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-28 right-8
          hidden h-24 w-24
          rounded-2xl
          border border-amber-300/50
          bg-white/30
          lg:block
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">

          <m.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-orange-200
              bg-white/80
              px-4 py-2
              shadow-[0_8px_25px_rgba(194,65,12,0.08)]
              backdrop-blur-md
            "
          >
            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-orange-600
                to-amber-500
                text-white
                shadow-sm
              "
            >
              <Landmark className="h-3 w-3" />
            </span>

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.18em]
                text-orange-800
                sm:text-[10px]
              "
            >
              Nagar Panchayat • Goshainganj, Ayodhya
            </span>
          </m.div>

          <m.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.06,
            }}
            className="
              mt-5
              font-serif
              text-3xl
              font-black
              tracking-[-0.025em]
              text-[#7C2D12]
              sm:text-4xl
              md:text-5xl
            "
          >
            Digital Service Gateway
          </m.h2>

          <m.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="
              mx-auto mt-4
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-slate-600
              md:text-base
            "
          >
            Access essential municipal departments and citizen services through a
            single, secure and convenient digital gateway of Nagar Panchayat Goshainganj,
            Ayodhya.
          </m.p>

          {/* =================================================
              SAFFRON DIVIDER
          ================================================== */}

          <div className="mt-7 flex items-center justify-center gap-2">

            <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-400" />

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            </span>

            <span className="h-[3px] w-4 rounded-full bg-amber-400" />

            <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />

          </div>
        </div>

        {/* ===================================================
            DEPARTMENT GRID
        ==================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {departments.map((dept, index) => (
            <m.article
              key={dept.name}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              className="
                group
                relative
                flex
                min-h-[400px]
                flex-col
                overflow-hidden
                rounded-[26px]
                border
                border-orange-100
                bg-white/90
                shadow-[0_12px_35px_rgba(194,65,12,0.08)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-200
                hover:bg-white
                hover:shadow-[0_25px_60px_rgba(194,65,12,0.16)]
              "
            >

              {/* =================================================
                  COLORFUL TOP LINE
              ================================================== */}

              <div
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  ${dept.gradient}
                `}
              />

              {/* =================================================
                  TOP RIGHT GLOW
              ================================================== */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-gradient-to-br
                  ${dept.gradient}
                  opacity-[0.06]
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:opacity-[0.12]
                `}
              />

              {/* =================================================
                  CARD HEADER
              ================================================== */}

              <div className="relative z-10 p-6 pb-4">

                <div className="flex items-start justify-between gap-4">

                  {/* ICON */}

                  <div className="relative">

                    <div
                      className={`
                        absolute
                        -inset-2
                        rounded-2xl
                        bg-gradient-to-br
                        ${dept.gradient}
                        opacity-0
                        blur-lg
                        transition-all
                        duration-500
                        group-hover:opacity-20
                      `}
                    />

                    <div
                      className={`
                        relative
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border
                        border-white
                        ${dept.iconBg}
                        shadow-[0_8px_20px_rgba(194,65,12,0.08)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:-rotate-3
                      `}
                    >
                      {dept.icon}
                    </div>
                  </div>

                  {/* CODE */}

                  <span
                    className={`
                      rounded-full
                      border
                      px-2.5
                      py-1
                      text-[8px]
                      font-black
                      tracking-[0.15em]
                      ${dept.badge}
                    `}
                  >
                    {dept.shortCode}
                  </span>

                </div>

                {/* TITLE */}

                <div className="mt-5">

                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-orange-700">
                    {dept.nameHi}
                  </span>

                  <h3
                    className="
                      mt-1.5
                      text-[18px]
                      font-black
                      leading-snug
                      tracking-tight
                      text-[#7C2D12]
                      transition-colors
                      duration-300
                      group-hover:text-orange-700
                    "
                  >
                    {dept.name}
                  </h3>

                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-medium
                    leading-5
                    text-slate-600
                  "
                >
                  {dept.desc}
                </p>

              </div>

              {/* =================================================
                  SERVICES
              ================================================== */}

              <div className="mx-6 border-t border-orange-100 pt-4">

                <div className="mb-3 flex items-center justify-between">

                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-slate-500
                    "
                  >
                    Key Services
                  </span>

                  <span className="flex items-center gap-1 text-[8px] font-bold text-orange-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
                    Available
                  </span>

                </div>

                <div className="space-y-2.5">

                  {dept.services.map((service) => (
                    <div
                      key={service}
                      className="
                        group/service
                        flex
                        items-center
                        gap-2.5
                        text-[10px]
                        font-semibold
                        text-slate-600
                      "
                    >

                      <span
                        className="
                          flex h-5 w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-orange-50
                          text-orange-600
                          transition-all
                          duration-300
                          group-hover/service:scale-110
                          group-hover/service:bg-orange-100
                        "
                      >
                        <CheckCircle2 className="h-3 w-3" />
                      </span>

                      <span
                        className="
                          transition-colors
                          duration-300
                          group-hover/service:text-orange-900
                        "
                      >
                        {service}
                      </span>

                    </div>
                  ))}

                </div>
              </div>

              {/* =================================================
                  CARD FOOTER
              ================================================== */}

              <div className="mt-auto px-6 pb-6 pt-6">

                <a
                  href="#citizen-services"
                  className="
                    group/link
                    flex h-11
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-orange-100
                    bg-orange-50/70
                    px-3.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-orange-800
                    transition-all
                    duration-300
                    hover:border-orange-600
                    hover:bg-orange-600
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-orange-700/20
                  "
                >

                  <span>View Department Services</span>

                  <span
                    className="
                      flex h-7 w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                      text-orange-700
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover/link:bg-amber-400
                      group-hover/link:text-orange-950
                    "
                  >
                    <ArrowRight
                      className="
                        h-3.5 w-3.5
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </span>

                </a>

              </div>

              {/* =================================================
                  BOTTOM HOVER GRADIENT
              ================================================== */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-x-8
                  bottom-0
                  h-[2px]
                  origin-center
                  scale-x-0
                  rounded-full
                  bg-gradient-to-r
                  ${dept.gradient}
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                `}
              />

            </m.article>
          ))}

        </div>

        {/* ===================================================
            BOTTOM INFORMATION BAR
        ==================================================== */}

        <m.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-orange-700/30
            bg-gradient-to-r
            from-[#9A3412]
            via-[#C2410C]
            to-[#E65100]
            shadow-[0_18px_45px_rgba(194,65,12,0.22)]
          "
        >

          <div
            className="
              relative
              flex
              flex-col
              gap-4
              overflow-hidden
              px-5
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >

            {/* Decorative glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-44
                w-44
                rounded-full
                bg-amber-300/20
                blur-3xl
              "
            />

            <div className="relative flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md">
                <Headphones className="h-5 w-5 text-amber-300" />
              </div>

              <div>

                <h4 className="text-sm font-extrabold text-white">
                  Need assistance with any civic service?
                </h4>

                <p className="text-xs text-orange-100/90">
                  Our citizen helpline and support team are available to help you navigate through services.
                </p>

              </div>

            </div>

            <div className="relative flex shrink-0 items-center gap-3">

              <a
                href="#grievance"
                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-400
                  px-4
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-orange-950
                  transition-all
                  hover:bg-amber-300
                  hover:shadow-md
                "
              >
                <ShieldCheck className="h-4 w-4" />
                Helpline & Grievance
              </a>

            </div>

          </div>

        </m.div>

      </div>
    </section>
  )
}
