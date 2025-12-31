"use Client"
import Link from "next/link";
export default function Productpage() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      
      <div className="mt-6">
        <Link href={"/productlist/server"}>
        Server
        </Link>
        <Link
          href="/productlist/client"
          className="px-4 py-2 rounded-lg hover:bg-gray-200 ml-4"
        >
         Client
        </Link>
        <Link
          href="/productlist/action"
          className="px-4 py-2 rounded-lg hover:bg-gray-200 ml-4"
        >
        Server Action
        </Link>
      </div>
     
    </section>
  );
}
