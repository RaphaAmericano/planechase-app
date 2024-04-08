"use client"
import { useEffect, useState } from "react"

import { Plane } from "@/components/Plane/Plane.props"
import { useQuery } from "@tanstack/react-query";
import { getAllPlanes } from "@/actions/actions";
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

type UsePlanechaseHookReturnType = {
    error: Error | unknown;
    isLoading: boolean;
    isFetched: boolean; 
    planes:Plane[], 
    activePlane: Plane | null, 
    historyPlanes: Plane[], 
    nextPlane:Function,  
    shufflePlanes:Function
}

function usePlanechase(): UsePlanechaseHookReturnType {
    const { data, error, isLoading, isFetched } = useQuery({
        queryKey: ["planes"],
        queryFn: getAllPlanes
    })
    const [planes, setPlanes] = useState<Plane[]>([])
    const [activePlane, setActivePlane] = useState<Plane | null>(null)
    const [historyPlanes, setHistoryPlanes] = useState<Plane[]>([])

    useEffect(() => {
        if(isFetched && data instanceof Array){
            setPlanes(shuffleArray(data))
            setActivePlane(data[0])
        }
    }, [data, isFetched])

    function nextPlane(){
        setHistoryPlanes((prev) => {
            prev.push(planes[0])
            return prev
        })
        setPlanes(moveFirstToLast)
    }

    function shufflePlanes(){
        setPlanes(shuffleArray)
    }

    return { error, isLoading, isFetched, planes, activePlane, historyPlanes, nextPlane,  shufflePlanes }
}

export default usePlanechase