import Image from "next/image"

export default function ShopPage({ store }) {
  return (
    <di className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <Image
          src={store.image}
          width={500}
          height={500}
          alt={store.name}
          className="object-cover rounded-lg aspect-[16/8] border-slate-100 border/ shadow"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{store.name}</h2>
        <p className=" text-slate-800">
          {store.location} &middot; {store.distance}
        </p>
        <p className="mb-3 text-sm text-slate-700">{store.rating}</p>

        <p className=" text-slate-700">{store.description}</p>
      </div>
    </di>
  )
}
