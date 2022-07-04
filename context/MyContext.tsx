import { createContext } from 'react';

export type WinesType = {
  avaliations: number
  classification: string
  country: string
  discount: number
  flag: string
  id: number
  image: string
  name: string
  price: number
  priceMember: number
  priceNonMember: number
  rating: number
  region: string
  size: string
  sommelierComment: string
  type: string
}[]

const initialValue = {
  wines: [] as WinesType,
  setWines: (wines: WinesType) => {},
  filterByPrice: (value: number) => {},
}

const MyContext = createContext(initialValue);

export default MyContext;
