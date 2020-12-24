import style from '../IdeaCard.module.css'

export default function Star({idea}) {
    // function addToMyList(e){
    //     const
    //     e.preventDefault();
    //     fetch('/addToMe',{
    //         method:"GET",
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     })
    //
    // }
  return (
    <>
      <div className={style.star} style={{fontSize: '40px', color: '#D6AD5F'}}>
            <i className="fas fa-star"></i>
          <h1>{idea}</h1>
      </div>
      <div  className={style.rate}>{idea.rate}</div> 
    </>
  )
}

