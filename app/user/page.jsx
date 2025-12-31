"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function page() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
    const router = useRouter();
    const goPage=(id)=>{
      router.push(`/user/${id}`)
    }
  if (error) return <div>Failed to load the data </div>;
  if (isLoading) return <div>Loading...</div>;
  return (
   <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Student List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            onClick={() => goPage(user.id)}
            className="cursor-pointer border rounded-lg shadow-lg bg-white p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <h1>{user.id}</h1>
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-700 mb-1">Email: {user.email}</p>
            <p className="text-gray-600 text-sm">
              {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
}
