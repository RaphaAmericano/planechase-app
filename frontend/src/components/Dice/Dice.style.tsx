import styled from "styled-components"
import { DiceContainerProps, DiceElementProps, DiceFaceContainerProps, DiceFaceProps, DotContainerProps, DotProps } from "./Dice.props"
import chaosSymbolSvg from "./../../../public/svg/chaos_symbol.svg"
const diceSize = 160 
const dotSize = Math.round(((diceSize * .18) + Number.EPSILON) * 100 ) / 100

const DiceContainer = styled.div<DiceContainerProps>`
    height: ${diceSize}px;
    width: ${diceSize}px;
    perspective: 1000px;
`
const DotContainer = styled.div<DotContainerProps>`
    display:grid;
    // grid-template-columns: repeat(3, ${dotSize}px);
    // grid-template-rows: repeat(3, ${dotSize}px);
    // grid-gap: ${dotSize / 4}px ${dotSize / 4}px;
    grid-template-columns: repeat(1, ${dotSize * 3.6 }px);
    grid-template-rows: repeat(1, ${dotSize * 3 }px);
    grid-gap: ${dotSize / 4}px ${dotSize / 4}px;
`

const Dot = styled.div<DotProps>`
    background-color: black;
    border-radius: 50%;
`

const DiceFace = styled.div<DiceFaceProps>`
    position:absolute;
    height: ${diceSize}px;
    width: ${diceSize}px;
    outline: 2px solid #00BBFF;
    outline-offset: -2px;
    background-color: rgba(255,255,255,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ diceFace }: DiceElementProps ) => {
        switch(diceFace){
            case 6:
                return`
                    transform: translateX(0) translateY(0) translateZ(-${diceSize}/2);
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
                return `
                    transform: translateX(0) translateY(0) translateZ(${diceSize}/2);
                    ${DotContainer}{
                        // ${Dot}{
                        //     grid-column: 2 / span 1;
                        //     grid-row: 2 / span 1;
                        // }
                        ${Dot}{
                            grid-column: 2 / span 1;
                            grid-row: 2 / span 1;
                        }
                    }
                `
            };
        }
    }
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
const ChaosSide = styled.div<DotProps>`
    background-image: url('${chaosSymbolSvg.src}');
    background-size: cover;
    height: 100%;
    width: 100%;
`

export { DiceContainer, DiceElement, DiceFaceContainer, DiceFace , Dot, DotContainer, ChaosSide } 