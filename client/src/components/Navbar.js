import React, { useContext } from 'react'
import Login from './Login'
import UserProfile from './UserProfile'
import { UserContext } from '../UserContext'

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Navbar.css'


export default function Navbar() {
    const { user, loggedIn } = useContext(UserContext);
    console.log(user)

    return (
        <Container textAlign="right" className="navbar__container">
            <div>
                {loggedIn ? <UserProfile userProfile={user.profileObj} /> : <Login />}
            </div>
        </Container >
    )
}
