import PlanesContainer from "../PlanesContainer";
import { Plane } from "../Plane/Plane.props";

function PlanesContent({ planes }: { planes: Plane[]}){
    return <PlanesContainer planes={planes} />
}
export default PlanesContent