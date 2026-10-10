"use client"

import Link from "next/link"
import {
  ArrowUp,
  ChevronRight,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"
import React from "react"

const quickLinks = [
  { name: "About Goshainganj", href: "/about" },
  { name: "Council Members", href: "/staff" },
  { name: "Departments", href: "/departments" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
]

const citizenServices = [
  { name: "Property & House Tax", href: "/propertytax" },
  { name: "Water Supply & Bills", href: "/services" },
  { name: "Birth Certificate", href: "/services" },
  { name: "Death Certificate", href: "/services" },
  { name: "Trade / Shop License", href: "/services" },
  { name: "Building Permission / NOC", href: "/services" },
]

const governmentLinks = [
  { name: "Government of Uttar Pradesh", href: "#" },
  { name: "District Ayodhya", href: "#" },
  { name: "Digital India", href: "#" },
  { name: "Swachh Bharat Mission", href: "#" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      id="contact-us"
      className="relative overflow-hidden bg-linear-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] text-[#431407]"
    >
      {/* DEEP SAFFRON TOP ACCENT */}
      <div className="h-1.5 w-full bg-linear-to-r from-amber-600 via-orange-600 to-amber-500" />

      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #c2410c 1px, transparent 1px), linear-gradient(#c2410c 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* AMBIENT SAFFRON GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-amber-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-red-500/15 blur-[130px]" />

      {/* MAIN FOOTER */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.2fr]">
            {/* BRAND SECTION */}
            <div>
              <div className="flex items-start gap-4">
                {/* Government Emblem */}
                <div className="group relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-white p-2.5 shadow-[0_10px_30px_rgba(194,65,12,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_15px_35px_rgba(194,65,12,0.22)]">
                  <div className="absolute -inset-1 -z-10 rounded-2xl bg-linear-to-br from-orange-500/30 to-amber-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src="/governmentlogo.png"
                    alt="Government Emblem of India"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Brand */}
                <div className="pt-1">
                  <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-orange-700">
                    Government of Uttar Pradesh
                  </p>
                  <h2 className="text-lg font-black leading-[1.15] tracking-tight text-[#7c2d12]">
                    NAGAR PANCHAYAT GOSHAINGANJ
                  </h2>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-950/70">
                    Ayodhya, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#7c2d12]/80">
                नगर पंचायत गोसाईं गंज, अयोध्या का आधिकारिक डिजिटल नागरिक पोर्टल।
                नागरिकों को नगर सेवाओं, सार्वजनिक सूचना, ऑनलाइन आवेदन एवं
                आवश्यक नागरिक सुविधाओं तक सरल और पारदर्शी डिजिटल पहुंच प्रदान
                करने के लिए विकसित।
              </p>

              {/* Official Portal Status */}
              <div className="group mt-7 flex max-w-md items-center gap-3 rounded-r-2xl border-l-4 border-orange-600 bg-orange-100/80 px-4 py-3 transition-all duration-300 hover:bg-orange-200/80 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-600 via-amber-600 to-red-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#7c2d12]">
                    Official Municipal Portal
                  </p>
                  <p className="mt-0.5 text-[10px] leading-5 text-[#7c2d12]/75">
                    Nagar Panchayat Goshainganj, Ayodhya द्वारा नागरिक सेवाओं के
                    लिए आधिकारिक डिजिटल प्लेटफॉर्म।
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK NAVIGATION */}
            <div>
              <SectionTitle eyebrow="Explore" title="Quick Navigation" />
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <FooterLink key={link.name} href={link.href} label={link.name} />
                ))}
              </ul>
            </div>

            {/* CITIZEN SERVICES */}
            <div>
              <SectionTitle eyebrow="Digital Services" title="Citizen Services" />
              <ul className="space-y-3">
                {citizenServices.map((link) => (
                  <FooterLink key={link.name} href={link.href} label={link.name} />
                ))}
              </ul>
            </div>

            {/* CONTACT CARD - DEEP SAFFRON THEME */}
            <div>
              <div className="group relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#7c2d12] via-[#9a3412] to-[#6c220a] p-6 text-white shadow-[0_20px_50px_rgba(154,52,18,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(154,52,18,0.45)]">
                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-linear-to-b from-amber-400 via-orange-400 to-yellow-400" />

                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-amber-300/20 transition-transform duration-700 group-hover:scale-125"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-16 h-32 w-32 rounded-full bg-orange-400/20 blur-2xl"
                />

                <div className="relative">
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-amber-300">
                    Connect With Us
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight">
                    Contact Office
                  </h3>
                  <p className="mt-1 text-[10px] text-amber-100/80">
                    Nagar Panchayat Goshainganj, Ayodhya
                  </p>

                  <div className="mt-5 space-y-5">
                    {/* Address */}
                    <ContactItem icon={MapPin} title="Office Address">
                      Nagar Panchayat Goshainganj,
                      <br />
                      District - Ayodhya,
                      <br />
                      Uttar Pradesh, India
                    </ContactItem>

                    {/* Phone */}
                    <ContactItem icon={Phone} title="Phone">
                      <a
                        href="tel:+910000000000"
                        className="transition-colors hover:text-amber-300"
                      >
                        +91 XXXXXXXXXX
                      </a>
                    </ContactItem>

                    {/* Email */}
                    <ContactItem icon={Mail} title="Email">
                      <a
                        href="mailto:official@gosainganj-np.in"
                        className="break-all transition-colors hover:text-amber-300"
                      >
                        official@goshainganj-np.in
                      </a>
                    </ContactItem>

                    {/* Office Hours */}
                    <ContactItem icon={Clock3} title="Office Hours">
                      Monday – Saturday
                      <br />
                      10:00 AM – 5:00 PM
                    </ContactItem>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PREMIUM DIVIDER */}
          <div className="my-12 flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-orange-300 to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 bg-orange-600 shadow-xs" />
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-orange-300 to-transparent" />
          </div>

          {/* GOVERNMENT INITIATIVES */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-700">
                Government Initiatives
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <PartnerBadge>Government of Uttar Pradesh</PartnerBadge>
                <PartnerBadge>District Ayodhya</PartnerBadge>
                <PartnerBadge>Digital India</PartnerBadge>
                <PartnerBadge>Swachh Bharat Mission</PartnerBadge>
              </div>
            </div>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-2.5 text-[11px] font-bold text-[#7c2d12] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 hover:text-white hover:shadow-lg hover:shadow-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT - DEEP SAFFRON FOOTER */}
      <div className="relative overflow-hidden bg-linear-to-r from-[#501c0a] via-[#7c2d12] to-[#451808] text-white">
        {/* Bottom Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold text-amber-100">
                © {new Date().getFullYear()} Nagar Panchayat Goshainganj, Ayodhya. All Rights Reserved.
              </p>
              <p className="mt-2 max-w-2xl text-[10px] leading-5 text-amber-100/60">
                यह वेबसाइट नगर पंचायत गोसाईं गंज, अयोध्या से संबंधित
                आधिकारिक नगर निकाय जानकारी एवं नागरिक सेवाएं उपलब्ध कराने के
                उद्देश्य से संचालित डिजिटल प्लेटफॉर्म है। प्रकाशित जानकारी के
                संबंध में किसी स्पष्टीकरण के लिए संबंधित नगर पंचायत कार्यालय से
                संपर्क करें।
              </p>
            </div>

            {/* Developer */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-medium text-amber-100/50">
              <Heart className="h-3 w-3 fill-rose-400 text-rose-400" aria-hidden="true" />
              <span>Hosted</span>
              <span className="text-amber-100/80">by SDV Edutech Pvt. Ltd.</span>
              <span className="mx-1 text-amber-100/30">•</span>
              <span>Last Updated: September 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* SECTION TITLE */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-orange-700">
        {eyebrow}
      </p>
      <h3 className="text-[15px] font-extrabold tracking-tight text-[#7c2d12]">
        {title}
      </h3>
      <div className="mt-3 flex items-center gap-1">
        <div className="h-[2px] w-8 rounded-full bg-linear-to-r from-orange-600 to-amber-500" />
        <div className="h-[2px] w-2 rounded-full bg-amber-400" />
      </div>
    </div>
  )
}

/* FOOTER LINK */
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#7c2d12]/80 transition-all duration-300 hover:translate-x-1 hover:text-orange-700 focus:outline-none focus-visible:text-orange-700"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-200 bg-white shadow-xs transition-all duration-300 group-hover:border-orange-500 group-hover:bg-linear-to-br group-hover:from-orange-600 group-hover:to-amber-500 group-hover:shadow-md">
          <ChevronRight className="h-3 w-3 text-orange-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
        </span>
        <span className="transition-colors duration-300 group-hover:font-semibold">
          {label}
        </span>
      </Link>
    </li>
  )
}

/* CONTACT ITEM */
function ContactItem({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="group flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] transition-all duration-300 group-hover:border-amber-300/40 group-hover:bg-amber-400/20">
        <Icon className="h-3.5 w-3.5 text-amber-300 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-amber-100/50">
          {title}
        </p>
        <div className="mt-1 text-[11px] leading-5 text-amber-50/90">
          {children}
        </div>
      </div>
    </div>
  )
}

/* PARTNER BADGE */
function PartnerBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-full border border-orange-200 bg-white/80 px-3.5 py-2 text-[10px] font-bold text-[#7c2d12] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-100/80 hover:text-orange-800 hover:shadow-md">
      {children}
    </div>
  )
}
