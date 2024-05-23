import { Ref, RefObject, forwardRef, useRef } from "react"
import { DialogProps } from "./Dialog.props"


function Dialog({ children, defaultCloseButton = false }: DialogProps, ref:Ref<HTMLDialogElement> ){
    function closeModal(){
        if(ref!.current) { // Check if ref.current is not null
            ref!.current!.close(); // Call close() on ref.current
        }
    }
    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box">
               {children}
               {defaultCloseButton && <button className="btn" onClick={closeModal}>Fechar</button>}
            </div>
        </dialog>
    )
}
export default forwardRef(Dialog)