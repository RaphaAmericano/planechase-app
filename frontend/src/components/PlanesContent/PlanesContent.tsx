"use client"
import PlanesContainer from "../PlanesContainer";
import usePlanechase from "@/lib/hooks/usePlanechase";

function PlanesContent(){
    const { error, isLoading, isFetched, planes } = usePlanechase()
    
    if(error) return <h2>Erro</h2>
    if(isLoading) return <span className="loading loading-spinner loading-lg"></span>

    if(isFetched){ 
        return <PlanesContainer planes={planes} />
    }
}

export default PlanesContent