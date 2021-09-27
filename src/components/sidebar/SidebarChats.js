import { Avatar } from '@material-ui/core'
import React, { useState, useEffect, useRef } from 'react'
import './Sidebar.css'
import db from '../../firebase';
import { Link } from 'react-router-dom';


export default function SidebarChats({ id, name, addnewChat }) {
    const [seed, setSeed] = useState('');


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, []);

    const createChat = () => {
        const name = prompt("Add name")

        if (name) {
            db.collection('rooms').add({
                name: name
            })

        }

    }


    return (
        !addnewChat ? (
            <Link to={`/room/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="sidebar__chat">
                    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                    <div className="chat_container">
                        <h2>{name}</h2>
                        <p>message..</p>
                    </div>

                </div>
            </Link>
        ) : (
            <div className="sidebar__chat" onClick={createChat} >Add new chat</div>
        )
    )
}
