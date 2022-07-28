import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { Listado } from "./Components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/*cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis pelis</h1>
      </header>
      {/*barra de navegacion*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">inicio</a></li>
          <li><a href="/#">peliculas</a></li>
          <li><a href="/#">blog</a></li>
          <li><a href="/#">contacto</a></li>
        </ul>
      </nav>
      {/*contenido principal*/}
      <section id="content" className="content">
        {/*aqui va el listado de peliculas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />

      </section>

      {/*barra lateral*/}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />
        <Crear setListadoState={setListadoState} />
      </aside>
      {/*pie de pagina*/}
      <footer className="footer">&copy; james eliot vargas sandoval</footer>
    </div>
  );
}

export default App;
