import React from 'react'
import { Link } from 'react-router-dom'

import NavbarList from '../NavbarList'

import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link to='/' className={styles.logo}>GoToInc</Link>
          <NavbarList/>
    </header>
  )
}

export default Navbar