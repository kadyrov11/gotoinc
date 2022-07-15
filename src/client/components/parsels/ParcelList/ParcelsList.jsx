import React from 'react'
import { useSelector } from 'react-redux'
import ParcelsItem from '../ParcelsItem/ParcelsItem'

import styles from './ParcelsList.module.scss'

function ParcelsList({toggleModal, getId}) {

    const parcels = useSelector(({parcels}) => parcels.items)
    const parcelElems = parcels.map( item => <ParcelsItem getId={getId} toggleModal={toggleModal} key={item.id} {...item} />)
  
  return (
    <ul className={styles.parcelsList}>
          {parcelElems} 
    </ul>
  )
}

export default ParcelsList