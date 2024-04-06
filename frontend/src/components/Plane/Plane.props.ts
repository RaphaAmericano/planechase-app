export interface Plane {
    id: string
    oracle_id: string
    name: string
    lang: string
    uri: string
    scryfall_uri: string
    layout: string
    highres_image: boolean
    image_status: string
    image_uris: ImageUris
    mana_cost: string
    cmc: number
    type_line: string
    oracle_text: string
    set_id: string
    set: string
    set_name: string
    set_type: string
    set_uri: string
    set_search_uri: string
    scryfall_set_uri: string
    rulings_uri: string
    prints_search_uri: string
    rarity: string
  }
  
  export interface ImageUris {
    small: string
    normal: string
    large: string
    png: string
    art_crop: string
    border_crop: string
  }

  