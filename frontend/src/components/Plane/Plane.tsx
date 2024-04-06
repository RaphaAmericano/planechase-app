import Image from "next/image"
import { Plane as PlaneProps} from "./Plane.props"
function Plane(props:PlaneProps){
    const { image_uris } = props;
    const { large} = image_uris
    return <Image src={large} className="rounded" width={100} height={100} alt="foto"/>
}

export default Plane