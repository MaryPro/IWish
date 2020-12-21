import {Carousel} from "react-bootstrap"
import style from './CarouselList.module.css'

export default function CarouselList({gift}) {
    console.log(gift)
    return (
        <>
            <div>

                {gift && gift.map((el) => <h1 className={style.item}> {el} </h1>)}


            </div>


        </>

    )

}