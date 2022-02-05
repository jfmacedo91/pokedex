import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={ styles.container }>
      <p>
        This project was developed with the API pokeapi.co<br />
        Developed by - jfmacedo91
      </p>
    </footer>
  )
}