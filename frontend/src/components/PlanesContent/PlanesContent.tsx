"use client"
import PlanesContainer from "../PlanesContainer";
import { Plane } from "../Plane/Plane.props";
import { usePlaneStore } from "@/lib/store/plane-store";
import { useEffect } from "react";
import { shuffleArray } from "@/lib/utils/gameFunctions";

function PlanesContent({ planes }: { planes: Plane[]}){
    const { setPlanes, setCurrentPlanes } = usePlaneStore()

    useEffect(() => {
        setPlanes(planes)
        setCurrentPlanes(shuffleArray(planes))
    },[setPlanes, setCurrentPlanes, planes])

    return <PlanesContainer />
}
export default PlanesContent