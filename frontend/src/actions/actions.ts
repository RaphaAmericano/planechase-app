"use server"

import { getCardsSearch } from "@/lib/services/scryfall.service"

export async function getAllPlanes(){
    try {
        const result = await getCardsSearch("type%3Aplane")
        // const response = await fetch("https://api.scryfall.com/cards/search?q=type%3Aplane", { next: { tags:[ "planes"] }})
        const { data } = result
        return data
    } catch (error) {
        return { error }
    }
}
