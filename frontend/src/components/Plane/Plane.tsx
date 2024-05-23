import Image from "next/image"
import { Plane as PlaneProps} from "./Plane.props"
function Plane(props:PlaneProps){
    const { name, image_uris } = props;
    const { large } = image_uris
    return <Image src={large} className="rounded h-64 w-94 lg:h-full " width={663} height={948} alt={`${name} Plane Card Image`}/>
}

export default Plane