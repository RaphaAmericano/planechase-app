"use server"
import { getCardsSearch } from "@/lib/services/scryfall.service"
import { usePlaneStore } from "@/lib/store/plane-store"
import { shuffleArray } from "@/lib/utils/gameFunctions"

export async function getAllPlanes(){
    const { setPlanes } = usePlaneStore.getState()
    try {
        const result = await getCardsSearch("type%3Aplane")
        // const response = await fetch("https://api.scryfall.com/cards/search?q=type%3Aplane", { next: { tags:[ "planes"] }})
        const { data } = result
        setPlanes(shuffleArray(data))
        return true
    } catch (error) {
        return { error }
    }
}
