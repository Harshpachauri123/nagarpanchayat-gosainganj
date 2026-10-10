"use client"

import { m } from "framer-motion"
import {
  ExternalLink,
  Globe2,
  ShieldCheck,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react"
import React from "react"

interface GovernmentPortal {
  imgUrl: string
  siteUrl: string
  title: string
  tagline: string
  cardBorder: string
  badgeBg: string
  btnBg: string
  btnText: string
}

export default function GovernmentPortalsSection() {
  const governmentPortals: GovernmentPortal[] = [
    {
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.cmWC0sWBy4tCsvptDLv6mwHaE8?r=0&pid=Api&h=220&P=0",
      siteUrl: "https://gem.gov.in/",
      title: "GeM Portal",
      tagline: "Government e-Marketplace",
      cardBorder: "border-amber-300 hover:border-amber-500",
      badgeBg: "bg-amber-500 text-white",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-white",
      btnText: "text-amber-600",
    },
    {
      imgUrl: "https://d16kg6xo62zbe.cloudfront.net/site-picture/463x256/e/etender.up.nic.in.png",
      siteUrl: "https://etender.up.nic.in/nicgep/app",
      title: "eTender UP",
      tagline: "Uttar Pradesh e-Procurement",
      cardBorder: "border-sky-300 hover:border-sky-500",
      badgeBg: "bg-sky-400 text-white",
      btnBg: "bg-sky-500 hover:bg-sky-600 text-white",
      btnText: "text-sky-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053014.png",
      siteUrl: "https://data.gov.in/",
      title: "Data.gov.in",
      tagline: "Open Government Data",
      cardBorder: "border-amber-300 hover:border-amber-500",
      badgeBg: "bg-amber-500 text-white",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-white",
      btnText: "text-amber-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053094.png",
      siteUrl: "https://www.incredibleindia.org/",
      title: "Incredible India",
      tagline: "Ministry of Tourism",
      cardBorder: "border-rose-300 hover:border-rose-500",
      badgeBg: "bg-rose-600 text-white",
      btnBg: "bg-rose-600 hover:bg-rose-700 text-white",
      btnText: "text-rose-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053017.png",
      siteUrl: "https://www.mygov.in/",
      title: "MyGov",
      tagline: "Citizen Engagement Platform",
      cardBorder: "border-amber-300 hover:border-amber-500",
      badgeBg: "bg-amber-500 text-white",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-white",
      btnText: "text-amber-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053039.png",
      siteUrl: "https://pmnrf.gov.in/",
      title: "PMNRF",
      tagline: "Prime Minister's National Relief Fund",
      cardBorder: "border-emerald-300 hover:border-emerald-500",
      badgeBg: "bg-emerald-600 text-white",
      btnBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      btnText: "text-emerald-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017110781.png",
      siteUrl: "https://www.pmindia.gov.in/",
      title: "PM India",
      tagline: "Prime Minister's Office",
      cardBorder: "border-blue-300 hover:border-blue-500",
      badgeBg: "bg-blue-600 text-white",
      btnBg: "bg-blue-600 hover:bg-blue-700 text-white",
      btnText: "text-blue-600",
    },
    {
      imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png",
      siteUrl: "https://www.india.gov.in/",
      title: "National Portal of India",
      tagline: "Gateway to Government Services",
      cardBorder: "border-purple-300 hover:border-purple-500",
      badgeBg: "bg-purple-600 text-white",
      btnBg: "bg-purple-600 hover:bg-purple-700 text-white",
      btnText: "text-purple-600",
    },
  ]

  return (
    <section
      id="government-portals"
      className="
        relative
        overflow-hidden
        bg-amber-50/40
        px-4
        py-16
        font-sans
        md:px-8
      "
    >
      {/* Background Subtle Gradient & Decoration */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-amber-100/50 via-amber-50/20 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-600 fill-amber-600" />
            <span>Digital Government Network</span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-extrabold text-slate-800 sm:text-4xl md:text-5xl"
          >
            Important Government Portals
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base font-semibold leading-relaxed text-slate-700 sm:text-lg"
          >
            नगर पंचायत गोशांईगंज के नागरिकों के लिए <br className="hidden sm:inline" />
            केंद्र एवं उत्तर प्रदेश सरकार के महत्वपूर्ण आधिकारिक डिजिटल पोर्टलों तक सीधी पहुंच।
          </m.p>

          {/* Accent Line */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-12 rounded-full bg-amber-500" />
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            <span className="h-1 w-12 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {governmentPortals.map((portal, index) => (
            <m.a
              key={portal.title}
              href={portal.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border-2
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${portal.cardBorder}
              `}
            >
              <div>
                {/* Badge & External Link Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      px-2.5
                      py-0.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      shadow-xs
                      ${portal.badgeBg}
                    `}
                  >
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>

                  <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-700" />
                </div>

                {/* Logo Area */}
                <div className="my-3 flex h-24 w-full items-center justify-center rounded-xl bg-slate-50/50 p-2">
                  <img
                    src={portal.imgUrl}
                    alt={portal.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Text Info */}
                <div className="mt-2">
                  <h3 className="text-base font-bold text-slate-800">
                    {portal.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {portal.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Access Button Row */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${portal.btnText}`}>
                  <Globe2 className="h-3.5 w-3.5" />
                  Access Portal
                </span>

                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-transform group-hover:translate-x-0.5 ${portal.btnBg}`}>
                  →
                </span>
              </div>
            </m.a>
          ))}
        </div>

        {/* Bottom Bar Info */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-200/80 bg-white/80 p-3.5 px-6 shadow-xs backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Nagar Panchayat Goshainganj
              </h4>
              <p className="text-xs font-medium text-slate-500">
                Ayodhya, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Official Government Links</span>
          </div>
        </m.div>

      </div>
    </section>
  )
}
