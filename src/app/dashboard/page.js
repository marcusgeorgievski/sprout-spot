"use client"

import React from "react"
import Image from "next/image"

export default function Dashboard() {
    return (
        <div className="relative h-[80vh] pt-12 pl-24">

            {/* intro and menu */}
            <div className="flex flex-col">
                <h2 className="mb-5 text-3xl font-semibold ">
                    Welcome Back <span className="text-green-500">Casslie</span>,
                </h2>

                <div className="w-[600px] h-[550px] pl-[50px]  py-2 text-black text-xl bg-zinc-300 rounded-lg font-lg">
                    <ul className="list-none space-y-4 flex flex-col justify-evenly h-full">
                        <li>
                            Order History
                        </li>
                        <li>
                            Favourites
                        </li>
                        <li>
                            Wallet
                        </li>
                        <li>
                            Invite Friends
                        </li>
                        <li>
                            Register for a free Business Account
                        </li>
                        <li>
                            Sign Out
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
            className="object-contain absolute bottom-0 right-0 -translate-x-[100px]"
            />

            {/* circles */}
            <div className="bg-yellow-200 w-[350px] h-[350px] rounded-full absolute inset-y-40 right-0 -translate-x-[350px] translate-y-[100px] -z-10"></div>
            <div className="bg-green-200 w-[200px] h-[200px] rounded-full absolute top-0 right-0 -translate-x-[100px] translate-y-[48px]"></div>
        </div>
    )
}
