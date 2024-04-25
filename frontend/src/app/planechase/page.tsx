import { getAllPlanes } from "@/actions/actions";
import DiceContent from "@/components/DiceContent";
import PlaneData from "@/components/PlaneData/PlaneData";
import PlanesContent from "@/components/PlanesContent";
import ShuffleButton from "@/components/ShuffleButton";

export default async function Planechase() {
  const loadPlanes = await getAllPlanes()
  console.log(loadPlanes)
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hora do jogo</h1>
          <p className="py-6">Role o dado</p>
            <DiceContent />
            {loadPlanes ? (
              <>
                <ShuffleButton />
                <PlanesContent />
                <PlaneData />
              </>
            ) : (<div>Erro</div>)}
        </div>
      </div>
    </main>
  );
}
