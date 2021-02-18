import React, { useEffect, useState } from 'react'
import {
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Popup
} from 'semantic-ui-react'

import './Dashboard.css'
//import Modal from './Modal'
import Card from './reusable/Card'
import { menuItems, getMenu, getActiveEntries, addSubsection } from '../hooks/menuItems'

export const Dashboard = () => {
    const [visible, setVisible] = useState(true)
    const [menu, setMenu] = useState(menuItems)
    const [rightMenu, setRightMenu] = useState(false)
    const [newInput, setNewInput] = useState(false)
    const [inputVal, setInputVal] = useState('')
    //const [openModal, setOpenModal] = useState(false)
    //const [active, setActiveEntries] = useState(getActiveEntries())

    //const addSubsection = () => {
    //    setOpenModal(!openModal)
    //    setMenu(getMenu())
    //}

    ////useEffect(() => {
    //setMenu(getMenu())
    //}, [menu])

    const handleActive = (e) => {
        const classList = e.target.classList
        classList.contains('active__menu') ? classList.remove('active__menu') : classList.add('active__menu')
    }

    return (
        <div className="dashboard__outer__container">
            <div className="dashboard__header">
                <div className="header__content">
                    <h2>Decree</h2>
                </div>
            </div>
            {rightMenu &&
                <div className="slider__control__right" onClick={() => setVisible(!visible)}>
                    <Icon name=" angle double right" className="slide__cta__right" size="large" />
                </div>}
            <Sidebar.Pushable as={Segment} className="sidebar__container ">
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    onHidden={() => setRightMenu(true)}
                    onVisible={() => setRightMenu(false)}
                    vertical
                    visible={visible}
                    width='large'
                    onMouseLeave={() => { setNewInput(false); setInputVal("") }}
                >
                    <div className="icon__control">
                        <Popup content='Add a subsection' trigger={<Icon name='add circle' className="add__cta" size="large" onClick={() => setNewInput(!newInput)} />} />
                    </div>
                    <div className="slider__control" onClick={() => setVisible(!visible)}>
                        <Icon name=" angle double left" className="slide__cta" size="large" />
                    </div>
                    {menu.subsections.map(section => {
                        return (
                            <div>
                                <Menu.Item as="div" key={section}>
                                    <div className="menu__section__title">
                                        <Icon name="hashtag" className="icon"></Icon>
                                        {section.title}
                                    </div>
                                </Menu.Item>
                                <div className="menu__section__entry__container">
                                    {section.entries.map(entry => {
                                        return (
                                            <Menu.Item as="a" className={`${entry.active ? 'active__menu' : ''}`} key={entry} onClick={(e) => handleActive(e)}>
                                                <div className="menu__item__container">
                                                    <div className="color__bar" style={{ backgroundColor: entry.mainColor }}></div>
                                                    {entry.entry_text}
                                                </div>
                                            </Menu.Item>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    {newInput &&
                        <Menu.Item as="div" className="input__div">
                            <div className="menu__section__title" >
                                <Icon name="hashtag" className="icon"></Icon>
                                <form action="" onSubmit={(e) => { e.preventDefault(); addSubsection(inputVal); setNewInput(!newInput); setInputVal("") }}>
                                    <input type="text" className="subsection__input" value={inputVal} onChange={e => setInputVal(e.target.value)}></input>
                                </form>
                            </div>
                        </Menu.Item>
                    }

                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <div className="dashboard__content">
                            {getActiveEntries().map(card => {
                                return (
                                    <div>
                                        <Header as="h2">{card.subsection}</Header>
                                        {card.activeEntries.map(card => {
                                            return <Card card={card}></Card>
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div >
    )
}