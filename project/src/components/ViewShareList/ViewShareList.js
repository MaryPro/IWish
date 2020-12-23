import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
function ViewShareList(){
    const {id, user} = useParams()
    const [state, setState] = useState()
useEffect(() =>

    fetch(`/share/?id=${id}&user=${user}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(info => setState(info))
        .then(console.log(state && state))

    ,[]

)
    return(
        <>
            <h1>
                Список желаний: <h1>{state && state.goods[0].titleWish}</h1> пользователя: <h1>{state && state.userNickname[0].login}</h1>
                <br></br>
                <br>
        </br>
                <h1>В желаниях: {state && state.goods[0].gifts}</h1>

            </h1>
            </>
    )


}
export default ViewShareList