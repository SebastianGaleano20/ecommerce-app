/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Producto = ({ info }) => {
  return (
    <div className="product-container">
    <Link to={`/Detalles/${info.sku}`}>
      <h2>Product: {info.nombre}</h2>
      <p>Description: {info.descripcion}</p>
      <span>SKU: {info.sku}</span>
      <h1>$ {info.precio}</h1>
    </Link>
    </div>
  );
};
export default Producto;
