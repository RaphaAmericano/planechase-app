// TODO: Reogarnizar isso:
import { Plane } from "@/components/Plane/Plane.props"
import { create } from "zustand"
import { shuffleArray } from "../utils/gameFunctions";

type PlaneState = {
    planes: Plane[];
}

type PlaneActions = {
    setPlanes: (planes: Plane[]) => void;
    shufflePlanes: () => void;
    add: (plane: Plane) => void;
    current: () => Plane;
}

type PlaneStore = PlaneState & PlaneActions 

export const usePlaneStore = create<PlaneStore>()((set, get) => ({
    planes: [],
    setPlanes: (planes:Plane[]) => set((state) => ({ planes })),
    shufflePlanes: () => set(({ planes }) => ({ planes: shuffleArray(planes)})),
    add: (plane: Plane) => set((state) => ({ planes: [...state.planes, plane]})),
    current: () => get().planes[0]
}))