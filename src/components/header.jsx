"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Cart from "./cart"
import Sprouty from "./sprouty"

export default function Header() {
  return (
    <header className="border-b ">
      <div className="max-w-[1100px] mx-auto h-[58px] px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
          <Sprouty className="text-xl font-bold text-[#C2272E]">
            Sprout Spot
          </Sprouty>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/marketplace">Marketplace</NavItem>
          <NavItem href="/contact">Dashboard</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-300"></div>
          <Cart />
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, children }) {
  const pathname = usePathname()

  function isActive() {
    return pathname === href
    if (pathname.includes(href) && href !== "/") {
      return pathname === "/"
    }
    return pathname.includes(href)
  }

  return (
    <Link
      href={href}
      className={cn(
        "text-sm relative",
        isActive() ? "text-[#C2272E] font-semibold" : "text-gray-600",
      )}
    >
      {children}
      {isActive() && (
        <div className="absolute w-[6px] h-[6px] bg-[#C2272E] rounded-full -translate-x-1/2 translate-y-[12px] top-1/2 left-1/2" />
      )}
    </Link>
  )
}
