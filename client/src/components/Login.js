import React, { useContext, useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { UserContext } from '../UserContext'
import Toast from './reusable/Toast'

export default function Login() {

    const ctx = useContext(UserContext);
    const [toast, setToast] = useState(null)

    const onSuccess = (res) => {
        ctx.setUser(res)
        ctx.setLoggedIn(true)
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Login"
                onSuccess={(res) => onSuccess(res)}
                onFailure={() => { setToast("User could not log in! Try again!") }}
                isSignedIn={true}
            />
            {toast && <Toast message={toast} />}
        </div >
    )
}
