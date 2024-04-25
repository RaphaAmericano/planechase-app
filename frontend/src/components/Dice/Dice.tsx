"use client"

import { ChaosSide, DiceContainer, DiceElement, DiceFace, DotContainer } from "./Dice.style"
import { useDiceStore } from "@/lib/store/dice-store";
function Dice(){
    const { face } = useDiceStore()
    return ( <DiceContainer>
              <DiceElement diceface={face}>
                <DiceFace diceface={1}>
                  <DotContainer>
                    <i className="ss ss-mb1 ss-6x"></i>
                    {/* <Dot /> */}
                  </DotContainer>
                </DiceFace>
                <DiceFace diceface={2}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceface={3}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceface={4}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceface={5}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceface={6}>
                  <DotContainer>
                    <ChaosSide />
                  </DotContainer>
                  </DiceFace>
              </DiceElement>
          </DiceContainer>)
}

export default Dice;

