"use client"

import { ChaosSide, PlanewalkerSide, DiceContainer, DiceElement, DiceFace, DotContainer } from "./Dice.style"
import { useDiceStore } from "@/lib/store/dice-store";
function Dice(){
    const { face } = useDiceStore()
    return ( <DiceContainer>
              <DiceElement diceface={face}>
                <DiceFace diceface={1}>
                  <DotContainer>
                    {/* <div style={ {backgroundSize:"cover", height: "100%", width:"100%"  } }>
                      <i className="ss ss-mb1 ss-6x"></i>
                    </div> */}
                    {/* <Dot /> */}
                    < PlanewalkerSide />
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

// display: grid;
//     grid-template-columns: repeat(1,103.68px);
//     grid-template-rows: repeat(1,86.4px);
//     grid-gap: 7.2px 7.2px;