/* eslint-disable react-hooks/exhaustive-deps */
import ListaProductos from "../Productos/ListaProductos";
import { useState, useEffect } from "react";

const Home = () => {
  const productos = [
    {
      nombre: "Nike Air Max 1",
      precio: 120,
      descripcion: "Zapatillas clásicas con diseño icónico de Nike.",
      sku: 1020
    },
    {
      nombre: "Jordan 1 Retro High",
      precio: 150,
      descripcion: "Zapatillas de baloncesto Jordan con estilo retro.",
      sku: 3123
    },
    {
      nombre: "Adidas Superstar",
      precio: 80,
      descripcion: "Zapatillas clásicas de Adidas con puntera de goma.",
      sku: 35235
    },
    {
      nombre: "Nike React Element 87",
      precio: 160,
      descripcion: "Zapatillas modernas con tecnología de amortiguación React.",
      sku: 12314
    },
    {
      nombre: "Air Jordan 4",
      precio: 200,
      descripcion: "Zapatillas de baloncesto Jordan con diseño exclusivo.",
      sku: 12341
    },
    {
      nombre: "Vans Old Skool",
      precio: 70,
      descripcion:
        "Zapatillas clásicas de skate con la icónica franja lateral.",
        sku: 34234
    },
    {
      nombre: "Nike Air Force 1",
      precio: 90,
      descripcion: "Zapatillas legendarias de Nike con suela gruesa.",
      sku: 78795
    },
    {
      nombre: "Reebok Classic Leather",
      precio: 75,
      descripcion: "Zapatillas de cuero clásicas de Reebok con estilo retro.",
      sku: 75998
    },
    {
      nombre: "Puma Suede Classic",
      precio: 65,
      descripcion:
        "Zapatillas Puma con parte superior de ante y suela de goma.",
        sku: 896945
    },
  ];

  const [data, setData] = useState([ ]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    })
      getData.then((res) => setData(res));
  }, [ ]);
  

  return (
    <div>
      <ListaProductos data={data} />
    </div>
  );
};

export default Home;
