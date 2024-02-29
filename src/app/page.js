import Image from "next/image";
import Header from "./components/Header";
import Types from "./components/TypesV";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Types />
    </main>
  );
}
