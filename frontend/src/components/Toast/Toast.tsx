"use client"
import { useToastStore } from "@/lib/store/toast.store"

function Toast(){
    const { active, message, close} = useToastStore()
    
    if(!active) return null 

    return (
        <div className="toast">
            <div className="alert alert-info">
                <button onClick={close}>Fechar</button>
                <span>{message}</span>
            </div>
        </div>
    )
}
export default Toast