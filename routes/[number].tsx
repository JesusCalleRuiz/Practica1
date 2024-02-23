import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Data = {
  data: string
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const number = ctx.params.number;
      const frase = await Axios.get<Data>(
        `https://learnyourlesson.deno.dev/${number}`,
      );
      if (frase.status !== 200) {
        throw new Error("Error");
      }
      return ctx.render(frase.data);
    }catch (e) {
      throw e;
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const frase = props.data;

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
};

export default Page;