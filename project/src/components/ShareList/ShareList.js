import React from 'react';
import {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function ShareList({id}) {
    const [state, setState] = useState({value: `${window.location.hostname}/share/?id=${id}`, copied: false})
    // console.log(window.location.hostname)
    // console.log(window.location.pathname)
    // console.log(window.location.hash)
    return (
        <CopyToClipboard text={state.value}
                         onCopy={() => setState({copied: true})}>

            <button onClick={() => alert('Ссылка скоприрована в буфер обмена')}>Скопировать ссылку на список</button>
        </CopyToClipboard>
    )
}