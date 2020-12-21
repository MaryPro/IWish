
export default function CarouselList({gift}) {
console.log(gift)
    return(
        <>
            <div>


            {gift && gift.map((el) =>  <h1> {el} </h1>)}





            </div>



        </>

    )

}
