import React, { useEffect, useState } from 'react'

export const Listado = ({ listadoState, setListadoState }) => {

    //const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("componente del listado de peliculas cargado");
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        // conseguir peliculas almacenadas
        let pelisAlmacenadas = conseguirPeliculas();

        // filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

        // actualizar estado del listado
        setListadoState(nuevo_array_pelis);

        // actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }

    return (
        <>
            {listadoState != null ? listadoState.map(peli => {

                return (
                    <article key={peli.id} className="peli-item">
                        <h3 className="tittle">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>


                        <button className="edit">Editar</button>
                        <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                    </article>
                );
            })
                : <h2>No hay peliculas ingresadas</h2>
            }

        </>
    )
}
