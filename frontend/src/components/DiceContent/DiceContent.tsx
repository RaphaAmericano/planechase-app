import Dice from "../Dice"
import { RollButton } from "./RollButton"
function DiceContent(){
    
    return(
        <>
            <div className="flex justify-center p4 mb-2">
                <Dice />
            </div>
            <div>
                <RollButton />
            </div>
        </>
  )
}

export default DiceContent