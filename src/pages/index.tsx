import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

import styles from './home.module.scss'

export default function Home() {
  const name = 'scyther'
  const number = 123
  const type = 'bug'
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ number }.png`

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