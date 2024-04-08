"use client"
import useDice from "@/lib/hooks/useDice"
import Dice from "../Dice"
import usePlanechase from "@/lib/hooks/usePlanechase"
import { useEffect, useMemo } from "react"
function DiceContent(){
    const { diceFace, onRolling, rollDice} = useDice()
    const { nextPlane } = usePlanechase()

    function roll(){
        rollDice()
    }

    useEffect(() => {
        console.log(diceFace)
        if(!!onRolling && (diceFace === 1 )){
            nextPlane()
        }
    },[diceFace, onRolling,  nextPlane])

    return(
        <>
         <div className="flex justify-center p4 mb-2">
            <Dice diceFace={diceFace}/>
        </div>
        <div>
            <button className="btn btn-primary" disabled={onRolling} onClick={roll}>Roll dice!!!</button>
        </div>
        </>
  )
}

export default DiceContent