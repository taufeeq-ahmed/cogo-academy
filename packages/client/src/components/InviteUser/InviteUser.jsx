import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';
import InputBox from '../InputBox/InputBox'
import DropDown from '../DropDown/Dropdown'
import Button from '../Button/Button';
import styles from './styles.module.css'
import { set, useForm } from 'react-hook-form'

const defaultBatchOptions = [
    { label: 'Batch 1', id: '123' },
    { label: 'Batch 2', id: '124' },
    { label: 'Batch 3', id: '125' },
    { label: 'Batch 4', id: '126' },
    { label: 'Batch 5', id: '127' },
    { label: 'Batch 6', id: '128' }
]
const defaultTrackOptions = [
    { label: 'React', id: '123' },
    { label: 'Ruby', id: '124' },
    { label: 'GO', id: '125' }
]

const defaultInvite = {
    email: '',
    batches: [],
    track: ''
}

const InviteUser = ({ batches = defaultBatchOptions, tracks = defaultTrackOptions }) => {

    const [inviteData, setInviteData] = useState(defaultInvite);
    // const { register, handleSubmit } = useForm({
    //     defaultValues: {
    //         email: '',
    //         batches: [],
    //         track: ''
    //     }
    // });
    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open);



    useEffect(() => {
        // setBatches(defaultBatchOptions);
        // setTracks(defaultTrackOptions);
    }, []);

    const sendInvite = () => {
        alert(JSON.stringify(inviteData));
    }



    return (
        <form className="invite_user_container">
            <Button text='Invite User' onClick={toggleModal} type='button' />
            <Modal isShowing={open} toggle={toggleModal} heading={'Invite User'} >
                <div className={styles.invite_user}>
                    <label htmlFor="email">Email</label>
                    <InputBox
                        placeholder={'Email'}
                        name={"email"}
                        value={inviteData.email}
                        setValue={(e) => { setInviteData({ ...inviteData, email: e.target.value }) }}
                    // register={register}
                    // registerQuery={'email'}
                    // value={inviteData.email}
                    // setValue={(e) => { setInviteData({ ...inviteData, email: e.target.value }) }}
                    />
                    <label htmlFor="batches">Batches</label>
                    <DropDown
                        options={batches}
                        placeHolder={'Batches '}
                        isMulti
                        isSearchable
                        onChange={(data) => { setInviteData({ ...inviteData, batches: data }) }}

                    // register={register}
                    // registerQuery={'batches'}
                    // {...register('batches')}

                    />
                    {/* <label htmlFor="">Track</label> */}
                    {/* <DropDown
                        options={tracks}
                        placeHolder={'Track '}
                        isSearchable
                        onChange={(data) => { setInviteData({ ...inviteData, track: data }) }}
                    // register={register}
                    // registerQuery={'track'}
                    // {...register('track')}
                    /> */}
                    <Button text='Send invite' onClick={sendInvite} />
                </div>
            </Modal>
        </form>
    )
}

export default InviteUser;
