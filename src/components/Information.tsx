import styles from '../styles/components/Information.module.css'
import {PokemonContext} from '../context/PokemonContext'
import { useContext } from 'react'

export function Information(){

const {
  name,
  id,
  type
} = useContext(PokemonContext)



  return(
    <div className={styles.container}>
        <div className={styles.table}>
            <div className={styles.title}>
              <p>Name</p>
              <p>Type</p>
              <p>Value</p> 
                                     
            </div>
            
            <div className={styles.description}>
              <p>{name}</p>
              <p>{type}</p>
              <p>#{id}</p>
              
              
            </div>
          </div>

           {/* <div className={styles.comparetedTable}>
             <div className={styles.comparetedTitle}>
               <p>Compared</p> 
             </div>
             <div className={styles.comparetedDescription}>
               <p>More or Less</p>
             </div>
           </div> */}
          

    </div>
  )
}