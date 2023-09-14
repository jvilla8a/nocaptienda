import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

import Context from "../../utils/context";
import Logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const { filterBarOpen, setFilterBarOpen } = useContext(Context);

  return (
    <nav id="navbar">
      <IoMenu size={24} onClick={() => setFilterBarOpen(!filterBarOpen)} />
      <Link to="/">
        <h1>NoCap</h1>
        <img src={Logo} alt="NoCap Logo" width={80} />
      </Link>
      <ul className="social-media">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100093003182934&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/nocaptienda?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/message/7GFUGZY47HCQF1"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
