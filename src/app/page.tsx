import Link from "next/link";
export default function Home() {
  return (
     <main>
      <Link className="underline" href={"/name"}>Go to Name</Link>
     </main>
  );
}
