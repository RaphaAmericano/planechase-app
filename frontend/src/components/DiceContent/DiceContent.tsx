import { useDiceStore } from "@/lib/store/dice-store"
import Dice from "../Dice"
import { RollButton } from "./RollButton"
function DiceContent(){
    const { face } = useDiceStore.getState()

    return(
        <>
            <div className="flex justify-center p4 mb-2">
                <Dice diceFace={face}/>
            </div>
            <div>
                <RollButton />
            </div>
        </>
  )
}

export default DiceContent