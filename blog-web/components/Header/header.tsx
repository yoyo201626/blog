import Link from 'next/link'
import Container from '../container'
import style from './header.module.css'
import cn from 'classnames'
const Header = () => {
  return (
    <Container>
      <nav className={cn({
        ["space-x-4"]: true,
        [style.navLine]: true
      })}>
        <Link href="/">
        <a>About</a>
        </Link>
        <Link href="/posts">
        <a>Posts</a>
        </Link>
    </nav>
    </Container>
  )
}

export default Header
