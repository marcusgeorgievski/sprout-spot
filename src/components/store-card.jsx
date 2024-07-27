"use client"
import Image from "next/image"
import Link from "next/link"

export default function StoreCard({ store }) {
  return (
    <Link href={`/marketplace/${store.id}`} className="w-fit">
      <Image
        src={store.image}
        width={500}
        height={500}
        alt={store.name}
        className="object-cover rounded-lg aspect-[16/8] border-slate-100 border/ shadow"
      />

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold ">{store.name}</h3>
        <div className="flex items-center justify-center p-1 translate-y-[2px] rounded-full bg-green-400/80">
          <p className="text-xs text-white">{store.rating}</p>
        </div>
      </div>
      <p className="text-sm text-slate-700">
        {store.location} &middot; {store.distance} km
      </p>
    </Link>
  )
}
