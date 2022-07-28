import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        //crear estado y actualizarlo
        setBusqueda(e.target.value);

        //filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
        });

        if (busqueda.length <= 3 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        //actializar el estado del listado principal con lo que se filtro
        setListadoState(pelis_encontradas);
    }


    return (
        <div className="searsh">
            <h3 className="tittle">buscador: {busqueda}</h3>
            {(noEncontrado == true && busqueda.length > 3) && (
                <span className="no-encontrado">no se ah encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete="off"
                    onChange={buscarPeli}
                />

                <button id="searsh">buscar</button>
            </form>
        </div>
    )
}
