"use client"
import Notification from "@/components/Notification";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, createContext, useCallback } from "react";

const NotificationContext = createContext({
    open: false
})

export default function NotificationProvider({ children } : { children: ReactNode}){

    const value = {
        open: false 
    }
    return <NotificationContext.Provider value={value} >
        {children}
        <AnimatePresence>
            <motion.div 
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: "10%",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: "0%",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: "10%",
                  }}
            >
                <Notification message="Test" />
            </motion.div>
        </AnimatePresence>

    </NotificationContext.Provider>
}

