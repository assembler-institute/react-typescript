import axios from 'axios'
import { IPokemon, IAllPokemon } from '../interfaces/pokemon'

export const getPokemonByName = async (name: string):Promise<IPokemon> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/pokemon/${name}`)
  const data = await response.json()
  return data as IPokemon
}

export const axiosGetPokemonByName = async (name: string):Promise<IPokemon> => {
  const { data } = await axios.get<IPokemon>(`${process.env.REACT_APP_API_URL}/pokemon/${name}`)
  return data
}

export const getAllPokemon = async ():Promise<IAllPokemon> => {
  const { data } = await axios.get<IAllPokemon>(`${process.env.REACT_APP_API_URL}/pokemon/?limit=40&offset=0`)
  return data
}
