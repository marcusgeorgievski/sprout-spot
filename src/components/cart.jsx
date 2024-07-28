"use client"
import { useUser } from "@/state/state"
import { Basket } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Cart() {
  const { cart } = useUser()

  return (
    <Link href={"/dashboard/cart"} className="relative">
      <div className="absolute flex items-center justify-center w-4 h-4 p-1 text-xs font-medium text-white bg-red-600 rounded-full -right-[13px] -top-[13px]">
        {cart.length}
      </div>
      <Image
        src={"/assets/cart.png"}
        width={20}
        height={20}
        alt="cart"
        className="opacity-60"
      />
    </Link>
  )
}
