import Image from "next/image";
import ShortIntro from "./components/ShortIntro/ShortIntro";
import Overview from "./components/Overview/Overview";

export const metadata = {
  title: "Nihal's Portfolio | Home",
  description: "Home page of Nihal's Portfolio",
};

export default function Home() {
  return (
    <main className="overscroll-x-none p-10">
      <ShortIntro />
      <Overview />
    </main>
  );
}
