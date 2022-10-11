export type Beer = {
  id: number
  name: string
  tagline: string
  description: string
  image_url: string
  ibu: number
  abv: number
  brewers_tips: string
  contributed_by: string
  attenuation_level: number
  boil_volume: BoilVolume
  unit: string
  ebc: number
  first_brewed: string
  food_pairing: string[]
}

type BoilVolume = {
  value: number
  unit: string
}
