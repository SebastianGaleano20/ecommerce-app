/* eslint-disable react/prop-types */

import Producto from "./Producto";

const ListaProductos = ({ data = [] }) => {
  return (
    <div className="container-items">
      {data.map((product) => (
        <Producto key={product.sku} info={product} />
      ))}
    </div>
  );
};

export default ListaProductos;
