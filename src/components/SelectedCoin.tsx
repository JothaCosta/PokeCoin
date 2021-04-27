import {useContext} from 'react'
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'

import {AiOutlinePoundCircle,
        AiOutlineDollarCircle,
        AiOutlineEuroCircle} from 'react-icons/ai'

import {SelectedCoinContext} from '../context/SelectedCoinContext'
import styles from '../styles/components/SelectedCoin.module.css'

export function SelectedCoin(){

  const{
    coin,
    setLeftCoin,
    setRightCoin,

  } = useContext(SelectedCoinContext)

  function getComponent(){
    switch(coin){
      case '0': 
        return <AiOutlineDollarCircle size={65} className={styles.dollar}/>
      case '1': 
        return <AiOutlineEuroCircle size={65} className={styles.euro}/> 
      case '2':
        return <AiOutlinePoundCircle size={65} className={styles.pound}/>
    }
  }

 return(
   <div className={styles.container}>
     
    <BsFillCaretLeftFill size={70} className={styles.left} onClick={setLeftCoin}/>

     <div className={styles.coin}>     
      <div className={styles.component}>
        {getComponent()}
      </div>      
     </div>

    <BsFillCaretRightFill size={70} className={styles.right} onClick={setRightCoin}/>
   </div>
 ) 
}