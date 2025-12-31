export default async function Page({ params }) {
  const {id} = await params;
  const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await res.json();
  return (
   <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-gray-700 mb-1">Email: {user.email}</p>
      <p className="text-gray-700 mb-1">Phone: {user.phone}</p>
      <p className="text-gray-700 mb-1">
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
}
