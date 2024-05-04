"use client"
import { usePlaneStore } from "@/lib/store/plane-store"

function HistoryContainer(){
    const { historyPlanes } = usePlaneStore()
    console.log(historyPlanes)
    return <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Histórico</h2>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {historyPlanes.map((plane) => plane.name)}
        </div>
    </div>
}
export default HistoryContainer