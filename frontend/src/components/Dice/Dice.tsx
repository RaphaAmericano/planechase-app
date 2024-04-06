"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ChaosSide, DiceContainer, DiceElement, DiceFace, DiceFaceContainer, Dot, DotContainer } from "./Dice.style"
import DiceProps from "./Dice.props";
function Dice({ diceFace }: DiceProps){

    return ( <DiceContainer>
              <DiceElement diceFace={diceFace}>
                <DiceFace diceFace={1}>
                  <DotContainer>
                    <i className="ss ss-mb1 ss-6x"></i>
                    {/* <Dot /> */}
                  </DotContainer>
                </DiceFace>
                <DiceFace diceFace={2}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceFace={3}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceFace={4}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceFace={5}>
                  <DotContainer>
                    
                  </DotContainer>
                </DiceFace>
                <DiceFace diceFace={6}>
                  <DotContainer>
                    <ChaosSide />
                    {/* <Image 
                      priority
                      width={32}
                      height={32}
                      src="/svg/chaos_symbol.svg"
                      alt="Chaos Symbol" 
                      /> */}
                  </DotContainer>
                  </DiceFace>
              </DiceElement>
          </DiceContainer>)
}

export default Dice;