import React, {createRef} from 'react';
import dialogsStyle from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = createRef();

    let sendNewMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsStyle.messages}>
                {messagesElements}
                <div className={dialogsStyle.text}>
                    <textarea ref={newMessageElement}/>
                </div>
                <div className={dialogsStyle.button}>
                    <button onClick={sendNewMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;