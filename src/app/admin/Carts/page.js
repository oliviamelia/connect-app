"use client";
import UserCard from "@/components/ui/user-card";
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function CartsPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading,
  } = useSWR("https://dummyjson.com/carts", fetcher);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Gagal mengambil data keranjang</p>
      </div>
    );
  }

  const carts = data?.carts ?? [];

  return (
    <section id="content">
      <input
        type="text"
        placeholder="Cari Keranjang"
        className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
      />
      <div id="list-carts" className="flex flex-col gap-4">
        {carts.map((cart) => (
          <UserCard
            key={cart.id}
            fullname={`Cart ID: ${cart.id}`}
            email={`Total: $${cart.total}`}
            role={`Quantity: ${cart.totalQuantity}`}
            status={`Jumlah Produk: ${cart.products.length}`}
          />
        ))}
      </div>
      <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
        <IconPlus size={20} />
      </button>
    </section>
  );
}
