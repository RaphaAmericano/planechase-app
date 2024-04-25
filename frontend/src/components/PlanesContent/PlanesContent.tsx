import { usePlaneStore } from "@/lib/store/plane-store";
import PlanesContainer from "../PlanesContainer";

function PlanesContent(){
    const { planes } = usePlaneStore.getState()

    // if(error) return <h2>Erro</h2>
    // if(isLoading) return <span className="loading loading-spinner loading-lg"></span>
    if(Array.isArray(planes)){ 
        return <PlanesContainer planes={planes} />
    }
    return null 
}

export default PlanesContent