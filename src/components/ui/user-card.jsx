export default function UserCard({ fullname,email, role, status }) {
  return (
    <div className="bg-white border rounded p-4 border-r-r border-black flex items-center justify-between">
      <div>
        <h3 className="text-gray-900 font-semibold">
          (fullname)
        </h3>
        <p className="text-gray-900 text-sm">
         (email)
        </p>
        <div className="flex gap-2 mt-3">
          <span className="bg-gray-900 text-white text-xs rounded-xs px-2 py-0.5">
           (role)
          </span>
          <span className="bg-gray-900 text-white text-xs rounded-xs px-2 py-0.5">
            Employee
          </span>
        </div>
      </div>
      <span className="text-gray-900 text-sm font-semibold">(status)</span>
    </div>
  );
}
