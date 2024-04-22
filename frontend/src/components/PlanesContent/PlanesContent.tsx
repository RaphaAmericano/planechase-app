"use client"
import PlanesContainer from "../PlanesContainer";
import usePlanechase, { usePlanechaseObserver } from "@/lib/hooks/usePlanechase";

function PlanesContent(){
    const { data, error, isLoading, isFetched  } = usePlanechaseObserver()
    if(error) return <h2>Erro</h2>
    if(isLoading) return <span className="loading loading-spinner loading-lg"></span>
    if(isFetched && Array.isArray(data)){ 
        return <PlanesContainer planes={data} />
    }
    return null 
}

export default PlanesContent