import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';
import InputBox from '../InputBox/InputBox'
import DropDown from '../DropDown/Dropdown'
import Button from '../Button/Button';
import styles from './styles.module.css'
import "./style.css"
// import { set, useForm } from 'react-hook-form'
import instance from '../../utils/axios'

const defaultInviteData = {
    email: '',
    batches: [],
    track: ''
}

const InviteUser = ({ batchOptions, token }) => {

    const [inviteData, setInviteData] = useState(defaultInviteData);

    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open);


    const sendInvite = async () => {
        const { email, batches: batchesData } = inviteData;
        const invitation = {
            email,
            batches: batchesData.map((batch) => {
                return { ...batch, batch_id: batch.value }
            })
        }

        const resp = await instance.post('invite_user', invitation)
            .then(() => {
                alert("Invited User")
                window.location.replace(window.location.pathname)
            })
    }



    return (
        <form className="invite_user_container">
            <Button text='Invite User' onClick={toggleModal} type='button' />
            <Modal isShowing={open} toggle={toggleModal} heading={'Invite User'} handleSubmit={sendInvite} >
                <div className={styles.invite_user}>
                    <div className={styles.emailinput}>

                    
                        <label htmlFor="email">Email</label>
                        <InputBox
                            placeholder={'Email'}
                            name={"email"}
                            value={inviteData.email}
                            setValue={(e) => { setInviteData({ ...inviteData, email: e.target.value }) }}
                        />
                     </div>
                    <div className="drop_down_box">
                        <label htmlFor="batches">Batches</label>
                        <DropDown
                            options={batchOptions}
                            placeHolder={'Batches '}
                            isMulti
                            // isSearchable
                            onChange={(data) => { setInviteData({ ...inviteData, batches: data }); }}
                        />
                    </div>
                </div>
            </Modal>
        </form>
    )
}

export default InviteUser;
