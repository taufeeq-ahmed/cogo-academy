import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './styles.module.css';
import email from '/assets/email.svg'
// import cross from '/assets/cross.svg'
const InviteUser=()=>{
    return (
        <div className={styles.box} >
            <div className={styles.invite_box}>
                <div className={styles.section}> 
                    <div className={styles.text}><p className={styles.heading}> Invite Users</p></div>
                    {/* <div className={styles.cross}> <img src={cross}/></div> */}
                </div>
                <div> 
                    <label htmlFor="">Enter Email Id</label>
                    <div className={styles.addInvite}>
                        <img src={email} alt="" />
                        <input type='email' placeholder='Type here' className={styles.input}/>
                    </div>
                </div>
                <div className={styles.btn}><Button text='Invite User' /></div>
            </div>
        </div>
    )
}
export default InviteUser;