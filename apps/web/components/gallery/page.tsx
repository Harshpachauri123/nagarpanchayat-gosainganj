"use client"

import { Button } from "@workspace/ui/components/button"
import { AnimatePresence, m } from "framer-motion"
import { Sparkles, X, ZoomIn } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface GalleryItem {
  id: number
  category: "Development" | "Cleanliness" | "Events"
  imageUrl: string
}

export default function Gallery() {
  const [filter, setFilter] = useState<
    "All" | "Development" | "Cleanliness" | "Events"
  >("All")
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    // {
    //   id: 1,
    //   category: 'Events',
    //   imageUrl: '/aminagarsarai.jpg',
    // },
    // {
    //   id: 2,
    //   category: 'Cleanliness',
    //   imageUrl: '/dustbinphoto.jpg',
    // },
    // {
    //   id: 3,
    //   category: 'Development',
    //   imageUrl: '/cakecutting.jpg',
    // },
    // {
    //   id: 4,
    //   category: 'Development',
    //   imageUrl: '/giftceremony.jpg',
    // },
    // {
    //   id: 5,
    //   category: 'Cleanliness',
    //   imageUrl: '/inaugration.jpg',
    // },
    // {
    //   id: 6,
    //   category: 'Events',
    //   imageUrl: '/independenceday.jpg',
    // },
    // {
    //   id: 7,
    //   category: 'Development',
    //   imageUrl: '/intercollege.jpg',
    // },
    // {
    //   id: 8,
    //   category: 'Events',
    //   imageUrl: '/krishnagod.jpg',
    // },
    // {
    //   id: 9,
    //   category: 'Cleanliness',
    //   imageUrl: '/officephoto.jpg',
    // },
    // {
    //   id: 10,
    //   category: 'Events',
    //   imageUrl: '/prozeceremony.jpg',
    // },
    // {
    //   id: 11,
    //   category: 'Events',
    //   imageUrl: '/ratyatra.jpg',
    // },
    // {
    //   id: 12,
    //   category: 'Events',
    //   imageUrl: '/ribbioncutting.jpg',
    // },
    // {
    //   id: 13,
    //   category: 'Events',
    //   imageUrl: '/sammanphoto.jpg',
    // },
    // {
    //   id: 14,
    //   category: 'Events',
    //   imageUrl: '/saraswatipuja.jpg',
    // },
    // {
    //   id: 15,
    //   category: 'Events',
    //   imageUrl: '/swachtaphoto.jpg',
    // },
    // {
    //   id: 16,
    //   category: 'Events',
    //   imageUrl: '/temple.jpg',
    // },
    // {
    //   id: 17,
    //   category: 'Events',
    //   imageUrl: '/cappp.jpeg',
    // },
    // {
    //   id: 18,
    //   category: 'Events',
    //   imageUrl: '/copyyy.jpeg',
    // },
    // {
    //   id: 19,
    //   category: 'Events',
    //   imageUrl: '/giftt.jpeg',
    // },
    // {
    //   id: 20,
    //   category: 'Events',
    //   imageUrl: '/kalashhh.jpeg',
    // },
    // {
    //   id: 21,
    //   category: 'Events',
    //   imageUrl: '/ladies.jpeg',
    // },
    // {
    //   id: 22,
    //   category: 'Events',
    //   imageUrl: '/scissors.jpeg',
    // },
    // {
    //   id: 23,
    //   category: 'Cleanliness',
    //   imageUrl: '/soill.jpeg',
    // },
  ]

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter)

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#fff8f0] via-[#ffffff] to-[#fff2e6] px-4 py-16 md:px-8 font-sans">
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Light Saffron / Deep Kesariya Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-orange-300/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-amber-300/25 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        {/* Page Title Header */}
        <div className="space-y-4 text-center">
          <div className="group inline-flex cursor-default items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-[11px] font-black tracking-wider text-orange-800 uppercase shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-orange-300 hover:bg-orange-50">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-amber-600 text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
            </span>
            Nagar Panchayat Goshainganj, Ayodhya Media
          </div>

          <h1 className="font-serif text-3xl font-black tracking-tight text-[#4a1d0d] md:text-5xl">
            Gallery{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Photos
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            Visual highlights of developmental works, sanitation campaigns, cultural events, and official programs in Nagar Panchayat Goshainganj, Ayodhya.
          </p>

          <div className="mx-auto flex items-center justify-center gap-2 pt-2">
            <span className="h-1.5 w-12 rounded-full bg-linear-to-r from-orange-400 to-amber-500" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-200 bg-amber-50">
              <Sparkles className="h-3 w-3 text-orange-500" />
            </span>
            <span className="h-1.5 w-12 rounded-full bg-linear-to-r from-amber-500 to-orange-600" />
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 border-b border-orange-100/80 pb-6">
          {(["All", "Development", "Cleanliness", "Events"] as const).map(
            (cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  filter === cat
                    ? "scale-105 bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                    : "border border-orange-100 bg-white/90 text-slate-700 backdrop-blur-md hover:border-orange-300 hover:bg-orange-50/50 hover:text-orange-800"
                }`}
              >
                {cat === "Cleanliness" ? "Sanitation & Swachhta" : cat}
              </Button>
            )
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActivePhoto(item)}
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-orange-100/80 bg-white shadow-[0_10px_30px_rgba(234,88,12,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)]"
              >
                {/* Photo Frame */}
                <Image
                  src={item.imageUrl}
                  alt="Gallery Image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Zoom Badge Overlay with Saffron Touch */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#2a0e05]/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="scale-75 transform rounded-full bg-white/95 p-3.5 text-slate-900 shadow-xl transition-transform duration-300 group-hover:scale-100">
                    <ZoomIn className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Overlay Viewer */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e0a04]/80 p-4 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-transparent shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Viewport */}
              <Image
                fill
                src={activePhoto.imageUrl}
                alt="Enlarged Gallery Image"
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />

              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 z-10 rounded-full border border-white/30 bg-black/50 p-2.5 text-white transition-all duration-300 hover:bg-orange-500 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </button>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
