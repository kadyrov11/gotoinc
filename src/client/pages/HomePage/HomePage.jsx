import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../components/Modal'
import ParcelForm from '../../components/parsels/ParcelForm'

import parcelsActions from '../../../redux/parcels/parcels-actions'

import styles from './HomePage.module.scss'


function HomePage() {
  const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {setShowModal(!showModal)}
    return (
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeCircle}>
          <h1 className={styles.welcomeText}> Welcome to the <span className={styles.companyName}>GoToInc's</span> delivery service</h1>
          <div>
            <button type='button' className={styles.parcelBtn} onClick={toggleModal}>I have a parcels</button>
            <button className={styles.parcelBtn}><Link to='parcels' className={styles.parcelLink} >Deliver a parcels</Link></button>
          </div>
        </div>
        {showModal &&
          <Modal handleClose={toggleModal}>
            <ParcelForm action={parcelsActions.addParcel} handleClose={toggleModal} />
          </Modal>}
      </div>
  )
}



export default HomePage