import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import IdeaCard from '../IdeaCard/IdeaCard'
import SlideShow from 'react-image-show';
import AliceCarousel from 'react-alice-carousel'
// import "react-alice-carousel/lib/alice-carousel.css";

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
  let carouselEl = []
    state && state.originList.map(el => carouselEl.push(<IdeaCard key={el._id} idea={el}/>))
console.log(carouselEl)
    return (
        <>
<div style={{marginTop: '5%'}}>
               <h1> Список
                желаний: {state && state.goods[0].titleWish}</h1> Пользователь <h1>{state && state.userNickname[0].login}</h1>

              хочет получить в подарок что-то из этого:
                {/*<h1>*/}
                {/*    /!*{state && state.originList.map(el => <IdeaCard key={el._id} idea={el}/>)}*!/*/}
                {/*</h1>*/}

                {/*<div className="App">*/}
                    <AliceCarousel autoPlay autoPlayInterval="3000" style={{display: 'flex', justifyItems: 'center' }}>
                        {/*<img src={image1} className="sliderimg" alt=""/>*/}
                        {/*<img src={image2} className="sliderimg" alt=""/>*/}
                        {/*<img src={image3} className="sliderimg" alt=""/>*/}
                        {/*<img src={image4} className="sliderimg" alt=""/>*/}
                        {state && state.originList.map(el => <IdeaCard key={el._id} idea={el}/>)}


                    </AliceCarousel>

                            {/*{state && state.originList.map(el => <IdeaCard key={el._id} idea={el}/>)}*/}




                {/*</div>*/}
</div>
        </>
    )


}

export default ViewShareList