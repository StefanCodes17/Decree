import React, { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import './ListItem.css'

export default function ListItem({ inputText }) {

    const [text, setText] = useState(inputText)
    // 0 is not checked, 1 is checked
    const [status, setStatus] = useState(false)

    return (
        <div className="outer__list__container">
            <div className="content__container">
                <div className="status__container" onClick={() => setStatus(!status)}>
                    {status ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
                </div>
                <div className="text__container">
                    <input className="text__input" value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}
