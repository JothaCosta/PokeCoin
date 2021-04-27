import styles from '../styles/components/ShowPokemon.module.css'
import {PokemonContext} from '../context/PokemonContext'
import { useContext } from 'react'

export function ShowPokemon(){

  const {
    name,
    sprites
  } = useContext(PokemonContext)

  return(
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={`${sprites}`} alt={`${name}`}/>
      </div>

    </div>
  )
}