// TODO: Reogarnizar isso:
import { Plane } from "@/components/Plane/Plane.props"
import { create } from "zustand"
import { shuffleArray, moveFirstToLast } from "../utils/gameFunctions";

type PlaneState = {
    planes: Plane[];
    currentPlanes: Plane[];
    historyPlanes: Plane[];
}

type PlaneActions = {
    setPlanes: (planes: Plane[]) => void;
    setCurrentPlanes: (planes: Plane[]) => void;
    shufflePlanes: () => void;
    nextPlane: () => void;
    add: (plane: Plane) => void;
    current: () => Plane;
    addHistoryPlane: (plane: Plane) => void;
    resetHistoryPlane: () => void;
}

type PlaneStore = PlaneState & PlaneActions 

export const usePlaneStore = create<PlaneStore>()((set, get) => ({
    planes: [],
    currentPlanes:[],
    historyPlanes:[],
    setPlanes: (planes:Plane[]) => set((state) => ({ ...state, planes })),
    setCurrentPlanes: (planes:Plane[]) => set((state) => ({ ...state, currentPlanes: planes })),
    nextPlane: () => set((state) => {
        const historyPlanes = state.historyPlanes
        const current = get().current()
        if(current !== undefined){
            historyPlanes.push(current)
        }
        const planes = moveFirstToLast(state.planes)
        return    ({ ...state, historyPlanes, planes })
    }),
    shufflePlanes: () => set((state) => ({ planes: shuffleArray(state.planes)}) ),
    add: (plane: Plane) => set((state) => ({ planes: [...state.planes, plane]})),
    current: () => get().currentPlanes[0],
    addHistoryPlane: (plane) => set((state) => ( { ...state, historyPlanes: [...state.historyPlanes, plane ]}) ),
    resetHistoryPlane: () => set((state) => ({ ...state, historyPlanes: []}))
}))