"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useUser } from "@/state/state"
import StoreCard from "@/components/store-card"
import { ShopItem } from "@/app/marketplace/[shopId]/shop-page"

export default function Fav() {
  const { favourites } = useUser()

  return (
    <div className="py-10 con">
      <Link href={"/dashboard"}>
        <button className="flex items-center gap-0 mb-6 text-sm hover:underline underline-offset-1 text-slate-400 ">
          <Image
            src={"/assets/left.svg"}
            width={20}
            height={20}
            alt="caret left"
            className="opacity-60"
          />
          Dashboard
        </button>
      </Link>

      <h2 className="mb-4 text-2xl font-bold text-black">Favourite Shops</h2>

      <div className="grid grid-cols-2 gap-6 mx-auto w-fit sm:grid-cols-2 lg:grid-cols-3">
        {favourites.map((shop) => (
          <StoreCard key={shop.id} store={shop} />
        ))}
      </div>
    </div>
  )
}
