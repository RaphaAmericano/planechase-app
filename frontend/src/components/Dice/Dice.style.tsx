import styled from "styled-components"
import { DiceContainerProps, DiceElementProps, DiceFaceContainerProps, DiceFaceProps, DotContainerProps, DotProps } from "./Dice.props"
// @diceSize: 160px;
// @dotSize: @diceSize*.18;

const diceSize = 160
const dotSize = `${diceSize * .18}`

const DiceContainer = styled.div<DiceContainerProps>`
    height: ${diceSize}px;
    width: ${diceSize}px;
    perspective: 1000px;
`

const DiceElement = styled.div<DiceElementProps>`
    height: ${diceSize}px;
    width: ${diceSize}px;
    transform-style: preserve-3d;
    transition: all 200ms;
    ${({ diceFace }: DiceElementProps ) => {
        switch(diceFace){
            case 6:
                return "transform: rotateX(-180deg);"
            case 5:
                return "transform: rotateY(-90deg);"
            case 4:
                return "transform: rotateX(90deg);"
            case 3:
                return "transform: rotateX(-90deg);"
            case 2:
                return "transform: rotateY(90deg);"
            case 1:
            default:
                return "transform: rotateX(0);"
            };
        }
    }
`


const DiceFace = styled.div<DiceFaceProps>``

const Dot =  styled.div<DotProps>``

const DotContainer = styled.div<DotContainerProps>`
    ${Dot}{
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
    }
    ${Dot}:nth-child(1){
        grid-column: 3 / span 1;
        grid-row: 1 / span 1;
    }
    ${Dot}:nth-child(2){
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
    }
    ${Dot}:nth-child(3){
        grid-column: 1 / span 1;
        grid-row: 3 / span 1;
    }

`
const DiceFaceContainer = styled.div<DiceFaceContainerProps>`
    [class^="face"]{
        position:absolute;
        height: ${diceSize}px;
        width: ${diceSize}px;
        outline: 2px solid #00BBFF;
        outline-offset: -2px;
        background-color: rgba(255,255,255,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ${({ diceFace }) => {
        switch(diceFace){
            case 6:
                return `
                    transform: translateX(0) translateY(0) translateZ(-160/2);
                    ${DotContainer}{
                        ${Dot}:nth-child(1){
                            grid-column: 1 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(2){
                            grid-column: 3 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(3){
                            grid-column: 1 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(4){
                            grid-column: 1 / span 1;
                            grid-row: 2 / span 1;
                        }
                        ${Dot}:nth-child(5){
                            grid-column: 3 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(6){
                            grid-column: 3 / span 1;
                            grid-row: 2 / span 1;
                        }
                    }
            `
            case 5:
                return `
                    transform: translateX(50%) translateY(0%) translateZ(0) rotateY(90deg);
                    ${DotContainer}{
                        ${Dot}:nth-child(1){
                            grid-column: 1 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(2){
                            grid-column: 1 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(5){
                            grid-column: 2 / span 1;
                            grid-row: 2 / span 1;
                        }
                        ${Dot}:nth-child(3){
                            grid-column: 3 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(4){
                            grid-column: 3 / span 1;
                            grid-row: 1 / span 1;
                        }
                    }
            `
            case 4:
                return `
                    transform: translateX(0) translateY(50%) translateZ(0) rotateX(90deg);
                    ${DotContainer}{
                        ${Dot}:nth-child(1){
                            grid-column: 1 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(2){
                            grid-column: 1 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(3){
                            grid-column: 3 / span 1;
                            grid-row: 3 / span 1;
                        }
                        ${Dot}:nth-child(4){
                            grid-column: 3 / span 1;
                            grid-row: 1 / span 1;
                        }
                    }
                `
            case 3:
                return `
                    transform: translateX(0) translateY(-50%) translateZ(0) rotateX(90deg);
                    ${DotContainer}{
                        ${Dot}:nth-child(1){
                            grid-column: 3 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(2){
                            grid-column: 2 / span 1;
                            grid-row: 2 / span 1;
                        }
                        ${Dot}:nth-child(3){
                            grid-column: 1 / span 1;
                            grid-row: 3 / span 1;
                          }
                    }
                `
            case 2:
                return `
                    transform: translateX(-50%) translateY(0%) translateZ(0) rotateY(90deg);
                    ${DotContainer}{
                        ${Dot}:nth-child(1){
                            grid-column: 3 / span 1;
                            grid-row: 1 / span 1;
                        }
                        ${Dot}:nth-child(2){
                            grid-column: 1 / span 1;
                            grid-row: 3 / span 1;
                        }
                    }
                `
            case 1:
            default:
                return `transform: translateX(0) translateY(0) translateZ(160/2);
                    ${DotContainer}{
                        ${Dot}{
                            grid-column: 2 / span 1;
                            grid-row: 2 / span 1;
                        }
                    }
                `            
        }
    }}
`

export { DiceContainer, DiceElement, DiceFaceContainer, DiceFace , Dot, DotContainer } 