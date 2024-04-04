"use client"
import { useState, useEffect } from "react"
function useDice(){
    const faces = 6;
    const maxRollTimes = 10;

    const [intrvl, setIntrvl] = useState<NodeJS.Timeout | undefined>();
    const [diceFace, setDiceFace] = useState(6);
    const [onRolling, setOnRolling] = useState(false);
    const [rollTimes, setRollTimes] = useState(10);
    useEffect(() => {
        if(rollTimes === 0) {
          clearInterval(intrvl);
          setOnRolling(false);
        }
      },[rollTimes, intrvl]);

    function rollDice() {
        setOnRolling(true)
        clearInterval(intrvl);
        let counter = Math.floor((Math.random() * maxRollTimes) + 1)
        setRollTimes(counter)
        const interval = setInterval(()=>{
            setDiceFace(Math.floor(Math.random() * faces) + 1);
            counter--;
            setRollTimes(counter)    
        }, 200);
        
        setIntrvl(interval);
    }
    return { diceFace, onRolling, rollDice }
}

export default useDice