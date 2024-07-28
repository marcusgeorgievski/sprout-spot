"use client"
import { ShopItem } from "@/app/marketplace/[shopId]/shop-page"
import { useUser } from "@/state/state"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function CartPage() {
  const { cart, totalCartPrice } = useUser()

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

      <h2 className="mb-4 text-2xl font-bold text-black">Cart</h2>

      {cart.length == 0 ? (
        <p>
          No items yet! Go{" "}
          <Link
            className="font-bold text-blue-600 underline"
            href={"/marketplace"}
          >
            find
          </Link>{" "}
          something
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-6 mx-auto mb-16 w-fit sm:grid-cols-2 lg:grid-cols-3">
            {cart.map((shop) => (
              <ShopItem key={shop.id} shop={shop} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-1 font-semibold text-green-700 bg-green-300 border rounded">
              Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}
