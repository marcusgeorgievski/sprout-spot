"use client"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import "@/styles/dropdown.css"
import { List } from "@phosphor-icons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const DropdownMenuDemo = () => {
  const pathname = usePathname()

  function isActive(href) {
    return pathname === href
    if (pathname.includes(href) && href !== "/") {
      return pathname === "/"
    }
    return pathname.includes(href)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center justify-center p-1 rounded border-slate-400 bg-slate-200/90"
          aria-label="Customise options"
        >
          <List />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item>
            <Link
              className={cn(
                "text-slate-700",
                isActive() ? "text-[#C2272E] font-semibold" : "text-gray-600",
              )}
              href="/"
            >
              Home
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link className="text-slate-700" href="/marketplace">
              Marketplace
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link className="text-slate-700" href="/dashboard">
              Dashboard
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
