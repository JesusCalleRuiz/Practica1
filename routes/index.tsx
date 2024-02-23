import Axios from "npm:axios";

type Data = {
  data: string;
};

export default async function Home() {

  try {
    const response = await Axios.get<Data>(
      "https://learnyourlesson.deno.dev/");
    const frase = response.data;
    return (

    <div className="container">
        <div className="welcome"></div>
        <div className="welcome2"></div>
        <a href="/" className="boton1" alt="Rotating Image"><h2>NUEVA FRASE</h2></a>
        <div className="baile1"></div>
        <div className="baile2"></div>
        <div className="baile3"></div>
        <div className="baile4"></div>
        <div className="baile5"></div>
        <div className="explosion"></div>
    
        <div className="caja">
          <h1>{frase}</h1>
        </div>

        <div>
          <h3>NO PULSES EL BOTÓN</h3>
        </div>

        <a href="#galleta" className="boton2">Mostrar Imagen</a>

        <div id="galleta" className="galleta1">
          <img src="rebuenas.jpg"/>
        </div>

    </div>

    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}