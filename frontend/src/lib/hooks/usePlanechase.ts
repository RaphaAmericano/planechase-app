"use client"
import { useEffect, useState } from "react"
import { getAllPlanes } from "../services/scryfall.service"
import { Plane } from "@/components/Plane/Plane.props"
function usePlanechase(){
    const [ planes, setPlanes ] = useState<Plane[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        getAllPlanes()
            .then((response) => {
                setPlanes(response)
            })
            .catch(console.error)
            .finally(() => {

                setLoading(false)
            })
        return  () => {}
    },[])

    return { planes, loading }
}

export default usePlanechase