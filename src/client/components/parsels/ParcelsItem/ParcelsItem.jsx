import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import parcelsActions from '../../../../redux/parcels/parcels-actions'


import styles from './ParcelsItem.module.scss'

function ParcelsItem({ email, id, fromCity, toCity, type, date, description , toggleModal, getId }) {
  const [deliver, setDeliver] = useState(false)

  const dispatch = useDispatch()

  const handleDeliver = () => {
    setDeliver(!deliver)
    if (!deliver) {
      alert(`Contact by this email: ${email}`)
    }
  }

  const onClickDelete = () => {
    dispatch(parcelsActions.deleteParcel(id))

  }
  const onClickEdit = () => {
    toggleModal()
  }
  return (
    <li className={styles.item} onClick={() => getId(id)}>
      <div className={styles.container}>
        <p className={styles.info}><span className={styles.label}>From:</span>{fromCity}</p>
        <p className={styles.info}><span className={styles.label}>To:</span>{toCity}</p>
      </div>
      <div className={styles.container}>
        <p className={styles.info}><span className={styles.label}>Parcel type:</span>{type}</p>
        <p className={styles.info}><span className={styles.label}>Date of dispatch</span>{date}</p>
      </div>
      {description.length > 0 && <p className={styles.decr}><span className={styles.label}>Description:</span> {description}</p>}
      <div className={styles.btnsContainer}>
      <button className={styles.edit} onClick={onClickEdit} >Edit</button> 
      <button className={styles.delete} onClick={onClickDelete}>Delete</button>
      <button className={styles.deliver} onClick={handleDeliver}>{deliver ? 'Cancel': 'Deliver' }</button>
      </div>
    </li>
  )
}

export default ParcelsItem