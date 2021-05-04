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

    let dialogs = [
        {id: 1, name: "valera"},
        {id: 2, name: "vadim"},
        {id: 3, name: "vova"},
        {id: 4, name: "volodja"},
        {id: 5, name: "artem"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "Bye"}

    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsStyle.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;