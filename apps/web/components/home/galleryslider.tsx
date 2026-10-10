"use client"

import React, { useEffect, useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Landmark,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"

interface Achievement {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Swachh Goshainganj Mission",
    category: "Clean & Green City",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=85&w=1000",
    description:
      "नगर पंचायत गोशाईंगंज द्वारा डोर-टू-डोर कचरा संग्रहण, स्रोत पर पृथक्करण और स्वच्छ शहर अभियान को गति दी जा रही है।",
  },
  {
    id: 2,
    title: "E-Governance Services",
    category: "Digital Governance",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=85&w=1000",
    description:
      "नागरिकों को जन्म/मृत्यु प्रमाण पत्र, गृहकर एवं अन्य नागरिक सेवाएं ऑनलाइन व पारदर्शी माध्यम से उपलब्ध कराई जा रही हैं।",
  },
  {
    id: 3,
    title: "Smart Street Lighting",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=85&w=1000",
    description:
      "गोशाईंगंज के प्रमुख मार्गों व वार्डों में ऊर्जा कुशल LED स्ट्रीट लाइट व्यवस्था एवं आधुनिक बुनियादी ढांचे का विकास।",
  },
  {
    id: 4,
    title: "Clean Water Supply Initiative",
    category: "Civic Utilities",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=85&w=1000",
    description:
      "हर घर तक शुद्ध पेयजल की पहुंच सुनिश्चित करने के लिए जलापूर्ति पाइपलाइन और नई ओवरहेड टंकियों का सुदृढ़ीकरण।",
  },
  {
    id: 5,
    title: "Urban Greenery & Park Development",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=85&w=1000",
    description:
      "सार्वजनिक पार्कों के सौंदर्यीकरण, वृक्षारोपण अभियानों और हरित क्षेत्रों के विस्तार द्वारा पर्यावरण संरक्षण।",
  },
  {
    id: 6,
    title: "Public Grievance Redressal",
    category: "Public Service",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=85&w=1000",
    description:
      "नागरिक समस्याओं, शिकायतों और विकास संबंधी सुझावों का त्वरित समाधान सुनिश्चित करने हेतु समर्पित सहायता केंद्र।",
  },
  {
    id: 7,
    title: "Road & Drainage Network",
    category: "Civic Infrastructure",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=85&w=1000",
    description:
      "नगर क्षेत्र में जलभराव की समस्या से मुक्ति हेतु पक्की नालियों एवं सुदृढ़ सड़कों के निर्माण कार्य का विस्तार।",
  },
]

