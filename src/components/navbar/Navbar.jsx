import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsFilterCircleFill,
  BsXCircleFill,
} from "react-icons/bs";

import Context from "../../utils/context";
import Logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const { filterBarOpen, setFilterBarOpen } = useContext(Context);

  return (
    <nav id="navbar">
      <Link to="/">
        <h1>NoCap</h1>
        <img src={Logo} alt="NoCap Logo" width={80} />
      </Link>
      <ul className="social-media">
        <li onClick={() => setFilterBarOpen(!filterBarOpen)}>
          {!filterBarOpen ? (
            <BsFilterCircleFill size={24} />
          ) : (
            <BsXCircleFill size={24} />
          )}
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100093003182934&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/nocaptienda?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/message/7GFUGZY47HCQF1"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
