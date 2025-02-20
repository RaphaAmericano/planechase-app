import Dice from "../Dice"
import { RollButton } from "./RollButton"
function DiceContent(){
    
    return(
        <div className="flex flex-col justify-center p4 mb-2">
            <div className="mb-2">
                <Dice />
            </div>
            <div >
                <RollButton />
            </div>
        </div>
  )
}

export default DiceContent