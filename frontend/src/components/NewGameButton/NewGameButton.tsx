"use client"
import { usePlaneStore } from "@/lib/store/plane-store"
import { shuffleArray } from "@/lib/utils/gameFunctions"
import { useRef } from "react"
import Dialog from "../Dialog"
function NewGameButton(){
    const { planes, setCurrentPlanes, resetHistoryPlane } = usePlaneStore()
    const modal_ref = useRef<HTMLDialogElement>(null)
    function newGame(){
        setCurrentPlanes(shuffleArray(planes))
        resetHistoryPlane()
        closeModal()
    }
    // TODO: Montar um modal para confirmar o reinicio do jogo
    function openModal(){
        modal_ref.current?.showModal()
    }
    function closeModal(){
        modal_ref.current?.close()
    }

    return <>
        <button className="btn btn-primary" disabled={false} onClick={openModal}>Novo Jogo</button>
           <Dialog ref={modal_ref}>
                <h3 className="font-bold text-lg">Tem certeza que deseja iniciar um novo jogo?</h3>
                <p className="py-4">O histórico de planos visitados e caos instaurado será apagado.</p>
                <button className="btn" onClick={newGame}>Sim</button>
                <button className="btn" onClick={closeModal}>Não</button>
           </Dialog>
        </>
}
export default NewGameButton