import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={dialogsStyle.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={dialogsStyle.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogData = [
        {id: 1, name: "valera"},
        {id: 2, name: "vadim"},
        {id: 3, name: "vova"},
        {id: 4, name: "volodja"},
        {id: 5, name: "artem"}
    ]

    let messageData = [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "Bye"}

    ]

    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={dialogsStyle.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;