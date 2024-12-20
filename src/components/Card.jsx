import { useEffect, useState } from "react";
import "./Card.css";
function Card({ incrementCounter }) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const parsed = await response.json();
    setProducts(parsed);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product) => {
        return (
          <div className="box">
            <div className="content">
              <h5>{product.title}</h5>
              <p>${product.price}</p>
              <p>{product.category}</p>
            </div>

            <img
              src={product.image}
              className="productImg"
              alt="productImg"
            ></img>
            <button
              className="button"
              onClick={()=>{incrementCounter((prev) => prev+1)}}
            >
              Add to busket
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
