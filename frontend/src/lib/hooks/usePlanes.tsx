"use client"
import { useEffect, useState } from "react"
import { getAllPlanes } from "../services/scryfall.service"

function usePlanes(){

    const [planes, setPlanes] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        (async function() {
            try {
                setLoading(true)
                const response = await getAllPlanes()
                console.log(response)
                // setPlanes(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        })
    },[])

    return { planes, loading }
}

export default usePlanes