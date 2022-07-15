import React, {useState} from 'react'
import Modal from '../../components/Modal'
import ParcelForm from '../../components/parsels/ParcelForm'
import ParcelsList from '../../components/parsels/ParcelList/ParcelsList'
import parcelsActions from '../../../redux/parcels/parcels-actions'

function ParcelsPage() {
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState(null)

  const getId = id => {
    setId(id)
  }

    const toggleModal = () => {setShowModal(!showModal)}
  return (
    <div>
      <ParcelsList toggleModal={toggleModal} getId={getId} />
      {showModal && 
        <Modal handleClose={toggleModal}>
          <ParcelForm handleClose={toggleModal} id={id} action={parcelsActions.editParcel} /> 
        </Modal>
      }
    </div>
  )
}

export default ParcelsPage