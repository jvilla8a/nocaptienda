import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

import "./navbar.scss";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <h1>NoCap</h1>
        <img src={Logo} alt="NoCap Logo" width={80} />
      </Link>
      <ul className="social-media">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100093003182934&mibextid=LQQJ4d">
            <BsFacebook size={24} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/nocaptienda?igshid=MzRlODBiNWFlZA==">
            <BsInstagram size={24} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/message/7GFUGZY47HCQF1">
            <BsWhatsapp size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
