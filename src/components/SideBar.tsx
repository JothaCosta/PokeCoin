import styles from '../styles/components/SideBar.module.css'
import { Information } from './Information'
import {SelectedCoin} from './SelectedCoin'

export function SideBar(){
  return(

    
    <div className={styles.container}>

      <div className={styles.justCompletedColor}/>

      <div className={styles.front}/>

      <div className={styles.back}/>     

      <div className={styles.selectCoin}>
       <SelectedCoin/>
      </div>

      <div className={styles.information}>
        <Information/>
      </div>
    
      
    </div>
  )
}