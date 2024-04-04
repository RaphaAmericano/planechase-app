"use client"
import useDice from "@/lib/hooks/useDice"
import Dice from "../Dice"
function DiceContent(){
    const { diceFace, onRolling, rollDice} = useDice()
    return(
        <>
         <div className="flex justify-center p4 mb-2">
            <Dice diceFace={diceFace}/>
        </div>
        <div>
            <button className="btn btn-primary" disabled={onRolling} onClick={rollDice}>Get Started</button>
        </div>
        </>
  )
}

export default DiceContent