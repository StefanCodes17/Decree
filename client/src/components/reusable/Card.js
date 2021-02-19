import React, { useState, useRef } from 'react'
import { useSpring, useTrail, animated as a } from 'react-spring'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import ListItem from './ListItem'

import './Card.css'
export default function Card({ card }) {

    const [toggle, setToggle] = useState(false);

    const toDoList = ['Read pages from 1 to 10', "Study for the upcoming quiz"]

    const props = {
        background: useSpring({ height: toggle ? '25%' : '100%', }),
        title: useSpring({ bottom: toggle ? '5px' : '35px', }),
        date: useSpring({ bottom: toggle ? '98%' : '0px', right: toggle ? '8px' : '57%' }),
        backText: useSpring({ opacity: toggle ? '0' : '0.1' }),
        scrollbar: { overflow: toggle ? 'auto' : 'hidden' }
    }

    const trail = useTrail(toDoList.length, {
        from: { opacity: 0 },
        to: { opacity: toggle ? 1 : 0 },
    })

    return (
        <div className="card__container">
            <a.div style={props.background} className="card__background__slider">
                <a.div style={props.title} className="card__title">
                    <h3>{card.entry_text}</h3>
                </a.div>
            </a.div>
            <div className="card__cta__open" onClick={() => setToggle(!toggle)}>
                <MoreVertRoundedIcon fontSize="large" />
            </div>
            <div className="card__content__container">
                <a.div style={props.date} className="card__info">
                    <div >{card.dueDate}</div>
                </a.div>
            </div>
            <a.div style={props.backText} className="card__category">
                Homework
                    </a.div>
            <div className="card__list" style={props.scrollbar}>
                <ul >
                    {trail.map((props, i) => (
                        <a.div style={props}>
                            <ListItem inputText={toDoList[i]} />
                        </a.div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
