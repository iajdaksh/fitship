'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  BookOpen,
  ShoppingBag,
  Dumbbell,
  Contact,
} from 'lucide-react'

const navItems = [
  { href: '/', icon: Home },
  { href: '/blog', icon: BookOpen },
  { href: '/store', icon: ShoppingBag },
  { href: '/fitness', icon: Dumbbell },
  { href: '/contact', icon: Contact },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between gap-8 px-8 h-14
        rounded-full bg-white/10 backdrop-blur-xl
        border border-white/20 shadow-lg
      ">
        {navItems.map(({ href, icon: Icon }) => {
          const active = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-center transition-all
                ${active ? 'text-white' : 'text-white/60'}
              `}
            >
              <Icon size={22} />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
