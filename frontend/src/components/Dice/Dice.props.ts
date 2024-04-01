import { HTMLProps, ReactNode } from "react";

export default interface DiceProps {}
export interface DiceContainerProps extends HTMLProps<HTMLDivElement>{
    children: ReactNode
}
export interface DiceElementProps extends HTMLProps<HTMLDivElement>{
    children: ReactNode
    diceFace: number
}

export interface DiceFaceContainerProps extends HTMLProps<HTMLDivElement>{
    children: ReactNode
    diceFace: number
}

export interface DiceFaceProps extends HTMLProps<HTMLDivElement>{
    children: ReactNode
    diceFace: number
}

export interface DotContainerProps extends HTMLProps<HTMLDivElement>{
    children: ReactNode
}

export interface DotProps extends HTMLProps<HTMLDivElement>{
    
}