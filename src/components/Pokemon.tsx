import styles from '../styles/components/Pokemon.module.css'
import { ShowPokemon } from './ShowPokemon'
import { HeadBar } from './HeadBar'

export function Pokemon(){
  return(
    <div className={styles.contaiener}>

      <div className={styles.headBar}>
        <HeadBar/>
      </div>

      
      <div className={styles.showPokemon}>
        <ShowPokemon/>
      </div>
      <div className={styles.justCompletedColor}/>
    </div>
  )
}