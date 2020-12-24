import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import IdeaCard from '../IdeaCard/IdeaCard'

function ViewShareList() {
    const {id, user} = useParams()
    const [state, setState] = useState()
    useEffect(() =>

            fetch(`/share/?id=${id}&user=${user}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(info => setState(info))


        , []
    )
    console.log(state)

    return (
        <>
            <h1>
                Список
                желаний: <h1>{state && state.goods[0].titleWish}</h1> пользователя: <h1>{state && state.userNickname[0].login}</h1>
                <br></br>
                <br>
                </br>
                <h1>В желаниях:
                    {state && state.originList.map(el => <IdeaCard key={el._id} idea={el}/>)}
                </h1>


            </h1>
        </>
    )


}

export default ViewShareList