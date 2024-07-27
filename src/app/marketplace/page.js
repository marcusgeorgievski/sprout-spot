"use client"

import StoreCard from "@/components/store-card"
import { otherShopsData, shopsData } from "@/state/data"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"

export default function MarketPage() {
  const [shops, setShops] = useState(null)
  const [otherShops, setOtherShops] = useState(null)
  const [search, setSearch] = useState("")

  console.log(shopsData)

  useEffect(() => {
    setShops(shopsData)
    setOtherShops(otherShopsData)
  }, [])

  useEffect(() => {
    if (!search) {
      setShops(shopsData)
      setOtherShops(otherShopsData)
    }

    if (search) {
      const filteredShops = shopsData.filter((shop) => {
        return shop.name.toLowerCase().includes(search.toLowerCase())
      })

      const filteredOtherShops = otherShopsData.filter((shop) => {
        return shop.name.toLowerCase().includes(search.toLowerCase())
      })

      setShops(filteredShops)
      setOtherShops(filteredOtherShops)
    }
  }, [search])

  if (!shops || !otherShops) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* Search bar */}
      <div className="flex items-center gap-2 mb-6">
        <MagnifyingGlass className="w-6 h-6 text-slate-600" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for stores"
          className="w-full max-w-md px-3 py-1 border rounded-lg focus:outline-slate-400 border-slate-300 bg-slate-50"
        />
      </div>

      {/* Near me */}
      <h2 className="mb-5 text-3xl font-semibold">
        Stores near <span className="text-green-500">Waterloo</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 mx-auto w-fit sm:grid-cols-2 lg:grid-cols-3">
        {!shops ? (
          <div>Loading...</div>
        ) : (
          shops.map((store) => {
            return <StoreCard key={store.id} store={store} />
          })
        )}
      </div>

      {/* Farther away */}
      <h2 className="pt-16 mb-5 text-3xl font-semibold">
        Stores farther <span className="text-green-500">from you</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 mx-auto w-fit sm:grid-cols-2 lg:grid-cols-3">
        {!shops ? (
          <div>Loading...</div>
        ) : (
          otherShops.map((store) => {
            return <StoreCard key={store.id} store={store} />
          })
        )}
      </div>
    </div>
  )
}
