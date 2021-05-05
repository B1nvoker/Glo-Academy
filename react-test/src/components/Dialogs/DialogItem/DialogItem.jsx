import React from 'react';
import dialogItemStyle from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={dialogItemStyle.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;