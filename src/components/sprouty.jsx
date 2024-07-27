"use client"
import { cn } from "@/lib/utils"
import { Slackey } from "next/font/google"
const slackey = Slackey({ subsets: ["latin"], weight: "400" })

export default function Sprouty({ className, children }) {
  return <span className={cn(slackey.className, className)}>{children}</span>
}
