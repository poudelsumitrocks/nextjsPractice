// import Link from "next/link";
// import Navlink from "next/link";

// export default function Page() {
//   return (
//     <div>
//       <h1>Welcome Home</h1>
//       <Link href="/hello">Go to Hello Page</Link>
//     </div>
//   );
// }

// Home page
// import Link from "next/link";

// export default function Home() {
//   const users = ["123", "456", "abc"];

//   return (
//     <div className="flex flex-col justify-center items-center h-screen gap-4">
//       <h1 className="text-3xl font-bold">User List</h1>
//       {users.map((id) => (
//         <Link
//           key={id}
//           href={`/${id}`}
//           className="h-14 w-40 flex justify-center items-center bg-blue-300 rounded-md"
//         >
//           Go to User {id}
//         </Link>
//       ))}
//     </div>
//   );
// }



// Practice page 
// export const metadata = {
//   title: "Welcome to Poudel Electric House",
//   description: "Explore our latest electronics and products",
// };
// import Link from "next/link";

// export default function Page() {
//   const users = ["sumit-poudel", "ram-kumar", "shyam-thapa"];

//   return (
//     <div className="flex flex-col justify-center items-center h-screen gap-4">
//       <h1 className="text-3xl font-bold">User List</h1>
//       {users.map((user) => (
//         <div key={user}>
//           <Link
//             href={`/product/${user}`}
//             className="h-14 w-40 flex justify-center items-center bg-blue-300 rounded-md"
//           >
//             Name is: {user}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import {useState} from "react";



// Fetch data on client side
export default async function page() {

  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  const data = await res.json();
  console.log(data);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/internships`);
  const data1 = await response.json();
  console.log(data1);

  return (
    <div className="">
      <div className="w-full  flex justify-between">
        <h1 className='text'>User profile </h1>
        <button >Add list</button>
      </div>
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

  {data.map((user) => (
    <div key={user.id} className="flex justify-center">

      <div className="flex flex-col bg-white shadow-md rounded-xl w-64 p-4 items-center border">

        {/* Image Box */}
        <div className="h-28  bg-gray-100 rounded-lg flex justify-center items-center overflow-hidden">
          <img
            src="/person2.png"
            alt="profile"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="mt-3 text-center">
          <h1 className="text-lg font-semibold text-gray-900">
            {user.name}
          </h1>
          <h3 className="text-sm text-gray-600">
            {user.email}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm" onClick={"/form"}>
            Add
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm">
            Delete
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm">
            Update
          </button>
        </div>
      </div>

    </div>
  ))}

</div>

      <div>
        {
          data1.map((internship) => (
            <div key={internship.id} className="flex " >
              <div>
                <h1>Title: {internship.title} </h1>
                <h3> Company: {internship.company} </h3>
                <h3> Location: {internship.location} </h3>
                <h3> Duration: {internship.duration} </h3>
                <h3> Stipend: {internship.stipend} </h3>
                <h3> Description: {internship.description} </h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}



// import Users from "./form/Users/page";
// // import Internships from "../components/Internships";

// export default function Home() {
//   return (
//     <div className="p-6">
//       <Users />
//       {/* <Internships /> */}
//     </div>
//   );
// }
