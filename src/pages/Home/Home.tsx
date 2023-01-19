
import { useState, useEffect } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { getAllPokemon, axiosGetPokemonByName } from '../../services/pokemon'
import { IPokemon } from '../../interfaces/pokemon'
import { useAuth0 } from '@auth0/auth0-react'
import './styles.css'

export const Home = () => {
  const [allPokemon, setAllPokemon] = useState<IPokemon[]>()

  const { user, logout } = useAuth0()

  const getPokemons = async () => {
    const pokemons = await getAllPokemon()
      .then(data => data.results.map(pokemon => {
        return getPokemon(pokemon.name)
      }))
      .then(data => Promise.all(data))

    setAllPokemon(pokemons)
  }

  const getPokemon = async (name:string) => {
    const data = await axiosGetPokemonByName(name).then(res => res)
    return data
  }

  useEffect(() => {
    getPokemons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className='header'>

        <h1>Welcome {user?.name}</h1>
        <button type='button' className='nes-btn is-error' onClick={() => logout()}>Logout</button>
      </div>
      <div className='main_layout'>
        {
        allPokemon?.map(pokemon => {
          return (
            <PokemonCard key={pokemon.id} name={pokemon.name} type={pokemon.types[0].type.name} image={pokemon.sprites.front_default} />
          )
        })
        }
      </div>
    </>
  )
}
