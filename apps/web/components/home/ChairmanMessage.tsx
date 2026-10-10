"use client"

import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  MapPin,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const serviceLinks = [
  {
    name: "हमारे बारे में",
    path: "/about",
    icon: Landmark,
    description: "नगर पंचायत गोशांईगंज के बारे में जानें",
  },
  {
    name: "नागरिक सेवाएं",
    path: "/services",
    icon: Building2,
    description: "नगर पंचायत की प्रमुख नागरिक सेवाएं",
  },
  {
    name: "जन शिकायत",
    path: "/public-grievance",
    icon: Megaphone,
    description: "शिकायत दर्ज करें और स्थिति जानें",
  },
  {
    name: "सरकारी योजनाएं",
    path: "/schemes",
    icon: Sparkles,
    description: "नागरिकों के लिए प्रमुख सरकारी योजनाएं",
  },
  {
    name: "संपत्ति कर",
    path: "/propertytax",
    icon: FileText,
    description: "संपत्ति कर से संबंधित सेवाएं",
  },
]

const quickLinks = [
  {
    title: "नागरिक सेवाएं",
    description: "नगर पंचायत द्वारा उपलब्ध प्रमुख नागरिक सेवाएं",
    href: "/services",
    icon: Building2,
  },
  {
    title: "जन शिकायत",
    description: "अपनी समस्या या शिकायत ऑनलाइन दर्ज करें",
    href: "/public-grievance",
    icon: Megaphone,
  },
  {
    title: "सरकारी योजनाएं",
    description: "केंद्र एवं राज्य सरकार की योजनाओं की जानकारी",
    href: "/schemes",
    icon: Sparkles,
  },
  {
    title: "संपर्क कार्यालय",
    description: "नगर पंचायत कार्यालय से संपर्क करें",
    href: "/contact",
    icon: Phone,
  },
]

export default function GosainganjContent() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#FFF8E7] via-[#FFF3D6] to-[#FFE0B2]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-orange-200/70">
        {/* Background decorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-400/20 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-amber-400/25 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#C2410C 1px, transparent 1px), linear-gradient(90deg, #C2410C 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Location badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-orange-800 shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-orange-600" />

              <span>Nagar Panchayat Goshainganj • Ayodhya</span>
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              नगर पंचायत{" "}
              <span className="bg-linear-to-r from-[#C2410C] via-[#E65100] to-[#F59E0B] bg-clip-text text-transparent">
                गोशांईगंज
              </span>
            </h1>

            <p className="mt-3 text-lg font-bold text-[#C2410C] sm:text-xl">
              Goshainganj, Ayodhya, Uttar Pradesh
            </p>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              नगर पंचायत गोशांईगंज, अयोध्या की आधिकारिक डिजिटल पहल में आपका
              स्वागत है। नागरिकों को सरल, पारदर्शी और सुविधाजनक नगर सेवाएं
              उपलब्ध कराने के लिए यह पोर्टल महत्वपूर्ण जानकारी और ऑनलाइन
              सेवाओं तक आसान पहुंच प्रदान करता है।
            </p>

            {/* Divider */}

            <div className="mt-7 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-linear-to-r from-[#C2410C] to-[#E65100]" />

              <span className="h-2 w-2 rounded-full bg-amber-500" />

              <span className="h-1 w-16 rounded-full bg-linear-to-r from-[#F59E0B] to-[#C2410C]" />
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C2410C] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition-all hover:-translate-y-0.5 hover:bg-[#9A3412] hover:shadow-xl"
              >
                नागरिक सेवाएं देखें

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-6 py-3.5 text-sm font-black text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-400 hover:text-[#C2410C]"
              >
                <Phone className="h-4 w-4" />

                संपर्क कार्यालय
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFORMATION
      ====================================================== */}

      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-800">
              <Sparkles className="h-3.5 w-3.5" />
              Citizen Services
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              नागरिकों के लिए महत्वपूर्ण सेवाएं
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              नगर पंचायत गोशांईगंज की विभिन्न सेवाओं और महत्वपूर्ण
              सुविधाओं तक आसानी से पहुंच प्राप्त करें।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
                >
                  <div
                    className={`absolute right-0 top-0 h-20 w-20 rounded-bl-[50px] ${
                      index % 2 === 0
                        ? "bg-orange-50"
                        : "bg-amber-50"
                    }`}
                  />

                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${
                      index % 2 === 0
                        ? "bg-orange-100 text-orange-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-[11px] font-black text-[#C2410C]">
                    अधिक जानकारी

                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT GOSAINGANJ
      ====================================================== */}

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* About */}

            <div className="rounded-3xl border border-orange-100 bg-white/95 p-6 shadow-[0_15px_50px_rgba(194,65,12,0.07)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C2410C] text-white shadow-lg shadow-orange-900/15">
                  <Landmark className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#C2410C]">
                    About Us
                  </p>

                  <h2 className="text-xl font-black text-slate-900">
                    नगर पंचायत गोशांईगंज के बारे में
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                नगर पंचायत गोशांईगंज, जनपद अयोध्या, उत्तर प्रदेश में
                स्थानीय नागरिक प्रशासन और नगर सेवाओं के संचालन के लिए
                कार्यरत है। नगर पंचायत का उद्देश्य नागरिकों को आवश्यक
                मूलभूत सुविधाएं उपलब्ध कराना तथा नगर के स्वच्छ, सुरक्षित
                और व्यवस्थित विकास को बढ़ावा देना है।
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "स्वच्छता एवं स्वास्थ्य सेवाएं",
                  "सड़क एवं प्रकाश व्यवस्था",
                  "जल आपूर्ति एवं जल निकासी",
                  "नागरिक शिकायत निवारण",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-orange-100 bg-[#FFF8E7] p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C2410C]" />

                    <span className="text-xs font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Card */}

            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#7C2D12] via-[#9A3412] to-[#C2410C] p-6 text-white shadow-xl sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-orange-950 shadow-lg shadow-orange-950/30">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.15em] text-orange-200">
                  Official Location
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  नगर पंचायत गोशांईगंज
                </h3>

                <p className="mt-1 text-sm font-semibold text-amber-300">
                  Goshainganj, Ayodhya, Uttar Pradesh
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-orange-200/70">
                        Local Administration
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        Nagar Panchayat, Goshainganj
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-orange-200/70">
                        District
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        Ayodhya, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-black text-[#9A3412] transition-all hover:bg-amber-50"
                >
                  कार्यालय से संपर्क करें

                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE NAVIGATION
      ====================================================== */}

      <section className="border-y border-orange-200/70 bg-[#FFFDF7] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-[#C2410C]">
                Explore Portal
              </p>

              <h2 className="mt-1 text-2xl font-black text-slate-950">
                नगर पंचायत पोर्टल
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#C2410C]" />

              Official Citizen Portal
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="group rounded-2xl border border-orange-100 bg-[#FFF8E7] p-4 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#C2410C] shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>

                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#C2410C]" />
                  </div>

                  <h3 className="mt-3 text-xs font-black text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
