"use client"
import { Plane as PlaneProps } from "../Plane/Plane.props"
import Plane from "../Plane"
import { usePlaneStore } from "@/lib/store/plane-store"
type Props = {
    planes: PlaneProps[]
}
function PlanesContainer(){
    const { current } = usePlaneStore()
    const plane = current()
    return  <div className="stack rotate-90">
                {plane && <Plane {...plane} />}
            </div>    
}
export default PlanesContainer