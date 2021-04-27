import Head from 'next/head'
import { Pokemon } from '../components/Pokemon'
import { SideBar } from '../components/SideBar'
import styles from '../styles/Home.module.css'

import { SelectedCoinProvider } from "../context/SelectedCoinContext";
import {PokemonProvider} from "../context/PokemonContext";

import {GetServerSideProps} from 'next'

interface HomeProps{
  theme:boolean;
  value: number;
}

export default function Home(props:HomeProps) {

  return (
    <SelectedCoinProvider
      theme={props.theme}
      value={props.value}
      >
      <div className={styles.container}>
        <Head>
          <title>PokéCoin</title>
          
        </Head>  
        <PokemonProvider>
          <div>
            <SideBar/>
          </div>

        <div>
          <Pokemon/>
        </div>
        </PokemonProvider>
      </div>
    </SelectedCoinProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {theme, value} = ctx.req.cookies

  return{
    props:{
      theme:Boolean(theme),
      value:Number(value)
    }
  }
}
