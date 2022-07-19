import "../Hero/assets/css/Hero.css"
import photos from "../Hero/assets/images/photogrid.svg"

export default function Hero() {
  return (
    <section className="hero">
          <img src={photos} alt="photos" className="hero--photo" />
          <h1 children="hero--header">Online Experiences</h1>
          <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
