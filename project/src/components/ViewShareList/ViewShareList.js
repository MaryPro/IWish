import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import IdeaCard from '../IdeaCard/IdeaCard'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


function ViewShareList() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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

    return (
        <>
            <div style={{marginTop: '5%'}}>
                <h1> Список
                    желаний: {state && state.goods[0].titleWish}</h1> Пользователь <h1>{state && state.userNickname[0].login}</h1>

                хочет получить в подарок что-то из этого:
                <br></br>

                <Carousel>
                    {state && state.originList.map(el => <div><IdeaCard key={el._id} idea={el}/></div>)}

                </Carousel>


                {state && state.originList.map(el => <div style={{float: "left"}}><IdeaCard key={el._id} idea={el}/>
                </div>)}

            </div>
        </>
    )


}

export default ViewShareList