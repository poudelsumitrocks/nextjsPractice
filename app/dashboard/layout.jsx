import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar */}
      <aside className="col-span-2 bg-gray-100 p-6 flex flex-col">
      

        <nav className="mt-4 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="font-bold text-gray-700 hover:text-blue-600 transition"
          >
            Office
          </Link>
          <Link
            href="/dashboard/Users"
            className="text-gray-700 hover:text-white transition hover:bg-black/20 text-center rounded-full"
          >
            Users
          </Link>

          <Link
            href="/dashboard/internship"
            className="text-gray-700 hover:text-white transition hover:bg-black/20 text-center rounded-full "
          >
            Internships
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="col-span-10 p-2 bg-white rounded-l-2xl rounded-ee-xl shadow-2xl z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold m-4">Manage Products</h1>

          <div className="h-10 w-10 rounded-full mr-8">
            <img
              src="/women.png"
              alt="profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* <hr className="mb-2 w-full" />

        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-72 px-4 ml-8 rounded-full border border-gray-300"
          />
        </div> */}
        <div className="m-2">{children}</div>
      </main>
    </div>
  );
}
