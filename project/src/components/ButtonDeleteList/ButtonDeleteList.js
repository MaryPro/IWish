import React from 'react';
import style from './ButtonDeleteList.module.css'

export default function ButtonDeleteList({id, indepCount, setIndepCount}) {


    return (
        <>
            <div className={style.button} type="submit" id={id} onClick={() =>

                fetch('/wishlists', {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'Application/json',
                    },
                    body: JSON.stringify({id: id})
                })
                    .then(res => res.json())
                    .then(mes => alert(mes.message))
                    .then(setIndepCount(indepCount + 1))
            }>удалить список
            </div>

        </>
    )
}