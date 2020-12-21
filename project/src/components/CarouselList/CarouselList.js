import {Carousel} from "react-bootstrap"
export default function CarouselList({gift}) {
console.log(gift)
    return(
        <>
            <div>
            <Carousel interval={0} wrap={false}>

            {gift && gift.map((el, i) => <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/200x200?text=First slide&bg=373940"
                    alt={el[i]}
                />
                <Carousel.Caption>


               <h1> {el[i]} </h1>
                </Carousel.Caption>
                </Carousel.Item>)}


            </Carousel>
            </div>



        </>

    )

}