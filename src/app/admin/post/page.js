"use client";
import UserCard from "@/components/ui/user-card"; 
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function PostsPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading,
  } = useSWR("https://dummyjson.com/posts", fetcher);

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
        <p>Gagal mengambil data postingan</p>
      </div>
    );
  }

  const posts = data?.posts ?? [];

  return (
    <section id="content">
      <input
        type="text"
        placeholder="Cari Postingan"
        className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
      />
      <div id="list-posts" className="flex flex-col gap-4">
        {posts.map((post) => (
          <UserCard
            key={post.id}
            fullname={`Post #${post.id}: ${post.title}`}
            email={`User ID: ${post.userId}`}
            role={`Tags: ${post.tags.join(', ')}`}
            status={post.body}
          />
        ))}
      </div>
      <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
        <IconPlus size={20} />
      </button>
    </section>
  );
}
