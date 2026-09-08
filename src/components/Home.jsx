import Header from "./Header"
import CardPizza from "./CardPizza"

const Home = () => {
  return (
    <main>
      <Header />

      <div className="container my-4">
        <div className="row">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640&q=80"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=640&q=80"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=640&q=80"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
