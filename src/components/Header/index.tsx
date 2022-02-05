import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={ styles.container }>
      <img src="/logo.svg" alt="Pokemon" />
    </header>
  )
}