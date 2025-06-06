import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";
export default function AdminLayout({ children }) {
  return (
    <div id="container" className="flex w-screen h-screen bg-white font-sans text-black">
      <aside className="w-[220px] bg-white border-r border-grey-600 py-4 p-8 gap-6 flex-col">
        <h1 className="text-3xl font-bold text-center">connect</h1>
        <div className="flex flex-col gap-2 mt-4">
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded bg-black text-white">
            <IconUser size={20} /> Users
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded bg-black">
            <IconKey size={20} /> Hak Akses
          </button>
          <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded bg-black">
            <IconLogout size={20} /> Logout
          </button>
        </div>
      </aside>
      <section id="content" className=" w-[100%]p-5">
        {children}
      </section>
    </div>
  );
}