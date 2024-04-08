import DiceContent from "@/components/DiceContent";
import PlanesContainer from "@/components/PlanesContainer";
import PlanesContent from "@/components/PlanesContent";
import Image from "next/image";

export default function Home() {

  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bem vindo ao Planechase App </h1>
          <p className="py-6">Divirta-se</p>
        </div>
      </div>
    </main>
  );
}
