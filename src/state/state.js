import { create } from "zustand"

export const useUser = create((set, get) => ({
  favourites: [],
  cart: [],
  order: [],
  name: "Casslie Wong",
  location: "Waterloo ON",
  email: "casswong@gmail.com",

  addToFavourites: (shop) =>
    set((state) => ({ favourites: [...state.favourites, shop] })),
  removeFromFavourites: (shop) =>
    set((state) => ({
      favourites: state.favourites.filter((s) => s.id !== shop.id),
    })),
  isShopInFavourites: (shop) => get().favourites.some((s) => s.id === shop.id),

  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
  clearCart: () => set({ cart: [] }),

  addToOrder: (product) =>
    set((state) => ({ order: [...state.order, product] })),

  // Cart
  get totalCartItems() {
    return get().cart.reduce((acc, product) => acc + 1, 0)
  },
  get totalCartPrice() {
    return get().cart.reduce((acc, product) => acc + product.price, 0)
  },

  // Order
  get totalOrderPrice() {
    return get().order.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    )
  },

  get totalOrderItems() {
    return get().order.reduce((acc, product) => acc + product.quantity, 0)
  },

  // Favourites
  get totalFavourites() {
    return get().favourites.length
  },

  get isProductInCart() {
    return (product) => get().cart.some((p) => p.id === product.id)
  },

  get isProductInFavourites() {
    return (product) => get().favourites.some((p) => p.id === product.id)
  },

  get isProductInOrder() {
    return (product) => get().order.some((p) => p.id === product.id)
  },
}))
