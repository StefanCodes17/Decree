import React, { useState, useEffect } from 'react'
import Logout from './Logout'
import Toast from './reusable/Toast'

import './UserProfile.css'
export default function UserProfile({ userProfile }) {

    const [showLogOut, setShowLogOut] = useState(false)
    const [toast, setToast] = useState(null)
    console.log(userProfile.imageUrl)

    useEffect(() => {
        setToast(`Welcome,  ${userProfile.email}`)
    }, [toast, userProfile.email])

    return (
        <div className="user__profile__container">
            <p className="user__profile__name">{userProfile.givenName[0].toUpperCase() + userProfile.givenName.slice(1)}</p>
            <img
                className="user__profile__img"
                src={userProfile.imageUrl}
                alt={`${userProfile.email}'s img`}
                onMouseEnter={() => setShowLogOut(true)}
                onClick={() => setShowLogOut(!showLogOut)}
            ></img>
            <div className={`logout__container ${showLogOut ? 'active' : ''}`} onMouseLeave={() => setShowLogOut(false)}>
                <Logout />
            </div>
            {toast && <Toast message={toast} />}
        </div>
    )
}
