"use client"
import { getAllPlanes } from "@/actions/actions";
import DiceContent from "@/components/DiceContent";
import PlaneData from "@/components/PlaneData/PlaneData";
import PlanesContent from "@/components/PlanesContent";
import ShuffleButton from "@/components/ShuffleButton";
import { usePlaneStore } from "@/lib/store/plane-store";
import { shuffleArray } from "@/lib/utils/gameFunctions";
import { useEffect } from "react";

export default function Planechase() {
  const { currentPlanes, setPlanes, setCurrentPlanes } = usePlaneStore()

  useEffect( () => {
    (async () => {
      try {
        const response = await getAllPlanes()
        if(Array.isArray(response)){
          setPlanes((response))
          setCurrentPlanes(shuffleArray(response))
        }
      } catch (error) {
        throw error
      }
    })()
  },[setPlanes, setCurrentPlanes])
  
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center w-full">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Hora do jogo</h1>
          <p className="py-6">Role o dado</p>
            <DiceContent />
            <PlanesContent planes={currentPlanes} />
            <ShuffleButton />
            {/* <PlaneData />| */}
        </div>
      </div>
    </main>
  );
}
