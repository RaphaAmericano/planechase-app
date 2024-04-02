"use client"
import { useEffect, useState } from "react"
import { DiceContainer, DiceElement, DiceFace, DiceFaceContainer, Dot, DotContainer } from "./Dice.style"
function Dice(){
    const faces = 6;
    const maxRollTimes = 10;
    
    const [intrvl, setIntrvl] = useState();
    const [diceFace, setDiceFace] = useState(1);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [rollTimes, setRollTimes] = useState();
    useEffect(() => {
        if(rollTimes === 0) {
            clearInterval(intrvl);
            setBtnDisabled(false);
        }
    },[]);
    
    // function rollDice() {
    //     setBtnDisabled(true);
    //     clearInterval(intrvl);
    //     let counter = Math.floor((Math.random() * maxRollTimes) + 1);
    //         setRollTimes(counter);
    //     const interval = setInterval(()=>{
    //     setDiceFace(Math.floor(Math.random() * faces) + 1);
    //     counter--;
    //     setRollTimes(counter);
    //     }, 200);
    //     setIntrvl(interval);
    // }
    return ( <DiceContainer>
        <DiceElement diceFace={1}>
          <DiceFace diceFace={1}>
            <DotContainer>
              <Dot />
            </DotContainer>
          </DiceFace>
          <DiceFace diceFace={2}>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
          </DiceFace>
          <DiceFace diceFace={3}>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
          </DiceFace>
          <DiceFace diceFace={4}>
            <DotContainer>
              <Dot />
              <Dot />
            </DotContainer>
          </DiceFace>
          <DiceFace diceFace={5}>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
          </DiceFace>
          <DiceFace diceFace={6}>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
            </DiceFace>
        </DiceElement>
    </DiceContainer>)
}

export default Dice;