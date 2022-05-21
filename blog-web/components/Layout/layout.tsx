// import Alert from './alert'
import Footer from '../footer'
import Meta from '../meta'
import styles from './layout.module.css'
import Header from '../Header/header'
type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {

  return (
    <div className={styles.container}>
      <Meta />
      <header>
        <Header></Header>
      </header>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
export default Layout
