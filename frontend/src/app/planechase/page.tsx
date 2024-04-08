import { getAllPlanes } from "@/actions/actions";
import DiceContent from "@/components/DiceContent";
import PlaneData from "@/components/PlaneData/PlaneData";
import PlanesContainer from "@/components/PlanesContainer";
import PlanesContent from "@/components/PlanesContent";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Image from "next/image";

export default async function Planechase() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["planes"],
    queryFn: getAllPlanes
  })

  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hora do jogo</h1>
          <p className="py-6">Role o dado</p>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DiceContent />
            <PlanesContent />
            <PlaneData />
          </HydrationBoundary>
        </div>
      </div>
    </main>
  );
}