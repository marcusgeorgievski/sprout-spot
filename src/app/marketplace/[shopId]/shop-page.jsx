"use client"
import { productsData } from "@/state/data"
import { useUser } from "@/state/state"
import { Heart } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ShopPage({ shop }) {
  const {
    addToFavourites,
    removeFromFavourites,
    addToCart,
    removeFromCart,
    isProductInCart,
    isProductInFavourites,
    isShopInFavourites,
  } = useUser()
  const [favourited, setFavourited] = useState(false)

  useEffect(() => {
    if (isShopInFavourites(shop)) {
      setFavourited(true)
    }
  }, [])

  const handleFavourite = () => {
    if (favourited) {
      removeFromFavourites(shop)
      setFavourited(false)
    } else {
      addToFavourites(shop)
      setFavourited(true)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Image
            src={shop.image}
            width={500}
            height={500}
            alt={shop.name}
            className="object-cover rounded-lg aspect-[16/8] border-slate-100 border/ shadow"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold ">{shop.name}</h2>
            <button className="cursor-pointer" onClick={handleFavourite}>
              <Heart
                color={favourited ? "red" : "black"}
                weight={favourited ? "fill" : "light"}
              />
            </button>
          </div>
          <p className=" text-slate-800">
            {shop.location} &middot; {shop.distance} km
          </p>
          <p className="mb-3 text-sm text-slate-700">{shop.rating}</p>

          <p className=" text-slate-700">{shop.description}</p>
        </div>
      </div>
      <div className="py-8">
        <h3 className="mb-6 text-2xl font-bold">Products</h3>
        <div className="grid grid-cols-2 gap-6 mx-auto w-fit sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <ShopItem key={product.id} shop={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ShopItem({ shop }) {
  const { addToCart, removeFromCart, isProductInCart } = useUser()
  const [inCart, setInCart] = useState(false)

  useEffect(() => {
    if (isProductInCart(shop)) {
      setInCart(true)
    }
  }, [])

  const handleCart = () => {
    if (inCart) {
      removeFromCart(shop)
      setInCart(false)
    } else {
      addToCart(shop)
      setInCart(true)
    }
  }

  return (
    <div className="flex flex-col w-fit">
      <Image
        src={shop.image}
        width={400}
        height={400}
        alt={shop.name}
        className="object-cover rounded-lg aspect-[16/8] border-slate-100 border/ shadow"
      />
      <div>
        <h3 className="text-lg font-bold">{shop.name}</h3>
        <p className="text-slate-700">{shop.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">
            {shop.price}{" "}
            <span className="text-xs font-medium text-slate-600">/ kg</span>
          </p>
          <button
            onClick={handleCart}
            className="px-2 py-1 text-sm border rounded-md cursor-pointer text-slate-800 bg-slate-200 border-slate-400"
          >
            {inCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
