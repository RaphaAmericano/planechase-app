"use client"
import { usePlaneStore } from "@/lib/store/plane-store"
import { useEffect, useId, useRef } from "react"

function HistoryContainer(){
    const { historyPlanes } = usePlaneStore()
    const modal_ref = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        console.log(historyPlanes)
    },[historyPlanes])

    function openModal(){
        modal_ref.current?.showModal()
    }
    function closeModal(){
        modal_ref.current?.close()
    }
    // Todo: ver uma maneira de componentizar o dialog
    return <>
            <button className="btn" onClick={openModal}>Histórico</button>
            <dialog ref={modal_ref} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Os planos que você já viajou</h3>
                    {(Array.isArray(historyPlanes) && historyPlanes.length > 0) ? 
                    <ul>
                    {historyPlanes.map((plane) => (<li key={plane.id}>{plane.name}</li>)) }
                    </ul>
                    : null }
                <button className="btn" onClick={closeModal}>Fechar</button>
            </div>
            </dialog>
        </>
}
export default HistoryContainer