import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";

import {
  MLB_URL,
  NFL_URL,
  NBA_URL,
  MILB_URL,
  WNBA_URL,
  COLLEGE_URL,
  SOCCER_URL,
  MOTOR_URL,
  HOME_URL,
  FIFTY59_URL,
  LPFIFTY59_URL,
  FIFTY9_URL,
  LPFIFTY9_URL,
  THIRTY39_URL,
  FORTY9_URL,
  TWENTY9_URL,
  CASUAL_URL,
  WOMEN_URL,
  KIDS_URL,
} from "../../utils/consts";
import MLB from "../../assets/leagues/MLB.png";
import NBA from "../../assets/leagues/NBA.png";
import NFL from "../../assets/leagues/NFL.png";
import WNBA from "../../assets/leagues/WNBA.png";
import MiLB from "../../assets/leagues/MiLB.png";
import NCAA from "../../assets/leagues/NCAA.png";
import "./filterbar.scss";

const Filterbar = (props) => {
  const { setCollection } = props;
  const [openFilters, setOpenFilters] = useState([]);

  const handleOpenFiltersSwitch = (section) => {
    let newOpenFilters = [...openFilters];

    if (openFilters.includes(section))
      setOpenFilters(newOpenFilters.filter((item) => item !== section));
    else setOpenFilters([...openFilters, section]);
  };

  return (
    <aside id="filter-bar">
      <h3>Filtros</h3>
      <ul>
        <li
          className={`filter-section ${
            openFilters.includes("leagues") ? "open" : ""
          }`}
        >
          <div
            className="filter-section-header"
            onClick={() => handleOpenFiltersSwitch("leagues")}
          >
            <h4>Ligas</h4>
            <BiChevronDown
              className={openFilters.includes("leagues") && "open"}
              size={20}
            />
          </div>
          <ul className="filter-section-content">
            <li onClick={() => setCollection(HOME_URL)}>Ver Todo</li>
            <li onClick={() => setCollection(MLB_URL)}>
              <img src={MLB} alt="MLB" />
              MLB
            </li>
            <li onClick={() => setCollection(NFL_URL)}>
              <img src={NFL} alt="NFL" />
              NFL
            </li>
            <li onClick={() => setCollection(NBA_URL)}>
              <img src={NBA} alt="NBA" />
              NBA
            </li>
            <li onClick={() => setCollection(WNBA_URL)}>
              <img src={WNBA} alt="WNBA" />
              WNBA
            </li>
            <li onClick={() => setCollection(MILB_URL)}>
              <img src={MiLB} alt="MiLB" />
              MiLB
            </li>
            <li onClick={() => setCollection(COLLEGE_URL)}>
              <img src={NCAA} alt="NCAA" />
              College
            </li>
            <li onClick={() => setCollection(SOCCER_URL)}>
              <IoIosFootball size={20} />
              Soccer
            </li>
            <li onClick={() => setCollection(MOTOR_URL)}>
              <FaFlagCheckered size={20} />
              Motorsport
            </li>
          </ul>
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
            <li onClick={() => setCollection(HOME_URL)}>Ver Todo</li>
            <li onClick={() => setCollection(FIFTY59_URL)}>59FIFTY</li>
            <li onClick={() => setCollection(LPFIFTY59_URL)}>
              Low Pro 59FIFTY
            </li>
            <li onClick={() => setCollection(FIFTY9_URL)}>9FIFTY</li>
            <li onClick={() => setCollection(LPFIFTY9_URL)}>Low Pro 9FIFTY</li>
            <li onClick={() => setCollection(THIRTY39_URL)}>39THRITY</li>
            <li onClick={() => setCollection(FORTY9_URL)}>9FORTY</li>
            <li onClick={() => setCollection(TWENTY9_URL)}>9TWENTY</li>
            <li onClick={() => setCollection(CASUAL_URL)}>Casual Classic</li>
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
            <h4>Tipo</h4>
            <BiChevronDown
              className={openFilters.includes("types") && "open"}
              size={20}
            />
          </div>
          <ul className="filter-section-content">
            <li onClick={() => setCollection(HOME_URL)}>Ver Todo</li>
            <li onClick={() => setCollection(WOMEN_URL)}>Mujer</li>
            <li onClick={() => setCollection(KIDS_URL)}>Niños</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Filterbar;
