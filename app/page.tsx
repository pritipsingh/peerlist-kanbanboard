import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import KanbanCard from "./Components/KanbanCard";

export default function Home() {
  return (
    <main className="flex  mx-[4vw] max-w-[100vw] min-h-screen">
    <Sidebar />
      <Hero />
      
    </main>
  );
}
