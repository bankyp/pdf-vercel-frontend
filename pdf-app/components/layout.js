import styles from '../styles/layout.module.css'

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>Basic PDF CRUD App</h1>
      <p className={styles.subtitle}>
        By <a href="https://lepchat.org/" target="_blank">Bankole Peters</a> and{' '}
        <a href="https://lepchat.org/" target="_blank">Lepchat</a>
      </p>
      {props.children}
    </div>
  )
}
