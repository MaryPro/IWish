import React from 'react';
import {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import style from './ShareList.module.css'

export default function ShareList({id, user}) {
    const [state, setState] = useState({value: `${window.location.hostname}/share/${id && id}/${user && user}`, copied: false})

    return (
        <CopyToClipboard text={state.value}
                         onCopy={() => setState({copied: true})}>

            <button className={style.button} onClick={() => alert('Ссылка скоприрована в буфер обмена')}>Скопировать ссылку на список</button>
        </CopyToClipboard>
    )
}