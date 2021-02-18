import React, { useState } from 'react'

import './Toast.css'
export default function Toast({ message }) {

    const [showToast, setShowToast] = useState(true)

    setTimeout(() => setShowToast(false), 3000)

    return (
        <div id="snackbar" className={showToast ? 'show' : ''}>
            <p>{message}</p>
        </div>
    )
}
