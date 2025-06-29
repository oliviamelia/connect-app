import {
  IconKey,
  IconLogout,
  IconUser,
  IconPackage,
  IconShoppingCart,
  IconNews,
  IconArticle,
} from "@tabler/icons-react";

export default function AdminLayout({ children }) {
  return (
    <div
      id="container"
      className="flex w-screen h-screen bg-white font-sans text-black"
    >
      <aside className="w-[220px] bg-white border-r border-gray-600 py-4 p-8 gap-6 flex flex-col">
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-2 mt-4">
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded bg-black text-white">
            <IconUser size={20} /> Users
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconKey size={20} /> Hak Akses
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconNews size={20} /> Berita
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconPackage size={20} /> Products
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconShoppingCart size={20} /> Carts
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconArticle size={20} /> post
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
            <IconLogout size={20} /> Logout
          </button>
        </div>
      </aside>

      <section id="content" className="w-[100%] p-5">
        {children}
      </section>
    </div>
  );
}
