import "../Card/assets/css/Card.css"
import photo from "../Card/assets/images/Star.svg"

export default function Card(props) {
  const photoUrl  = "/src/components/Card/assets/images";
  let badgeText;
  if(props.cardData.openSpots === 0){
      badgeText="SOLD OUT"
  }else if(props.cardData.location === "Online"){
      badgeText="Online"
  }
  return (
     <section>
          <div className="card">
              {badgeText && <div className="card--badge">{badgeText}</div>}
               <img src={`${photoUrl}/${props.cardData.coverImg}`}
               className="card--image"
                alt="images"/>
               <div className="card--stats">
                    <img src={photo} />
                    <span>{props.cardData.stats.rating}</span>
                    <span className="gray">{props.cardData.stats.reviewCount} • </span>
                    <span className="gray">{props.cardData.location}</span>
               </div>
               <p className="card--title">{props.cardData.title}</p>
               <p><span className="bold card--price">From ${props.cardData.price}</span> / person</p>
          </div>
     </section>    
  )
}    