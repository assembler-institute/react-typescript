
import './styles.css'

interface IPokemonCardProps {
  name: string,
  type: string,
  image: string
}

const PokemonCard = ({ name, type, image }: IPokemonCardProps) => {
  return (
    <div className={`pokeCard ${type}`}>
      <span className='nes-text is-error'>{name}</span>
      <img src={image} alt={`${name}`} />
    </div>
  )
}

export default PokemonCard
