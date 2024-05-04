"use client"
import { useDiceStore } from "@/lib/store/dice-store"
import { usePlaneStore } from "@/lib/store/plane-store"
import { useToastStore } from "@/lib/store/toast.store"
import { useEffect, useState } from "react"

function RollButton(){
    const { faces, face, onRolling, roll, maxRollTimes, setOnRolling, setDiceFace } = useDiceStore()
    const { nextPlane } = usePlaneStore()
    const { open, close, setMessage } = useToastStore()
    const [intrvl, setIntrvl] = useState<NodeJS.Timeout | undefined>();
    const [rollTimes, setRollTimes] = useState(10);

    useEffect(() => {
        if(rollTimes === 0) {
          clearInterval(intrvl);
          setOnRolling(false);
        }
    },[rollTimes, intrvl, setOnRolling]);

    useEffect(() => {
        if(onRolling === false){
            if(face === 1){
                open()
                setMessage("Você viajou para outro plano")
                nextPlane()
            }
            if(face === 6){
                open()
                setMessage("Caos instaurado")
            }
        }
    },[face, onRolling, nextPlane, open, close, setMessage, intrvl])
    
    function rollDice(){
        setOnRolling(true)
        const time = { counter: Math.floor((Math.random() * maxRollTimes) + 1)}
        clearInterval(intrvl);
        setRollTimes(time.counter)
        const interval = setInterval(()=>{
            setDiceFace(Math.floor(Math.random() * faces) + 1);
            time.counter--;
            setRollTimes(time.counter)    
        }, 200);
        
        setIntrvl(interval);
    }

    return <button className="btn btn-primary" disabled={onRolling} onClick={rollDice}>Roll dice!!!</button>
}
export { RollButton }