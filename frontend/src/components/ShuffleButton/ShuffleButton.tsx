"use client"
import { usePlaneStore } from "@/lib/store/plane-store"
function ShuffleButton(){
    const { shufflePlanes } = usePlaneStore()
    return <button className="btn btn-primary" disabled={false} onClick={shufflePlanes}>Embaralhar</button>
}
export default ShuffleButton