export default function CertificationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<Achievement | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  // Responsive Items Per Page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, achievementsData.length - itemsPerPage)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  useEffect(() => {
    if (isPaused || selectedImage) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [maxIndex, isPaused, selectedImage])

  return (
    <section
      id="achievements"
      className="
        relative
        overflow-hidden
        bg-linear-to-br
        from-[#FFF5EC]
        via-[#FFFFFF]
        to-[#FFECE0]
        px-4
        py-20
        font-sans
        sm:py-24
        md:px-8
      "
    >
      {/* AMBIENT BACKGROUND (Saffron / Kesariya Glow) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-400/20
          blur-[120px]
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-amber-500/20
          blur-[130px]
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-300/15
          blur-[120px]
        "
      />

      {/* PREMIUM GRID */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(230,81,0,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230,81,0,0.065) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-200
              bg-white/80
              px-4
              py-2
              shadow-[0_8px_30px_rgba(230,81,0,0.08)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-linear-to-br
                from-orange-500
                to-amber-600
                text-white
                shadow-md
              "
            >
              <Award className="h-3.5 w-3.5" />
            </span>
            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.16em]
                text-orange-900
                sm:text-[10px]
              "
            >
              Nagar Panchayat Goshainganj
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="
              mt-5
              font-serif
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-[#3E1A00]
              sm:text-4xl
              md:text-5xl
            "
          >
            उपलब्धियां एवं
            <span
              className="
                ml-2
                bg-linear-to-r
                from-orange-600
                via-amber-600
                to-yellow-600
                bg-clip-text
                text-transparent
              "
            >
              सम्मान
            </span>
            <span
              className="
                mt-1
                block
                text-xl
                font-bold
                text-[#7C4A27]
                sm:text-2xl
              "
            >
              Achievements & Governance Milestones
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#6E5343]
              md:text-base
            "
          >
            नगर पंचायत गोशाईंगंज द्वारा नागरिक सुविधाओं, स्वच्छता प्रबंधन,
            ई-गवर्नेंस एवं सतत शहरी विकास के क्षेत्र में किए जा रहे प्रमुख कार्य।
          </m.p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-linear-to-r from-transparent to-orange-500" />
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="h-[3px] w-14 rounded-full bg-linear-to-l from-transparent to-orange-500" />
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="relative px-1 sm:px-4 md:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            aria-label="Previous achievement"
            className="
              group
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-x-1
              -translate-y-1/2
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-orange-200
              bg-white/95
              text-orange-700
              shadow-[0_10px_30px_rgba(230,81,0,0.12)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:border-orange-500
              hover:bg-orange-600
              hover:text-white
              hover:shadow-[0_15px_35px_rgba(230,81,0,0.25)]
              md:-translate-x-5
            "
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* CARDS VIEWPORT */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-out
              "
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {achievementsData.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="
                    min-w-full
                    shrink-0
                    p-2.5
                    md:min-w-[50%]
                    lg:min-w-[33.333%]
                  "
                >
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(achievement)}
                    className="
                      group
                      relative
                      flex
                      h-full
                      cursor-pointer
                      flex-col
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-orange-100
                      bg-white/90
                      p-4
                      shadow-[0_12px_35px_rgba(230,81,0,0.07)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-orange-300
                      hover:shadow-[0_25px_55px_rgba(230,81,0,0.16)]
                    "
                  >
                    {/* TOP ACCENT (KESARIYA GRADIENT) */}
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-1
                        rounded-t-[26px]
                        bg-linear-to-r
                        from-orange-500
                        via-amber-500
                        to-yellow-500
                        opacity-80
                        transition-all
                        duration-300
                        group-hover:h-1.5
                        group-hover:opacity-100
                      "
                    />

                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        mb-5
                        h-56
                        overflow-hidden
                        rounded-2xl
                        border
                        border-orange-100/60
                        bg-orange-50
                        sm:h-60
                      "
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />
                      <div
                        className="
                          absolute
                          inset-0
                          bg-linear-to-t
                          from-[#3B1700]/70
                          via-transparent
                          to-transparent
                          opacity-60
                        "
                      />

                      <div
                        className=" absolute bottom-3 left-3 flex translate-y-2 items-center gap-1.5  rounded-full border border-white/20 bg-black/40  px-3 py-1.5 text-[9px]  font-bold text-white opacity-0  backdrop-blur-md transition-all duration-300  group-hover:translate-y-0  group-hover:opacity-100"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Details
                      </div>

                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/20
                          bg-white/90
                          text-orange-600
                          shadow-lg
                          backdrop-blur-md
                          transition-transform
                          duration-300
                          group-hover:rotate-6
                          group-hover:scale-110
                        "
                      >
                        <Award className="h-4 w-4" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col">
                      <div
                        className="
                          mb-2
                          inline-flex
                          w-fit
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-orange-200
                          bg-orange-50
                          px-2.5
                          py-1
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.1em]
                          text-orange-800
                        "
                      >
                        <ShieldCheck className="h-3 w-3 text-orange-600" />
                        {achievement.category}
                      </div>

                      <h3
                        className="
                          font-serif
                          text-lg
                          font-black
                          leading-tight
                          text-[#3E1A00]
                          transition-colors
                          duration-300
                          group-hover:text-orange-600
                        "
                      >
                        {achievement.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          font-medium
                          leading-6
                          text-slate-600
                        "
                      >
                        {achievement.description}
                      </p>
                    </div>

                    {/* FOOTER */}
                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-orange-100
                        pt-3
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.1em]
                          text-slate-400
                          transition-colors
                          group-hover:text-orange-600
                        "
                      >
                        Nagar Panchayat Goshainganj
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-orange-50
                          text-orange-600
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:bg-orange-600
                          group-hover:text-white
                        "
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </m.div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            aria-label="Next achievement"
            className="
              group
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-11
              w-11
              translate-x-1
              -translate-y-1/2
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-orange-200
              bg-white/95
              text-orange-700
              shadow-[0_10px_30px_rgba(230,81,0,0.12)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:border-orange-500
              hover:bg-orange-600
              hover:text-white
              hover:shadow-[0_15px_35px_rgba(230,81,0,0.25)]
              md:translate-x-5
            "
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* PAGINATION */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2
                cursor-pointer
                rounded-full
                transition-all
                duration-500
                ${
                  currentIndex === index
                    ? "w-9 bg-linear-to-r from-orange-500 to-amber-600 shadow-md"
                    : "w-2 bg-orange-200 hover:w-4 hover:bg-orange-400"
                }
              `}
            />
          ))}
        </div>

        {/* LOCATION STRIP */}
        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-2xl
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-orange-200/80
            bg-white/70
            px-4
            py-2.5
            shadow-xs
            backdrop-blur-xl
          "
        >
          <Landmark className="h-3.5 w-3.5 text-orange-600" />
          <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#6E5343]">
            Nagar Panchayat Goshainganj • Uttar Pradesh
          </span>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#2A1000]/85
              p-4
              backdrop-blur-md
            "
            onClick={() => setSelectedImage(null)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                w-full
                max-w-4xl
                overflow-hidden
                rounded-[28px]
                border
                border-orange-200
                bg-white
                shadow-[0_35px_100px_rgba(0,0,0,0.35)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-orange-100
                  bg-linear-to-r
                  from-[#FFF5EC]
                  to-white
                  p-4
                  sm:p-5
                "
              >
                <div>
                  <div
                    className=" mb-1 flex items-center gap-1.5  text-[9px] font-black uppercase tracking-[0.12em] text-orange-700"
                  >
                    <Award className="h-3 w-3" />
                    {selectedImage.category}
                  </div>
                  <h3 className="font-serif text-lg font-black text-[#3E1A00] sm:text-xl">
                    {selectedImage.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                  className="
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    text-slate-500
                    shadow-xs
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:border-red-200
                    hover:bg-red-50
                    hover:text-red-500
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* MODAL IMAGE */}
              <div
                className=" flex max-h-[68vh]  items-center  justify-center  bg-[#230C00]  p-4  sm:p-6"
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="
                    max-h-[62vh]
                    w-auto
                    max-w-full
                    rounded-xl
                    object-contain
                    shadow-2xl
                  "
                />
              </div>

              {/* MODAL FOOTER */}
              <div
                className="
                  border-t
                  border-orange-100
                  bg-white
                  p-5
                "
              >
                <div className="mx-auto flex max-w-2xl items-start gap-3">
                  <div className="rounded-lg bg-orange-50 p-2 text-orange-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3E1A00]">
                      विवरण (Description)
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
