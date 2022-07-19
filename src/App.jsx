import Card from "./components/Card/Card"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/Navbar/NavBar"
import data from "./components/Card/data.js";

function App() {
    const cards = data.map(cardData => {
        return(
            <Card
                key={cardData.id}
                cardData={cardData}
            />
        )
    });

  return (
    <div>
      <NavBar/>
      <Hero/>
        <section className="cards-list">
            {cards}
        </section>
    </div>
  )
}

export default App
