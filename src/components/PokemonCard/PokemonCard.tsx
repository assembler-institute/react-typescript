import toast from 'react-hot-toast'
import './styles.css'
import React from 'react'

interface IPokemonCardProps {
  name: string,
  type: string,
  image: string
}

//  what is the difference between "currentTarget" and "target"?
//  currentTarget is the element that the event listener is attached to,
// while target is the element that triggered the event

const PokemonCard = ({ name, type, image }: IPokemonCardProps) => {
  const showNotification = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    toast(`You choose ${e.currentTarget.alt}`, {
      icon: '👏'
    })
  }

  return (
    <div className={`pokeCard ${type}`}>
      <span className='nes-text is-error'>{name}</span>
      <img src={image} alt={`${name}`} onClick={(e) => showNotification(e)} />
    </div>
  )
}

export default PokemonCard
