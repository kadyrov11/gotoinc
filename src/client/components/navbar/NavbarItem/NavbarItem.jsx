import React from 'react'
import {NavLink} from 'react-router-dom';

import styles from './NavbarItem.module.scss'

const setActive = ({isActive}) => isActive ? styles.active : styles.navLink

function NavbarItem({to, title}) {
  return (
      <li className={styles.navItem}>
          <NavLink to={to} className={setActive}>{title}</NavLink>
      </li>
  )
}

export default NavbarItem