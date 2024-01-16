/* eslint-disable react/prop-types */

const ProductDetails = ({data}) =>{
    return(
        <div className="container">
                <h1>Product: {data.nombre}</h1>
                <p>Description: {data.descripcion}</p>
                <span>SKU: {data.sku}</span>
                <h2>$ {data.precio}</h2>
                <button className="bot">Comprar</button>
        </div>
    )
}
     
export default ProductDetails;