import { Link, useParams,useLocation } from "react-router-dom";
import React from "react";

export default function DetalleProducto() {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;
    if (!producto) {
        <div>
            <h2>Producto no encontrado</h2>
            <p>El producto con ID {id} no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    }
    return (
        <>
        <h2>
        Detalle del Producto
        </h2>
        <ul>
            <li className='tarjeta' key={producto.id}>
            <h4>
            {producto.nombre}
            </h4>
            Descripción:
            <br />
            {producto.masinfo}
            <br />
            Precio: ${producto.precio}
            <br />
            <img src={producto.avatar}  style={{ width: '30%', height: '30%', objectFit: 'cover' , borderRadius: '7px'}}></img>
            <br />
            <Link to="/productos">Volver a Productos</Link>
        </li>
        </ul>
        </>
    );
}