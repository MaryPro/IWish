import style from '../IdeaCard.module.css'

export default function Star({idea}) {
  return (
    <>
      <div className={style.star} style={{fontSize: '40px', color: '#D6AD5F'}}>
            <i className="fas fa-star"></i>
      </div>
      <div  className={style.rate}>{idea.rate}</div> 
    </>
  )
}

