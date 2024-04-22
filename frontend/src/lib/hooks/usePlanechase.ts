"use client"

import { Plane } from "@/components/Plane/Plane.props"
import { MutationFunction, QueryCache, QueryObserver, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPlanes } from "@/actions/actions";
import { useEffect, useState } from "react";
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

const key = "planes"

type UsePlanechaseHookReturnType = {
    data: Plane[] | unknown | undefined;
    error: Error | unknown;
    isLoading: boolean;
    isFetched: boolean; 
}

function usePlanechase(): UsePlanechaseHookReturnType {
    const { data, error, isLoading, isFetched } = useQuery({
        queryKey: [key],
        queryFn: getAllPlanes
    })
    return { data, error, isLoading, isFetched }
}

function usePlanechaseObserver(){
    const use_planechase = usePlanechase()

    const queryClient = useQueryClient()

    const [ planes, setPlanes] = useState<Plane[]>(() => {
        const data = queryClient.getQueryData<Plane[]>([key])
        return data ?? []
    })


    useEffect(() => {
        const observer = new QueryObserver<Plane[]>(queryClient, { queryKey: [key] } )
        const unsubscribe = observer.subscribe(result => {
            if(result.data) setPlanes(result.data)
        })
        return () => unsubscribe()
    },[queryClient])


    return { ...use_planechase, data: planes }
}

function useShufflePlanes(){
    const data = useQueryClient()
    function shufflePlanes(){
        data.setQueryData([key], (prev: Plane[] | undefined) => {
            if(prev === undefined) return prev
            return shuffleArray(prev)
        })
    }
    return { shufflePlanes }
}

function useNextPlane(){
    const data = useQueryClient()
    function nextPlane(){
        data.setQueryData([key], (prev: Plane[] | undefined) => {
            if(prev === undefined) return prev
            return moveFirstToLast(prev)
        })
    }
    return { nextPlane }
}


function useGetCurrentPlane(){
    const data = useQueryClient()
    const planes = data.getQueryData<Plane[]>([key])
    if(!planes){
        return null
    }
    return planes[0]
}

export default usePlanechase

export { useGetCurrentPlane, useShufflePlanes, usePlanechaseObserver, useNextPlane }