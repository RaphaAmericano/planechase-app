"use client"
import { useEffect, useState } from "react"
import { DiceContainer, DiceElement, DiceFace, DiceFaceContainer, Dot, DotContainer } from "./Dice.style"
import DiceProps from "./Dice.props";
function Dice({ diceFace }: DiceProps){

    return ( <DiceContainer>
              <DiceElement diceFace={diceFace}>
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