import { useState, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaFlagCheckered, FaGolfBall } from "react-icons/fa";
import {
  IoIosFootball,
  IoIosBaseball,
  IoIosAmericanFootball,
  IoIosBasketball,
} from "react-icons/io";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

import Logo from "../../assets/logo.png";
import MLB from "../../assets/leagues/MLB.png";
import NBA from "../../assets/leagues/NBA.png";
import NFL from "../../assets/leagues/NFL.png";
import WNBA from "../../assets/leagues/WNBA.png";
import MiLB from "../../assets/leagues/MiLB.png";
import NCAA from "../../assets/leagues/NCAA.png";
import Context from "../../utils/context";
import "./filterbar.scss";

const Filterbar = (props) => {
  const { onFilterChange } = props;
  const [openFilters, setOpenFilters] = useState([]);
  const { filterBarOpen, setFilterBarOpen } = useContext(Context);
  const width = window.innerWidth;

  const handleFilter = (filter, value) => {
    onFilterChange(filter, value);
    width <= 600 && setFilterBarOpen(false);
  };

  const handleOpenFiltersSwitch = (section) => {
    let newOpenFilters = [...openFilters];

    if (openFilters.includes(section))
      setOpenFilters(newOpenFilters.filter((item) => item !== section));
    else setOpenFilters([...openFilters, section]);
  };

  return (
    <aside id="filter-bar" className={`${!filterBarOpen && "closed"}`}>
      <section>
        <img
          src={Logo}
          alt="NoCap Logo"
          width={80}
          onClick={() => handleFilter(null, null)}
        />
        <ul>
          <h3>Filtros</h3>
          <li
            className="filter-section"
            onClick={() => handleFilter(null, null)}
          >
            <div className="filter-section-header">
              <h4>Ver todo</h4>
            </div>
          </li>
          <li
            className="filter-section"
            onClick={() => handleFilter("Sale", "Sale")}
          >
            <div className="filter-section-header">
              <h4>Ofertas</h4>
            </div>
          </li>
          <li
            className={`filter-section ${
              openFilters.includes("styles") ? "open" : ""
            }`}
            onClick={() => handleOpenFiltersSwitch("styles")}
          >
            <div className="filter-section-header">
              <h4>Siluetas</h4>
              <BiChevronDown
                className={openFilters.includes("styles") && "open"}
                size={20}
              />
            </div>
            <ul className="filter-section-content">
              <li onClick={() => handleFilter("styles", "59FIFTY")}>59FIFTY</li>
              <li onClick={() => handleFilter("styles", "LOW PROFILE 59FIFTY")}>
                Low Pro 59FIFTY
              </li>
              <li onClick={() => handleFilter("styles", "9FIFTY")}>9FIFTY</li>
              <li onClick={() => handleFilter("styles", "LOW PROFILE 9FIFTY")}>
                Low Pro 9FIFTY
              </li>
              <li onClick={() => handleFilter("styles", "39THIRTY")}>
                39THRITY
              </li>
              <li onClick={() => handleFilter("styles", "9FORTY")}>9FORTY</li>
              <li onClick={() => handleFilter("styles", "9TWENTY")}>9TWENTY</li>
              <li onClick={() => handleFilter("styles", "GOLFER")}>GOLFER</li>
              <li onClick={() => handleFilter("styles", "BUCKET")}>BUCKET</li>
              <li onClick={() => handleFilter("styles", "CASUAL CLASSIC")}>
                Casual Classic
              </li>
            </ul>
          </li>
          <li
            className={`filter-section ${
              openFilters.includes("leagues") ? "open" : ""
            }`}
            onClick={() => handleOpenFiltersSwitch("leagues")}
          >
            <div className="filter-section-header">
              <h4>Deporte</h4>
              <BiChevronDown
                className={openFilters.includes("leagues") && "open"}
                size={20}
              />
            </div>
            <ul className="filter-section-content">
              <li onClick={() => handleFilter("sports", "BASEBALL")}>
                <IoIosBaseball size={20} />
                Baseball
              </li>
              <li onClick={() => handleFilter("sports", "FOOTBALL")}>
                <IoIosAmericanFootball size={20} />
                Fútbol Americano
              </li>
              <li onClick={() => handleFilter("sports", "BASKETBALL")}>
                <IoIosBasketball size={20} />
                Basketball
              </li>
              <li onClick={() => handleFilter("sports", "SOCCER")}>
                <IoIosFootball size={20} />
                Fútbol
              </li>
              <li onClick={() => handleFilter("sports", "RACING")}>
                <FaFlagCheckered size={20} />
                Carreras
              </li>
              <li onClick={() => handleFilter("sports", "GOLF")}>
                <FaGolfBall size={20} />
                Golf
              </li>
            </ul>
          </li>
          <li
            className={`filter-section ${
              openFilters.includes("types") ? "open" : ""
            }`}
            onClick={() => handleOpenFiltersSwitch("types")}
          >
            <div className="filter-section-header">
              <h4>Ligas</h4>
              <BiChevronDown
                className={openFilters.includes("types") && "open"}
                size={20}
              />
            </div>
            <ul className="filter-section-content">
              <li onClick={() => handleFilter("leagues", "MLB")}>
                <img src={MLB} alt="MLB" />
                MLB
              </li>
              <li onClick={() => handleFilter("leagues", "NFL")}>
                <img src={NFL} alt="NFL" />
                NFL
              </li>
              <li onClick={() => handleFilter("leagues", "NBA")}>
                <img src={NBA} alt="NBA" />
                NBA
              </li>
              <li onClick={() => handleFilter("leagues", "WNBA ENTERPRISES")}>
                <img src={WNBA} alt="WNBA" />
                WNBA
              </li>
              <li onClick={() => handleFilter("leagues", "MINOR LEAGUE")}>
                <img src={MiLB} alt="MiLB" />
                MiLB
              </li>
              <li onClick={() => handleFilter("leagues", "COLLEGIATE")}>
                <img src={NCAA} alt="NCAA" />
                Universitario
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <ul className="social-media">
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
    </aside>
  );
};

export default Filterbar;
