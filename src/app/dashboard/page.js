"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="relative h-[80vh] pt-12 pl-24">
      {/* intro and menu */}
      <div className="flex flex-col">
        <h2 className="mx-auto mb-5 text-3xl font-semibold shrink md:mx-0">
          Welcome Back <span className="text-green-500">Casslie</span>,
        </h2>

        <div className="max-w-[600px] h-[550px] pl-[50px]  py-2 text-black text-2xl bg-zinc-300 rounded-lg font-lg mx-auto md:mx-0">
          <ul className="flex flex-col h-full space-y-4 list-none justify-evenly">
            <li>
              <Link href={"/dashboard/cart"} className="hover:text-green-600">
                Cart
              </Link>
            </li>

            <li>
              <Link href={"/dashboard/fav"} className="hover:text-green-600">
                Favourites
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/orderHist"}
                className="hover:text-green-600"
              >
                Order History
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/wallet"} className="hover:text-green-600">
                Wallet
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/friends"}
                className="hover:text-green-600"
              >
                Invite Friends
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/bus"} className="hover:text-green-600">
                Register for a Business Account
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/signOut"}
                className="hover:text-green-600"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* image */}
      <Image
        src="/assets/basket.png"
        alt="hero"
        width={400}
        height={400}
        className="hidden object-contain absolute bottom-0 right-0 -translate-x-[100px] -translate-y-[3px] -z-10 md:block"
      />

      {/* circles */}
      <div className="hidden bg-yellow-200 w-[350px] h-[350px] rounded-full absolute inset-y-40 right-0 -translate-x-[350px] translate-y-[100px] -z-20 lg:block"></div>
      <div className="hidden bg-green-200 w-[200px] h-[200px] rounded-full absolute top-0 right-0 -translate-x-[100px] translate-y-[105px] -z-10 md:block"></div>
    </div>
  )
}
