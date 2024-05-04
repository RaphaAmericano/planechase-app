import { create } from "zustand";

type ToastState = {
    active: boolean;
    message: string;
    type: "alert" | "info";
}

type ToastActions = {
    open: () => void;
    close: () => void;
    toggle: () => void;
    setMessage: (message:string) => void;
    setType: (type: "alert" | "info") => void;
}

type ToastStore = ToastState & ToastActions

export const useToastStore = create<ToastStore>()((set, get) => ({
    active: false,
    type: "info",
    message: "",
    open: () => set((state) => ({ ...state, active: true} )),
    close: () => set((state) => ({ ...state, active: false} )),
    toggle: () => set((state) => ({ ...state, active: !state.active} )),
    setMessage: (message: string ) => set((state) => ({ ...state, message })),
    setType: (type: "alert" | "info") => set((state) => ({ ...state, type }))
}))
