import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = () => {


    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({})

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliState(peli);

        //Guardar en el almacenamiento local
        guardarEnStorage("pelis", peli);
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
            </strong>


            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    id='titulo'
                    name='titulo'
                    placeholder="titulo"
                />
                <textarea
                    id='descripcion'
                    name='descripcion'
                    placeholder="descripcion"></textarea>
                <input
                    type="submit"
                    id='save'
                    value="guardar"
                />
            </form>

        </div>
    )
}
