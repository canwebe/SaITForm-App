import styles from './footer.module.css'
export default function Footer() {
  return (
    <footer>
      Powered by{' '}
      <a href="https://canwebe.tech" target="_blank" rel="noopener noreferrer">
        CanWeBe!
      </a>{' '}
      {new Date().getFullYear()}
    </footer>
  )
}
