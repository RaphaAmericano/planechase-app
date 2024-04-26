// TODO: Reogarnizar isso:
import { create } from "zustand"

type DiceState = {
    faces: number;
    maxRollTimes:number;
    face: number;
    onRolling: boolean;
}

type DiceActions= {
    roll: () => void;
    setDiceFace: (face: number) => void;
    setOnRolling: (on: boolean) => void;
    inverteOnRolling: () => void;
}
type DiceStore = DiceState & DiceActions

export const useDiceStore = create<DiceStore>()((set) => ({
    faces: 6,
    maxRollTimes: 10,
    face: 1,
    onRolling: false,
    roll: () => {},
    setDiceFace: (face: number) => set(() => ({ face })),
    setOnRolling: (on: boolean) => set(() => ({ onRolling: on })),
    inverteOnRolling:() => set(({ onRolling }) => ({ onRolling: !onRolling }))
}))
