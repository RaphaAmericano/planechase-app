import { getAllPlanes } from "@/lib/services/scryfall.service"

async function PlanesContainer(){
    const planes = await getAllPlanes()
    
    return <>
        <h2>Planes</h2>
        <ul>
            {planes.map((plane:any) => <div key={plane.id}>{plane.name}</div>)}
        </ul>
    </>
}

export default PlanesContainer