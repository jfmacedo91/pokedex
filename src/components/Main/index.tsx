import styles from './styles.module.scss'

type MainProps = {
  image: string
  name: string
  number: number
  type: string
}

export function Main({ image, name, number, type }: MainProps) {
  let formatedNumber = ''

  if(number < 10) {
    formatedNumber = `#00${ number }`
  } else if(number < 100) {
    formatedNumber = `#0${ number }`
  } else (
    formatedNumber = `#${ number }`
  )

  return (
    <main className={ `${styles.mainContent} ${ styles[type] }` }>
      <strong className={ styles.number }>{ formatedNumber }</strong>
      <strong className={ styles.name }>{ name }</strong>
      <img src={ image } alt="" />
      <nav>
        <button>Read more</button>
        <button>Pokedex</button>
      </nav>
    </main>
  )
}