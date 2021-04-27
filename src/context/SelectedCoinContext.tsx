import Cookies from 'js-cookie'
import {createContext, ReactNode, useState, useEffect} from 'react' 

interface SelectedCoinProviderProps{
  children:ReactNode
  theme: boolean
  value:number

}

interface SelectedCoinData{
  coin:string;
  theme:boolean;
  value:number;
  setLeftCoin: () => void;
  setRightCoin: () => void;
  setThemeValue:() => void;
}



export const SelectedCoinContext = createContext({} as SelectedCoinData)

export function SelectedCoinProvider({children, ...rest}: SelectedCoinProviderProps){
  const [coin,setCoin] = useState('0')
  const [theme,setTheme] = useState(rest.theme)
  const [value,setValue] = useState(2)

  useEffect(() => {
    Notification.requestPermission();
  },[])

  useEffect(()=>{
    Cookies.set('theme',String(theme))
  },[theme])



  function setThemeValue(){
    setTheme(!theme)
  }

  function setRightCoin(){
    
    let useCoin = parseInt(coin)

    if(useCoin === 0 || useCoin === 1){
      setCoin(String(useCoin + 1))
    }
    
    if(useCoin === 2){
      setCoin(String(0))
    }
    
  }

  function setLeftCoin(){
    
    let useCoin = parseInt(coin)

    if(useCoin === 1 || useCoin === 2){
      setCoin(String(useCoin - 1))
    }
    
    if(useCoin === 0){
      setCoin(String(2))
    }
    
  }


  return(
    <SelectedCoinContext.Provider
      value={{
        coin,
        theme,
        value,
        setLeftCoin,
        setRightCoin,
        setThemeValue
      }}>
        
      {children}
    </SelectedCoinContext.Provider>
  )
}