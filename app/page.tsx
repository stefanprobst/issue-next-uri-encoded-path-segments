import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Link href={`/tests/${encodeURIComponent("#äöü")}`}>Go to page "#äöü"</Link>
    </main>
  );
}
