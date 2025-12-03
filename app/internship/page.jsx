

import InternshipsList from "../Component/InternshipsList";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/internships`);
  const internships = await res.json();
  return <InternshipsList internships={internships} />;
}
