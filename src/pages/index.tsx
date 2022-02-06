import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import styles from './home.module.scss'

export default function Home() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [type, setType] = useState('')

  let formatedNumber = ''
  const [formattedName, ] = name.split('-')

  if(number < 10) {
    formatedNumber = `#00${ number }`
  } else if(number < 100) {
    formatedNumber = `#0${ number }`
  } else (
    formatedNumber = `#${ number }`
  )

  useEffect(() => {
    async function getPokemon() {
      const allPokemon = await fetch('https://pokeapi.co/api/v2/pokedex/1').then((response) => response.json())
      const pokemonId = Math.ceil(Math.random() * allPokemon.pokemon_entries.length)
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`).then((response) => response.json())

      setImage(pokemon.sprites.other['official-artwork'].front_default)
      setName(pokemon.name)
      setNumber(pokemon.id)
      setType(pokemon.types[0].type.name)
    }

    getPokemon()
  }, [])

  return (
    <>
      <Head>
        <title>Pokedéx | Início</title>
      </Head>
      <section className={ `${ styles.container } ${ styles[type] }` }>
        <Header />
        <main className={ `${styles.mainContent}` }>
          <strong className={ styles.number }>{ formatedNumber }</strong>
          <strong className={ styles.name }>{ formattedName }</strong>
          <img src={ image } alt={ `${ formattedName }'s image` } />
          <nav>
            <button>More about { formattedName }</button>
            <button>Pokedex</button>
          </nav>
        </main>
        <Footer />
      </section>
    </>
  )
}