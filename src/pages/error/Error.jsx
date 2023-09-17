import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./error.scss";

const Error = () => {
  return (
    <main id="error">
      <img src={Logo} />
      <section>
        <h2>ERROR</h2>
        <h4>Parece que algo salio mal 😅</h4>
        <Link to="/">Volver</Link>
      </section>
    </main>
  );
};

export default Error;
