"use server"
import { getCardsSearch } from "@/lib/services/scryfall.service"
export async function getAllPlanes(){
    try {
        const result = await getCardsSearch("type%3Aplane")
        const { data } = result
        return data
    } catch (error) {
        return { error }
    }
}
