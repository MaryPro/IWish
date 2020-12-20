import style from '../IdeaCard.module.css'

export default function Star({idea}) {
  return (
    <>
      <div className={style.star} style={{fontSize: '40px', color: 'Dodgerblue'}}>
            <i class="fas fa-star"></i>
      </div>
      <div  className={style.rate}>{idea.rate}</div> 
    </>
  )
}

