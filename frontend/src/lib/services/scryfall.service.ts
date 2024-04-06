import { Plane } from "@/components/Plane/Plane.props";
import httpService from "./http.service";

const scryfallService = Object.assign({}, httpService)
// scryfallService.defaults.baseURL = process.env.SCRYFALL_BASE_API
scryfallService.defaults.baseURL = "https://api.scryfall.com/"

// https://api.scryfall.com/cards/search?q=type%3Aplane

async function getCardsSearch(query:string){
    const result = await scryfallService.get(`/cards/search?q=${query}`)
    return result
}

async function getAllPlanes(): Promise<Plane[]>{
    const result = await getCardsSearch("type%3Aplane")
    // const response = await fetch("https://api.scryfall.com/cards/search?q=type%3Aplane", { next: { tags:[ "planes"] }})
    // const result = await response.json()
    // console.log(result)
    return result.data
}

export default scryfallService
export { getCardsSearch, getAllPlanes }