'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import {
  Home,
  BookOpen,
  ShoppingBag,
  Dumbbell,
  Contact,
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav"



 
 

/* ---------------- NAV DATA ---------------- */

const navItems = [
  { href: '/', icon: Home },
  { href: '/blog', icon: BookOpen },
  { href: '/store', icon: ShoppingBag },
  { href: '/about', icon: Dumbbell },
  { href: '/profile', icon: Contact },
]

/* ---------------- LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(2) // Home center
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // scroll → shift active
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 200) setActiveIndex(2)
      else if (y < 700) setActiveIndex(3)
      else if (y < 1200) setActiveIndex(4)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return null

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between border-b border-white/10 bg-black/80 px-10 backdrop-blur">
          <div className="text-lg font-semibold tracking-wide">
            Fitship
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/store" className="hover:text-white transition">Store</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
          </div>
        </nav>

        <div className="pt-16">{children}</div>

        {/* ================= OVERLAY ================= */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}

        {/* ================= INSIGHT CARD ================= */}
        {open && (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-start justify-center pt-[30vh] px-6">
            <div className="pointer-events-auto relative w-full max-w-sm animate-in fade-in slide-in-from-bottom-6">

              <div className="absolute -inset-1 rounded-3xl bg-emerald-400/20 blur-2xl" />

              <div className="relative rounded-3xl border border-white/20 bg-black/70 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                <span className="mb-3 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Fitship Insight
                </span>

                <h3 className="mb-3 text-lg font-semibold">
                  💪 Exercise Science
                </h3>

                <p className="text-sm text-gray-300">
                  Progressive overload is king. If weights aren’t increasing,
                  muscles won’t either.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= MOBILE GLASS NAV ================= */}
        {open && (
          <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:hidden">
            <div className="relative flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

              {/* Floating Active Glass */}
              <motion.div
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${activeIndex * 52}px` }}
              >
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
              </motion.div>

              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = index === activeIndex

                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setActiveIndex(index)}
                    className="relative z-10 h-12 w-12 flex items-center justify-center"
                  >
                    <Icon
                      size={22}
                      className={
                        isActive
                          ? 'text-white scale-110'
                          : 'text-white/50'
                      }
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        <BottomNav />
        <Footer />

      </body>
    </html>
  )
}
