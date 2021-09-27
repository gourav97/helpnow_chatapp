import { IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import db from '../../firebase';
import Icon from '@mdi/react';
import { mdiVideoOutline, mdiPhoneOutline, mdiAttachment, mdiSend } from '@mdi/js';

import './chat.css'
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';

export default function Chat() {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('')
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault();
        if (input === "") {

        }
        db.collection('rooms').doc(roomId).collection('message').add({
            name: "Gourav",
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')


    }



    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)

            });
            db.collection('rooms').doc(roomId).collection('message').orderBy('timestamp', 'asc').onSnapshot(
                snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
                }
            )
        }

    }, [roomId]);

    return (
        <div className="chat">
            <div className="chat_header">

                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p></p>
                </div>
                <div className="header_right">
                    <Icon path={mdiVideoOutline}
                        size={1} color="#075E54" />
                    <Icon path={mdiPhoneOutline}
                        size={1} color="#075E54" />


                </div>
            </div>

            <div className="chat_body">
                {
                    messages.map(message => (
                        <p className="chat_message chat_receiver">
                            <span className="chat_name">{message.name}</span>
                            {message.message}
                            <span className="chat_time">
                                {
                                    new Date(message.timestamp?.seconds * 1000).toLocaleTimeString()
                                }
                            </span>
                        </p>

                    ))
                }

            </div>

            <div className="chat_footer">


                <form onSubmit={sendMessage}>
                    <div className="message_container">
                        <input type="text" value={input} placeholder="Type your message" onChange={e => setInput(e.target.value)} />
                        <Icon path={mdiAttachment}
                            size={1} color="#075E54" rotate={-45} />
                        <input type="submit" />
                    </div>
                </form>

                <Icon path={mdiSend}
                    size={1} color="#075E54" rotate={-45} />


            </div>


        </div>
    )
}
