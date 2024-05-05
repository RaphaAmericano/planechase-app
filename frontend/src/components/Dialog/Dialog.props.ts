import { HTMLProps, ReactNode, RefObject } from "react";

export interface DialogProps {
    children: ReactNode;
    defaultCloseButton?: boolean;
}