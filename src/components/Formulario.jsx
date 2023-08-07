import useClima from "../hooks/UseClima";
import { useState } from "react";
import paises from "../helpers/paises";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios.");
      setTimeout(() => {
        setAlerta("");
      }, 2000);
    }

    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form action="" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Seleccione</option>
            {paises.map((pais, index) => (
              <option key={index} value={pais.codigo}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};

export default Formulario;
