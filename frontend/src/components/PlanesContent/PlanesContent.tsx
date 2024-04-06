
// import usePlanechase from "@/lib/hooks/usePlanechase";
import PlanesContainer from "../PlanesContainer";
import { useEffect, useState } from "react";
import { getAllPlanes } from "@/lib/services/scryfall.service";
import { Plane } from "../Plane/Plane.props";

function shuffleArray(arr:any[]){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório entre 0 e i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos nas posições i e j
    }
    return arr;
}

function moveFirstToLast(arr:any[]){
    if(arr.length <= 1) {
        return arr
    }
    const firstEl = arr.shift()
    arr.push(firstEl)
    return arr
}

async function PlanesContent(){
    const planes = await getAllPlanes()
    
    if( planes === undefined ) return <span className="loading loading-spinner loading-lg"></span>

    const gamePlanes = shuffleArray(planes)

    function nextPlane(){
        moveFirstToLast(gamePlanes)
    }

    return (

        <PlanesContainer planes={gamePlanes} />
    )
}

export default PlanesContent