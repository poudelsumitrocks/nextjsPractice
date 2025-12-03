// app/users/page.jsx (Server Component)
import UsersList from "../Component/UserLists";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users = await res.json();
  return (
    <UsersList users={users}  />
  );
}
