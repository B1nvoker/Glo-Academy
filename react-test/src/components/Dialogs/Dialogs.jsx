import React from 'react';
import dialogsStyle from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                <div className={dialogsStyle.dialog}>
                    Valera
                </div>
                <div className={dialogsStyle.dialog + ' ' + dialogsStyle.active}>
                    Artem
                </div>
                <div className={dialogsStyle.dialog}>
                    Vova
                </div>
                <div className={dialogsStyle.dialog}>
                    Vadim
                </div>
                <div className={dialogsStyle.dialog}>
                    Misha
                </div>
            </div>
            <div className={dialogsStyle.messages}>
                <div className={dialogsStyle.message}>Hi</div>
                <div className={dialogsStyle.message}>How are u?</div>
                <div className={dialogsStyle.message}>Bye</div>
            </div>
        </div>
    );
}

export default Dialogs;