import { getAllPlanes } from "@/actions/actions";
import DiceContent from "@/components/DiceContent";
import HistoryContainer from "@/components/HistoryContainer";
import PlaneData from "@/components/PlaneData/PlaneData";
import PlanesContent from "@/components/PlanesContent";
import ShuffleButton from "@/components/ShuffleButton";
import { usePlaneStore } from "@/lib/store/plane-store";
import { shuffleArray } from "@/lib/utils/gameFunctions";
import { useEffect } from "react";

export default async function Planechase() {
  const planes = await getAllPlanes()
  if(!Array.isArray(planes)){
    throw new Error("Erro ao carregar o splanos")
  }
  
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <h1 className="text-5xl font-bold">Hora do jogo</h1>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hora do jogo</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Role o dado.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <DiceContent />
            </div>
          
          </div>

          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PlanesContent planes={planes} />
            </div>
          </div>

          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ShuffleButton />
            </div>
          </div>

          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <PlaneData /> */}
            </div>
          </div>

          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <HistoryContainer />
            </div>
          </div>

        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      </div>

    </div>


    </main>
  );
}
