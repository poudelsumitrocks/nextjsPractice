// fetch from client compoenent
"use client";
import { useState, useEffect } from "react";
export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let parsed = await data.json();
      console.log("DATA :",parsed);
      setData(parsed);
    };
    fetchData();
  }, []);
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {data.map((item) => (
    <div
      key={item.id}
      className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <section>
        <h1 className="text-sm font-semibold text-gray-500 mb-2">
          ID: {item.id}
        </h1>

        <h2 className="text-lg font-bold text-gray-900 mb-2">
          {item.title}
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          {item.body}
        </p>
      </section>
    </div>
  ))}

</div>

  );
}
