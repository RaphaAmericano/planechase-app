import { Plane as PlaneProps } from "../Plane/Plane.props"
import Plane from "../Plane"
type Props = {
    planes: PlaneProps[]
}
async function PlanesContainer({ planes }:Props){
    return  <div className="stack  rotate-90">
                {planes.map((plane: PlaneProps) => <Plane key={plane.id} {...plane} />)}
            </div>    
}

export default PlanesContainer