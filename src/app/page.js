"use client"
import Sprouty from "@/components/sprouty"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function HomePage() {
  return (
    <div>
      <div className="py-8 mb-[80px]">
        <Hero2 />
      </div>

      <div className="py-20">
        <Mission />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-between con lg:px-32 h-[70vh] ">
        <p className="text-5xl font-semibold md:translate-y-4 text-start">
          Fresh from <br />
          the farm
        </p>

        <Image
          src="/assets/basket.png"
          alt="hero"
          width={400}
          height={400}
          className="mx-auto my-5 md:my-0 w-[60%] md:w-auto"
        />
        <p className="text-5xl font-semibold md:-translate-y-4 text-end">
          Meet you <br /> at the
          <br />
          <Sprouty className="text-4xl font-bold text-[#C2272E] inline">
            Sprout Spot
          </Sprouty>
        </p>
      </div>
      <div className="h-[200px] w-[42%] -z-10 top-[280px] rounded-r-full bg-yellow-200/80 absolute left-0" />
      <div className="h-[200px] w-[42%] -z-10 top-[100px] rounded-l-full bg-yellow-200/80 absolute right-0" />
    </div>
  )
}

function Mission() {
  return (
    <div className="relative">
      <div className="con">
        <h2 className="mb-8 text-4xl font-bold">Our Mission</h2>

        <div className="text-xl font-medium">
          <p className="mb-3">
            At <Sprouty className="text-[#C2272E]">Sprout Spot</Sprouty>
          </p>
          <p className="mb-3">
            We connect local farms to local buyers, fostering a community that
            values ethically produced foods. We are committed to bringing
            transparency to your kitchen, ensuring you know exactly where your
            food comes from and how it&apos;s grown.
          </p>
          <p>
            Join us in discovering and enjoying the freshest, most sustainable
            produce available.
          </p>
        </div>
      </div>
      <div className="w-[200px] h-[200px] bg-green-200 absolute left-0 -translate-x-[60%] rounded-full -bottom-20" />
      <div className="w-[200px] h-[200px] bg-red-300 absolute right-0 translate-x-[60%] rounded-full -top-20" />
    </div>
  )
}

function Hero2() {
  return (
    <div className="relative">
      <div className="h-[70vh] con flex items-center gap-12">
        <div>
          <p className="text-3xl font-semibold ">Fresh from the farm,</p>
          <p className="mb-4 text-3xl font-semibold">
            Meet you at the{" "}
            <Sprouty className="text-3xl font-bold text-[#C2272E] inline">
              Sprout Spot
            </Sprouty>
          </p>

          <p className="mb-16 text-lg text-slate-600">
            Find and shop locally and organically produced foods in your area.
            Find and explore markets you never knew existed!
          </p>

          <Link
            href={"/marektplace"}
            className="inline-block px-6 py-1 text-green-700 bg-green-300 rounded-lg font-lg"
          >
            Explore
          </Link>
        </div>

        <Image
          src="/assets/basket.png"
          alt="hero"
          width={400}
          height={400}
          className="flex-shrink-0 object-contain mx-auto my-5 md:my-0"
        />
      </div>
      <div className="h-[200px] w-[42%] -z-10 top-[60px] rounded-l-full bg-yellow-200/80 absolute right-0" />
      <div className="h-[120px] w-[32%] -z-10 top-[450px] rounded-r-full bg-yellow-200/80 absolute left-0" />
    </div>
  )
}
