import styles from '../styles/components/HeadBar.module.css'

import {PokemonContext} from '../context/PokemonContext'
import { useContext } from 'react'
// import { SelectedCoinContext } from '../context/SelectedCoinContext'

export function HeadBar(){

  const {
    name
  } = useContext(PokemonContext)

  // const {
  //   theme,
  //   setThemeValue
  // }= useContext(SelectedCoinContext)
  

  return (
    <div className={styles.container}>
        
      <div className={styles.rotate}>
          <label className={styles.switch}>
            
          <img  
                  src='icons/PokeballLight.svg' 
                  className={styles.pokeballLight}/>
            
            {/* <input 
              className={styles.input} 
              type="checkbox" 
              onChange={setThemeValue}/>
            <span className={styles.slider}>
              {(theme) ? (
                <img  
                  src='icons/PokeballLight.svg' 
                  className={styles.pokeballLight}/>
              ):(
                <img  
                  src='icons/PokeballDark.svg' 
                  className={styles.pokeballDark}/>
              )}
              
            </span> */}
          </label>

      </div>
      
      <p className={styles.pokemonName} >{`${name}`}</p>
      
      <div/>

    </div>
  )
}