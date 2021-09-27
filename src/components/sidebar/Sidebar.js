import React, { useEffect, useState } from 'react'
import './SidebarChats'
import './Sidebar.css'
import SidebarChats from './SidebarChats';
import db from '../../firebase';

export default function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    })

    return (
        <div className="sidebar">
            <div className="sidebar__chats">
                <SidebarChats addnewChat />
                {
                    rooms.map(room => {
                        return <SidebarChats key={room.id} id={room.id} name={room.data.name} />
                    })
                }
            </div>
        </div>
    )
}
