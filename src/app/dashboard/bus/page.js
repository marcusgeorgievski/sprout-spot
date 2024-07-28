"use client"

import React from "react"
import Link from "next/link"

export default function bus() {
    return (
        <div>
            <Link
                href={"/dashboard"}
                className="inline-block px-6 py-1 text-white bg-black rounded-lg font-lg hover:bg-neutral-700"
            >
                Back to Dashboard
            </Link>

            <h2 className="text-black">
                Make a Business Account
            </h2>
        </div>
    )
}
