import React from 'react'

import './Card.css'
export default function Card({ card }) {
    return (
        <div className="card__container">
            <div className="card__title">
                <h3>{card.entry_text}</h3>
            </div>
            <div className="card__info">
                <p>{card.dueDate}</p>
            </div>
        </div>
    )
}
