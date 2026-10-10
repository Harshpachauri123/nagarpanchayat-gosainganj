"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  FileSpreadsheet,
  Newspaper,
  Award,
  Layers3,
  ShieldCheck,
  Mail,
  Home,
  Image as ImageIcon,
  Search,
  ExternalLink,
  Landmark,
  FileText,
  Droplets,
  Construction,
  Recycle,
} from "lucide-react"

interface MenuItem {
  name: string
  href: string
  hasDropdown?: boolean
  megaMenuType?: "departments" | "services" | null
  items?: { name: string; href: string }[]
}

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSearch, setMobileSearch] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (pathname === "/") setActiveTab("Home")
    else if (pathname === "/about") setActiveTab("About")
    else if (pathname === "/departments") setActiveTab("Departments")
    else if (pathname === "/services") setActiveTab("Services")
    else if (pathname === "/public-grievance")
      setActiveTab("Public Grievance")
    else if (pathname === "/schemes") setActiveTab("Schemes")
    else if (pathname === "/gallery") setActiveTab("Gallery")
    else if (pathname === "/staff") setActiveTab("Staff")
    else if (pathname === "/contact") setActiveTab("Contact")
    else if (pathname === "/propertytax") setActiveTab("Property Tax")
    else setActiveTab("Home")
  }, [pathname])

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    {
      name: "Departments",
      href: "/departments",
      hasDropdown: true,
      megaMenuType: "departments",
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      megaMenuType: "services",
    },
    {
      name: "Public Grievance",
      href: "/public-grievance",
      hasDropdown: false,
    },
    { name: "Schemes", href: "/schemes", hasDropdown: false },
    { name: "Gallery", href: "/gallery", hasDropdown: false },
    { name: "Staff", href: "/staff", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
    { name: "Property Tax", href: "/propertytax", hasDropdown: false },
  ]

  const departments = [
    {
      name: "Public Works Department",
      desc: "Municipal roads, infrastructure and civil projects.",
      icon: Construction,
      color: "from-orange-600 to-red-600",
    },
    {
      name: "Revenue Department",
      desc: "Taxation, revenue collection and trade licensing.",
      icon: FileSpreadsheet,
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Water Supply Department",
      desc: "Drinking water distribution and connections.",
      icon: Droplets,
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Sanitation Department",
      desc: "Waste management, cleanliness and hygiene.",
      icon: Recycle,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Health Department",
      desc: "Birth, death and community health services.",
      icon: Award,
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Engineering Department",
      desc: "Town planning, construction and engineering.",
      icon: Building2,
      color: "from-orange-700 to-amber-600",
    },
  ]

  const services = [
    {
      name: "Property Tax Payment",
      desc: "View and manage property and house tax dues.",
      icon: FileSpreadsheet,
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Water Connection Request",
      desc: "Apply for a new municipal water connection.",
      icon: Droplets,
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Birth Certificate",
      desc: "Apply and verify municipal birth records.",
      icon: Award,
      color: "from-orange-600 to-red-500",
    },
    {
      name: "Death Registration",
      desc: "Register and verify death records.",
      icon: FileText,
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Trade License",
      desc: "Apply for or renew municipal trade licenses.",
      icon: Landmark,
      color: "from-amber-500 to-orange-700",
    },
    {
      name: "Building Permission",
      desc: "Submit building permission and NOC requests.",
      icon: Building2,
      color: "from-orange-600 to-amber-600",
    },
    {
      name: "RTI Services",
      desc: "Access information under the RTI framework.",
      icon: Newspaper,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Grievance Redressal",
      desc: "Register civic complaints and track resolution.",
      icon: Mail,
      color: "from-red-600 to-orange-600",
    },
  ]

  const handleMenuClick = (name: string, href: string) => {
    setActiveTab(name)
    setIsOpen(false)
    setOpenDropdown(null)

    if (href.includes("#")) {
      const targetId = href.split("#")[1]

      if (!targetId) {
        router.push(href)
        return
      }

      if (pathname === "/") {
        const element = document.getElementById(targetId)

        if (element) {
          const offset = scrolled ? 90 : 140

          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          })
        }
      } else {
        router.push(href)
      }
    } else {
      router.push(href)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null)
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 w-full
          border-b border-orange-200/80
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#FFF8E7]/95 shadow-[0_12px_40px_rgba(191,54,12,0.18)] backdrop-blur-xl"
              : "bg-linear-to-r from-[#FFF3E0] via-[#FFE0B2] to-[#FFF3E0]"
          }
        `}
      >
        {/* TOP DEEP KESARIYA ACCENT */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-[#BF360C] via-[#E65100] to-[#BF360C]" />

        {/* SUBTLE SAFFRON PATTERN */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(191,54,12,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(191,54,12,.7) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* MAIN NAVIGATION */}
        <div
          className={`
            relative mx-auto flex max-w-[1440px]
            items-center gap-5 px-4 md:px-6
            transition-all duration-300
            ${scrolled ? "h-[68px]" : "h-[78px]"}
          `}
        >
          {/* BRAND */}
          <Link
            href="/"
            className={`
              group flex shrink-0 items-center gap-3
              transition-all duration-300
              ${
                scrolled
                  ? "w-auto translate-x-0 opacity-100"
                  : "pointer-events-none w-0 -translate-x-5 overflow-hidden opacity-0"
              }
            `}
            aria-label="Nagar Panchayat Gosainganj, Ayodhya  Home"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-orange-400/30 blur-md transition-all duration-300 group-hover:bg-orange-400/50" />

              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/50 bg-white p-1.5 shadow-lg">
                <img
                  src="/governmentlogo.png"
                  alt="Government Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="hidden xl:block">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#BF360C]">
                Government of Uttar Pradesh
              </p>

              <p className="mt-0.5 text-[12px] font-extrabold uppercase tracking-wide text-[#5D4037]">
                Nagar Panchayat Goshainganj, Ayodhya
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = activeTab === item.name
                const isDropdownOpen = openDropdown === item.name
                const isPropertyTax = item.name === "Property Tax"

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown) setOpenDropdown(item.name)
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) setOpenDropdown(null)
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleMenuClick(item.name, item.href)}
                      aria-expanded={
                        item.hasDropdown ? isDropdownOpen : undefined
                      }
                      className={`
                        group relative flex h-11 cursor-pointer
                        items-center gap-1.5 rounded-xl px-3.5
                        text-[12px] font-bold uppercase
                        tracking-[0.055em]
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-linear-to-r from-[#BF360C] to-[#E65100] text-white shadow-[0_6px_18px_rgba(191,54,12,0.35)]"
                            : isPropertyTax
                              ? "bg-linear-to-r from-[#FFB300] to-[#F57C00] text-[#4E342E] shadow-[0_5px_16px_rgba(245,124,0,0.25)] hover:from-[#FFA000] hover:to-[#E65100] hover:text-white"
                              : "text-[#6D4C41] hover:bg-[#FFE0B2] hover:text-[#BF360C]"
                        }
                      `}
                    >
                      <span>{item.name}</span>

                      {item.hasDropdown && (
                        <ChevronDown
                          className={`
                            h-3.5 w-3.5
                            transition-all duration-300
                            ${
                              isDropdownOpen
                                ? "rotate-180"
                                : "group-hover:translate-y-0.5"
                            }
                          `}
                        />
                      )}

                      {!isActive && !isPropertyTax && (
                        <span
                          className="
                            absolute bottom-1.5 left-3 right-3
                            h-[2px] origin-center scale-x-0
                            rounded-full
                            bg-gradient-to-r
                            from-[#BF360C] to-[#FFB300]
                            opacity-0
                            transition-all duration-300
                            group-hover:scale-x-100
                            group-hover:opacity-100
                          "
                        />
                      )}
                    </button>

                    {/* MEGA MENU */}
                    {item.hasDropdown &&
                      item.megaMenuType &&
                      isDropdownOpen && (
                        <div
                          className="absolute left-1/2 top-full z-[70] w-[860px] -translate-x-1/2 pt-3"
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-[0_30px_90px_rgba(120,53,15,0.25)]">
                            <div className="h-1 bg-linear-to-r from-[#BF360C] via-[#FFB300] to-[#E65100]" />

                            <div className="grid grid-cols-[245px_1fr]">
                              {/* INTRO PANEL */}
                              <div className="relative overflow-hidden bg-linear-to-br from-[#7F1D0C] via-[#BF360C] to-[#E65100] p-7 text-white">
                                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />

                                <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#FFB300]/15 blur-3xl" />

                                <div className="relative flex h-full flex-col justify-between">
                                  <div>
                                    <div
                                      className={`
                                        mb-5 flex h-12 w-12
                                        items-center justify-center
                                        rounded-2xl
                                        bg-linear-to-br
                                        ${
                                          item.megaMenuType === "departments"
                                            ? "from-[#FFB300] to-[#E65100]"
                                            : "from-[#FFCC80] to-[#BF360C]"
                                        }
                                        text-white shadow-lg
                                      `}
                                    >
                                      {item.megaMenuType === "departments" ? (
                                        <Building2 className="h-6 w-6" />
                                      ) : (
                                        <Layers3 className="h-6 w-6" />
                                      )}
                                    </div>

                                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#FFD180]">
                                      Explore Nagar Panchayat Goshainganj
                                    </p>

                                    <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight">
                                      {item.name}
                                    </h3>

                                    <p className="mt-3 text-[11px] leading-6 text-orange-100/80">
                                      {item.megaMenuType === "departments"
                                        ? "Explore municipal departments, responsibilities and administrative functions of Nagar Panchayat, Gosainganj."
                                        : "Access important civic services and digital facilities provided by Nagar Panchayat, Gosainganj."}
                                    </p>
                                  </div>

                                  <div className="border-t border-white/10 pt-4">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#FFD180]/70">
                                      Official Portal
                                    </p>

                                    <p className="mt-1 text-[10px] font-semibold text-white">
                                      Goshainganj, Ayodhya, Uttar Pradesh
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* ITEMS */}
                              <div className="bg-[#FFF8E7] p-5">
                                <div className="grid grid-cols-2 gap-2.5">
                                  {(item.megaMenuType === "departments"
                                    ? departments
                                    : services
                                  ).map((subItem) => {
                                    const Icon = subItem.icon

                                    return (
                                      <button
                                        key={subItem.name}
                                        type="button"
                                        onClick={() =>
                                          handleMenuClick(
                                            item.name,
                                            item.href,
                                          )
                                        }
                                        className="
                                          group flex cursor-pointer
                                          items-start gap-3 rounded-2xl
                                          border border-transparent
                                          bg-white p-3.5
                                          text-left
                                          transition-all duration-300
                                          hover:-translate-y-0.5
                                          hover:border-orange-300
                                          hover:bg-[#FFF3E0]
                                          hover:shadow-md
                                        "
                                      >
                                        <div
                                          className={`
                                            flex h-10 w-10 shrink-0
                                            items-center justify-center
                                            rounded-xl
                                            bg-gradient-to-br
                                            ${subItem.color}
                                            text-white shadow-md
                                            transition-all duration-300
                                            group-hover:scale-110
                                            group-hover:rotate-3
                                          `}
                                        >
                                          <Icon className="h-4 w-4" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                          <p className="text-[11px] font-bold text-[#4E342E] transition-colors group-hover:text-[#BF360C]">
                                            {subItem.name}
                                          </p>

                                          <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-slate-500">
                                            {subItem.desc}
                                          </p>
                                        </div>

                                        <ChevronDown className="mt-1 hidden h-3.5 w-3.5 -rotate-90 shrink-0 text-[#E65100] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
                                      </button>
                                    )
                                  })}
                                </div>

                                {/* FOOTER */}
                                <div className="mt-4 flex items-center justify-between border-t border-orange-100 pt-4">
                                  <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#E65100] shadow-[0_0_8px_rgba(230,81,0,0.7)]" />

                                    <p className="text-[9px] font-semibold text-slate-500">
                                      Government of Uttar Pradesh
                                    </p>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleMenuClick(item.name, item.href)
                                    }
                                    className="
                                      group inline-flex cursor-pointer
                                      items-center gap-1
                                      rounded-lg px-2.5 py-1.5
                                      text-[9px] font-bold uppercase
                                      tracking-wider
                                      text-[#BF360C]
                                      transition-all
                                      hover:bg-[#FFE0B2]
                                      hover:text-[#7F1D0C]
                                    "
                                  >
                                    View all
                                    <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            className="
              ml-auto flex h-11 w-11 shrink-0
              cursor-pointer items-center justify-center
              rounded-xl border border-orange-300
              bg-[#FFE0B2]/80
              text-[#BF360C]
              backdrop-blur-md
              transition-all duration-300
              hover:border-[#E65100]
              hover:bg-[#E65100]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#FFB300]
              lg:hidden
            "
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 top-0 z-[100] lg:hidden">
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close mobile navigation"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-default bg-[#4E342E]/70 backdrop-blur-sm"
          />

          {/* DRAWER */}
          <aside className="absolute right-0 top-0 flex h-full w-[90%] max-w-[410px] flex-col overflow-hidden border-l border-orange-200 bg-[#FFF8E7] shadow-[-25px_0_80px_rgba(120,53,15,0.25)]">
            {/* DRAWER HEADER */}
            <div className="relative overflow-hidden bg-linear-to-br from-[#7F1D0C] via-[#BF360C] to-[#E65100] text-white">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FFB300]/15 blur-2xl" />

              <div className="relative flex items-center justify-between px-5 py-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200/40 bg-white p-1.5 shadow-lg">
                    <img
                      src="/governmentlogo.png"
                      alt="Government Emblem"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#FFD180]">
                      Government of Uttar Pradesh
                    </p>

                    <p className="mt-0.5 text-[13px] font-extrabold text-white">
                      Nagar Panchayat Goshainganj
                    </p>

                    <p className="text-[10px] font-semibold text-[#FFE0B2]">
                      Mathura
                    </p>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="
                    flex h-9 w-9 cursor-pointer
                    items-center justify-center
                    rounded-xl border border-white/15
                    bg-white/10 text-white
                    transition-all
                    hover:bg-[#FFB300]
                    hover:text-[#4E342E]
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="h-1 bg-linear-to-r from-[#FFB300] via-[#FFCC80] to-[#E65100]" />
            </div>

            {/* MOBILE SEARCH */}
            <div className="border-b border-orange-100 bg-white px-5 py-3.5">
              <div className="group flex h-11 w-full items-center gap-2.5 rounded-xl border border-orange-100 bg-[#FFF3E0] px-3 transition-all focus-within:border-[#E65100] focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-400/20">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#BF360C] to-[#E65100] text-white shadow-sm">
                  <Search className="h-3.5 w-3.5" />
                </span>

                <input
                  type="text"
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  placeholder="Search services, pages..."
                  className="w-full bg-transparent text-[12px] font-semibold text-[#4E342E] placeholder-slate-400 outline-none"
                />

                {mobileSearch && (
                  <button
                    type="button"
                    onClick={() => setMobileSearch("")}
                    aria-label="Clear mobile search"
                    className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-orange-100 text-[#BF360C] hover:bg-orange-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.name
                  const hasSub = item.hasDropdown
                  const isDropdownOpen = openDropdown === item.name
                  const isPropertyTax = item.name === "Property Tax"

                  return (
                    <div key={item.name}>
                      <button
                        type="button"
                        onClick={() => {
                          if (hasSub) {
                            setOpenDropdown(
                              isDropdownOpen ? null : item.name,
                            )
                          } else {
                            handleMenuClick(item.name, item.href)
                          }
                        }}
                        className={`
                          group flex w-full cursor-pointer
                          items-center justify-between
                          rounded-xl px-3.5 py-3
                          text-left transition-all duration-200
                          ${
                            isActive
                              ? "bg-linear-to-r from-[#BF360C] to-[#E65100] text-white shadow-lg shadow-orange-700/20"
                              : isPropertyTax
                                ? "bg-linear-to-r from-[#FFB300] to-[#F57C00] text-[#4E342E]"
                                : "text-[#5D4037] hover:bg-white hover:text-[#BF360C] hover:shadow-sm"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          {item.name === "Home" && (
                            <Home className="h-4 w-4" />
                          )}
                          {item.name === "About" && (
                            <ShieldCheck className="h-4 w-4" />
                          )}
                          {item.name === "Departments" && (
                            <Building2 className="h-4 w-4" />
                          )}
                          {item.name === "Services" && (
                            <Layers3 className="h-4 w-4" />
                          )}
                          {item.name === "Public Grievance" && (
                            <Mail className="h-4 w-4" />
                          )}
                          {item.name === "Schemes" && (
                            <Award className="h-4 w-4" />
                          )}
                          {item.name === "Gallery" && (
                            <ImageIcon className="h-4 w-4" />
                          )}
                          {item.name === "Staff" && (
                            <Building2 className="h-4 w-4" />
                          )}
                          {item.name === "Contact" && (
                            <Mail className="h-4 w-4" />
                          )}
                          {item.name === "Property Tax" && (
                            <FileSpreadsheet className="h-4 w-4" />
                          )}

                          <span className="text-[12px] font-bold uppercase tracking-[0.045em]">
                            {item.name}
                          </span>
                        </span>

                        {hasSub && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* MOBILE SUBMENU */}
                      {hasSub && isDropdownOpen && (
                        <div className="ml-4 mt-1.5 space-y-1.5 border-l-2 border-[#FFB300] pl-3">
                          {(item.megaMenuType === "departments"
                            ? departments
                            : services
                          ).map((subItem) => {
                            const Icon = subItem.icon

                            return (
                              <button
                                type="button"
                                key={subItem.name}
                                onClick={() =>
                                  handleMenuClick(item.name, item.href)
                                }
                                className="
                                  group flex w-full cursor-pointer
                                  items-center gap-2.5
                                  rounded-xl
                                  border border-transparent
                                  bg-white
                                  px-3 py-2.5
                                  text-left
                                  transition-all
                                  hover:border-orange-200
                                  hover:bg-[#FFF3E0]
                                  hover:shadow-sm
                                "
                              >
                                <div
                                  className={`
                                    flex h-8 w-8 shrink-0
                                    items-center justify-center
                                    rounded-lg
                                    bg-gradient-to-br
                                    ${subItem.color}
                                    text-white shadow-sm
                                  `}
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                </div>

                                <div className="min-w-0">
                                  <p className="text-[10px] font-bold text-[#4E342E]">
                                    {subItem.name}
                                  </p>

                                  <p className="mt-0.5 line-clamp-1 text-[8px] text-slate-500">
                                    {subItem.desc}
                                  </p>
                                </div>

                                <ChevronDown className="ml-auto h-3 w-3 -rotate-90 text-[#E65100] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* DRAWER FOOTER */}
            <div className="border-t border-orange-100 bg-white p-5">
              <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-linear-to-br from-[#FFF3E0] to-[#FFE0B2] p-4">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-300/25 blur-xl" />

                <div className="relative flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#BF360C] to-[#E65100] text-white shadow-md">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#4E342E]">
                      Official Portal
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">
                      Nagar Panchayat Goshainganj, Ayodhya
                    </p>

                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E65100]" />

                      <span className="text-[8px] font-bold uppercase tracking-wider text-[#BF360C]">
                        Government of Uttar Pradesh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

