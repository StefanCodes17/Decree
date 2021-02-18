import React, { useContext } from 'react'
import { GoogleLogout } from 'react-google-login'
import { UserContext } from '../UserContext'

export default function Logout() {

    const ctx = useContext(UserContext);

    const onLogoutSuccess = () => {
        ctx.setLoggedIn(false)
        ctx.setUser(null)
    }

    return (
        <div>
            <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={() => { onLogoutSuccess() }}
            />
        </div >
    )
}
