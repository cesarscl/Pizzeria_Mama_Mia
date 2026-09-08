import { formatPrice } from "../utils/helpers"

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={img}
          className="card-img-top"
          alt={`Pizza ${name}`}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Pizza {name}</h5>

          <p className="text-secondary small mb-1">Ingredientes:</p>
          <p className="small">🍕 {ingredients.join(", ")}</p>

          <p className="fs-5 fw-bold text-center my-2">
            Precio: ${formatPrice(price)}
          </p>

          <div className="d-flex justify-content-between mt-auto">
            <button className="btn btn-outline-secondary btn-sm">
              Ver Más 👀
            </button>
            <button className="btn btn-dark btn-sm">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
