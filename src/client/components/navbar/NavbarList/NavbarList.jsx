import React from 'react'

import navbarElems from '../navbarElems';

import NavbarItem from '../NavbarItem'

import styles from './NavbarList.module.scss'

function NavbarLsit() {
    const elemsMarkup = navbarElems.map(item => <NavbarItem key={item.title} {...item} /> )
  return (
    <ul className={styles.navList}>
          {elemsMarkup}
    </ul>
  )
}

export default NavbarLsit