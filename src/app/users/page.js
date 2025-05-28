import UserCard from "@/components/ui/user-card";
import { IconUser } from "@tabler/icons-react";
import { IconUserCog } from "@tabler/icons-react";
import { IconLogout2 } from "@tabler/icons-react";

export default function User_Page() {
  return (
    <div id="container border-r-r border-black" className="flex h-screen">
      <section
        id="navigation"
        className="border-r-1 border-black bg-white p-4 w-[200px] shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Connect
        </h1>
        <div className="flex flex-col gap-2 mt-8">
          <button className="flex gap-2 items-center bg-gray-900 text-white rounded py-2 px-3">
            <IconUser size={20} /> <span className="font-semibold">User</span>
          </button>
          <button className="flex gap-2 items-center text-gray-900 hover:bg-gray-100 rounded py-2 px-3">
            <IconUserCog size={20} />{" "}
            <span className="font-semibold">Hak Akses</span>
          </button>
          <button className="flex gap-2 items-center text-gray-900 hover:bg-gray-100 rounded py-2 px-3">
            <IconLogout2 size={20} />{" "}
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </section>
      <section id="content" className="flex-1 p-6 bg-gray-50">
        <div className="mb-8 text-gray-300">
          <input
            type="text"
            placeholder="Cari user"
            className="w-full p-2 border rounded border-r-r border-black focus:outline-none focus:text-gray-500 focus:ring focus:ring-gray-100"
          />
        </div>
        <div id="List-users" className="space-y-2">
          {dataUser.map((employee,index => 
          ))}
          
        </div>
        <button className="bg-gray-300 text-gray-700 rounded-sm w-12 h-10 flex items-center justify-center fixed bottom-6 right-6 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200">
          <span className="text-3xl">+</span>
        </button>
      </section>
    </div>
  );
}
