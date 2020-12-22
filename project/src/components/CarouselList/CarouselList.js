
import style from './CarouselList.module.css'


export default function CarouselList({gift}) {
    return (
        <>
            <div>

                {gift && gift.map((el) => <h1 className={style.item}> {el} </h1>)}


            </div>


        </>

    )

}
