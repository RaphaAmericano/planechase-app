"use client"
import { usePlaneStore } from "@/lib/store/plane-store"
import { shuffleArray } from "@/lib/utils/gameFunctions"
function NewGameButton(){
    const { planes, setCurrentPlanes, resetHistoryPlane } = usePlaneStore()

    function newGame(){
        setCurrentPlanes(shuffleArray(planes))
        resetHistoryPlane()
    }
    // TODO: Montar um modal para confirmar o reinicio do jogo

    return <button className="btn btn-primary" disabled={false} onClick={newGame}>Novo Jogo</button>
}
export default NewGameButton