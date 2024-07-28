import { otherShopsData, shopsData } from "@/state/data"
import Image from "next/image"
import ShopPage from "./shop-page"
import Link from "next/link"

export default function ShopLayout({ children, params: { shopId } }) {
  const shops =
    shopsData.find((store) => store.id == shopId) ||
    otherShopsData.find((store) => store.id == shopId)

  return (
    <div>
      <Link href={"/marketplace"}>
        <button className="flex items-center gap-0 mb-6 text-sm hover:underline underline-offset-1 text-slate-400 ">
          <Image
            src={"/assets/left.svg"}
            width={20}
            height={20}
            alt="caret left"
            className="opacity-60"
          />
          Marketplace
        </button>
      </Link>{" "}
      {children}
      <ShopPage shop={shops} />
    </div>
  )
}
