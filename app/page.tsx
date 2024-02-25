import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import KanbanCard from "./Components/KanbanCard";

export default function Home() {
  return (
    <main className="flex  w-[100vw] min-h-screen">
      <div className="lg:mx-[4vw] mx-0">
      <Sidebar />
      <Hero />
      </div>
   
      
    </main>
  );
}
