import useClima from "../hooks/UseClima";
const Resultado = () => {
  const { resultado,  } = useClima();
  //destructuring api
  const { name, main } = resultado;
  const gradosKelvin = 273.15;
  const { temp, temp_min, temp_max, feels_like } = main;

  if (!name || !main) {
    return null;
  }

  return (
    <div className="contenedor clima">
      <h2>El clima en {name} es:</h2>
      <p>
        {parseInt(temp - gradosKelvin)}
        <span> &#x2103;</span>
      </p>
      <p>
        Min: {parseInt(temp_min - gradosKelvin)}
        <span> &#x2103;</span>
      </p>
      <p>
        Max: {parseInt(temp_max - gradosKelvin)}
        <span> &#x2103;</span>
      </p>
      <p>Sesación térmica {parseInt(feels_like - gradosKelvin)}</p>
    </div>
  );
};

export default Resultado;
