import {createContext, ReactNode, useContext, useEffect, useState} from 'react' 
import {SelectedCoinContext} from './SelectedCoinContext'
import {pokeapi, coinapi} from '../services/api'

interface PokemonData{
  name: string,
  type:string,
  id:number,
  sprites:string
}

interface PokemonProviderProps{
  children:ReactNode
}

export const PokemonContext = createContext({} as PokemonData)

export function PokemonProvider({children}: PokemonProviderProps){
 

  const{
    coin
  } = useContext(SelectedCoinContext)

  const [name,setName] = useState(String)
  const [type,setType] = useState(String)
  const [id,setId]= useState(Number)
  const [valueCoin, setValueCoin]= useState(0)
  const [sprites,setSprites]=useState(String)

  async function getValueCoin(){
    if(coin ==='0'){  
      await coinapi.get('USD-BRL').then(response =>{
        const {ask} = response.data[0]
        let value = Math.floor(parseFloat(ask) * 100)
        setValueCoin(value)
      })
    }

    if(coin ==='1'){
      await coinapi.get('EUR-BRL').then(response =>{
        const {ask} =response.data[0]
        let value = Math.floor(parseFloat(ask) * 100)
        setValueCoin(value)
      })
    }

    if(coin ==='2'){
      await coinapi.get('GBP-BRL').then(response =>{
        const {ask} =response.data[0]
        let value = Math.floor(parseFloat(ask) * 100)
        setValueCoin(value) 
      })
    }

    
  }

  async function getPokemon(){  

    await pokeapi.get(`${valueCoin}`).then(response =>{
      
      const {name,id} = response.data
      
      const {front_default}  = response.data.sprites

      let slot = response.data.types[0].type.name      

      setName(name)
      setId(id)
      setSprites(front_default) 
      setType(slot)
    }).catch(e =>{
      if(e.response.status === 404){
        //ignore
      }
    })
    }

  useEffect(()=> {
    getValueCoin() 
    
  },[getPokemon()])

  return(
    <PokemonContext.Provider
    value={{
      name,
      type,
      id,
      sprites

    }}>
      {children}
    </PokemonContext.Provider>
    )
}