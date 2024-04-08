"use client"
import usePlanechase from "@/lib/hooks/usePlanechase";
import { Plane } from "../Plane/Plane.props";

function splitCaosText(text:string){
    const firstString = "Whenever chaos ensues," 
    const [planeEffect, caosEffect] = text.split(firstString)
    return { planeEffect, caosEffect: `${firstString} ${caosEffect}` }
}

function splitPlaneName(text:string){
    return text.split("Plane — ")[1]
}
// TODO: adicionar o icone de caos ao lado do refeito
function PlaneData(){
    const { activePlane } = usePlanechase()
    if(activePlane === null) return 
    const { planeEffect, caosEffect } = splitCaosText(activePlane.oracle_text)
    return <div>
        <h1 className="text-5xl font-bold">{activePlane.name}</h1>
        <h4 className="text-2xl font-bold py-2">{splitPlaneName(activePlane.type_line)}</h4>
        <p className="py-6">{planeEffect}</p>
        <p className="py-6">{caosEffect}</p>
    </div>
}

export default PlaneData