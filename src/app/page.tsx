import Image from "next/image";
import ShortIntro from "./components/ShortIntro/ShortIntro";

export const metadata = {
  title: "Nihal's Portfolio | Home",
  description: "Home page of Nihal's Portfolio",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ShortIntro />
    </main>
  );
}
