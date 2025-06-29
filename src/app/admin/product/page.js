"use client";
import UserCard from "@/components/ui/user-card";
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function ProductsPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading,
  } = useSWR("https://dummyjson.com/products", fetcher);

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
        <p>Gagal mengambil data produk</p>
      </div>
    );
  }

  const products = data?.products ?? [];

  return (
    <section id="content">
      <input
        type="text"
        placeholder="Cari Produk"
        className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
      />
      <div id="list-products" className="flex flex-col gap-4">
        {products.map((product) => (
          <UserCard
            key={product.id}
            fullname={product.title}
            email={`Brand: ${product.brand}`}
            role={`Category: ${product.category}`}
            status={`Deskripsi: ${product.description}`}
          />
        ))}
      </div>
      <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
        <IconPlus size={20} />
      </button>
    </section>
  );
}
