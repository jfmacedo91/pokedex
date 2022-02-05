import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

import styles from './home.module.scss'

interface HomeProps {
  image: string
  name: string
  number: number
  type: string
}

export default function Home({ image, name, number, type }: HomeProps) {

  return (
    <>
      <Head>
        <title>Pokedéx | Início</title>
      </Head>
      <section className={ `${ styles.container } ${ styles[type] }` }>
        <Header />
        <Main image={ image } name={ name } number={ number } type={ type } />
        <Footer />
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const allPokemon = await fetch('https://pokeapi.co/api/v2/pokedex/1').then((response) => response.json())
  const pokemonId = Math.ceil(Math.random() * allPokemon.pokemon_entries.length)
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`).then((response) => response.json())

  return {
    props: {
      image: pokemon.sprites.other['official-artwork'].front_default,
      name: pokemon.name,
      number: pokemon.id,
      type: pokemon.types[0].type.name
    }
  }
}