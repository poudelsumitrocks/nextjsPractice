async function fetchData() {
    let data=await fetch("https://jsonplaceholder.typicode.com/comments");
    let product=await data.json();
    return product;
}
export default async function page() {
    let products=await fetchData();
    console.log("PRODUCTS :",products);
  return (
    <div className="grid grid-cols-3 gap-4 m-2">
      {products.map((item)=>(
        <div key={item.id} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h1 className="text-sm font-semibold text-gray-500 mb-2">{item.id}</h1>
            <h1 className="text-sm font-semibold text-gray-500 mb-2">{item.name}</h1>
            <h1 className="text-sm font-semibold text-gray-500 mb-2">{item.name}</h1>
            <h1 className="text-sm font-semibold text-gray-500 mb-2">{item.email}</h1>
            <p className="text-sm font-semibold text-gray-500 mb-2">{item.body}</p>


        </div>
        ))}
    </div>
  )
}
