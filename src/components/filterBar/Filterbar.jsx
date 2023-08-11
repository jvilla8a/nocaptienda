import { useState, useContext } from "react";
import { BiChevronDown, BiFilter } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import {
  IoIosFootball,
  IoIosBaseball,
  IoIosAmericanFootball,
  IoIosBasketball,
} from "react-icons/io";

import MLB from "../../assets/leagues/MLB.png";
import NBA from "../../assets/leagues/NBA.png";
import NFL from "../../assets/leagues/NFL.png";
import WNBA from "../../assets/leagues/WNBA.png";
import MiLB from "../../assets/leagues/MiLB.png";
import NCAA from "../../assets/leagues/NCAA.png";
import Context from "../../utils/context";
import "./filterbar.scss";

const Filterbar = (props) => {
  const { setFilter } = props;
  const [openFilters, setOpenFilters] = useState([]);
  const { filterBarOpen, setFilterBarOpen } = useContext(Context);

  const handleFilter = (filter, value) => {
    setFilter(filter, value);
    setFilterBarOpen(false);
  };

  const handleOpenFiltersSwitch = (section) => {
    let newOpenFilters = [...openFilters];

    if (openFilters.includes(section))
      setOpenFilters(newOpenFilters.filter((item) => item !== section));
    else setOpenFilters([...openFilters, section]);
  };

  return (
    <aside id="filter-bar" className={!filterBarOpen && "closed"}>
      <div className="filter-header">
        <h3>Filtros</h3>
        <BiFilter size={24} onClick={() => setFilterBarOpen(!filterBarOpen)} />
      </div>
      <ul>
        <li className="filter-section">
          <div
            className="filter-section-header"
            onClick={() => handleFilter(null, null)}
          >
            <h4>Ver todo</h4>
          </div>
        </li>
        <li className="filter-section">
          <div
            className="filter-section-header"
            onClick={() => handleFilter("label", "Sale")}
          >
            <h4>Ofertas</h4>
          </div>
        </li>
        <li
          className={`filter-section ${
            openFilters.includes("styles") ? "open" : ""
          }`}
        >
          <div
            className="filter-section-header"
            onClick={() => handleOpenFiltersSwitch("styles")}
          >
            <h4>Siluetas</h4>
            <BiChevronDown
              className={openFilters.includes("styles") && "open"}
              size={20}
            />
          </div>
          <ul className="filter-section-content">
            <li onClick={() => handleFilter("style", "59FIFTY")}>59FIFTY</li>
            <li onClick={() => handleFilter("style", "LOW PROFILE 59FIFTY")}>
              Low Pro 59FIFTY
            </li>
            <li onClick={() => handleFilter("style", "9FIFTY")}>9FIFTY</li>
            <li onClick={() => handleFilter("style", "LOW PROFILE 9FIFTY")}>
              Low Pro 9FIFTY
            </li>
            <li onClick={() => handleFilter("style", "39THIRTY")}>39THRITY</li>
            <li onClick={() => handleFilter("style", "9FORTY")}>9FORTY</li>
            <li onClick={() => handleFilter("style", "9TWENTY")}>9TWENTY</li>
            <li onClick={() => handleFilter("style", "CASUAL CLASSIC")}>
              Casual Classic
            </li>
          </ul>
        </li>
        <li
          className={`filter-section ${
            openFilters.includes("leagues") ? "open" : ""
          }`}
        >
          <div
            className="filter-section-header"
            onClick={() => handleOpenFiltersSwitch("leagues")}
          >
            <h4>Deporte</h4>
            <BiChevronDown
              className={openFilters.includes("leagues") && "open"}
              size={20}
            />
          </div>
          <ul className="filter-section-content">
            <li onClick={() => handleFilter("sport", "BASEBALL")}>
              <IoIosBaseball size={20} />
              Baseball
            </li>
            <li onClick={() => handleFilter("sport", "FOOTBALL")}>
              <IoIosAmericanFootball size={20} />
              Fútbol Americano
            </li>
            <li onClick={() => handleFilter("sport", "BASKETBALL")}>
              <IoIosBasketball size={20} />
              Basketball
            </li>
            <li onClick={() => handleFilter("sport", "SOCCER")}>
              <IoIosFootball size={20} />
              Fútbol
            </li>
            <li onClick={() => handleFilter("sport", "RACING")}>
              <FaFlagCheckered size={20} />
              Carreras
            </li>
          </ul>
        </li>
        {/* <li
          className={`filter-section ${
            openFilters.includes("collections") ? "open" : ""
          }`}
        >
          <div
            className="filter-section-header"
            onClick={() => handleOpenFiltersSwitch("collections")}
          >
            <h4>Colecciones</h4>
            <BiChevronDown
              className={openFilters.includes("collections") && "open"}
              size={20}
            />
          </div>
          <ul></ul>
        </li> */}
        <li
          className={`filter-section ${
            openFilters.includes("types") ? "open" : ""
          }`}
        >
          <div
            className="filter-section-header"
            onClick={() => handleOpenFiltersSwitch("types")}
          >
            <h4>Ligas</h4>
            <BiChevronDown
              className={openFilters.includes("types") && "open"}
              size={20}
            />
          </div>
          <ul className="filter-section-content">
            <li onClick={() => handleFilter("league", "MLB PROPERTIES")}>
              <img src={MLB} alt="MLB" />
              MLB
            </li>
            <li onClick={() => handleFilter("league", "NFL PROPERTIES")}>
              <img src={NFL} alt="NFL" />
              NFL
            </li>
            <li onClick={() => handleFilter("league", "NBA PROPERTIES")}>
              <img src={NBA} alt="NBA" />
              NBA
            </li>
            <li onClick={() => handleFilter("league", "COLLEGIATE LICENSING")}>
              <img src={NCAA} alt="NCAA" />
              Universitario
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Filterbar;
