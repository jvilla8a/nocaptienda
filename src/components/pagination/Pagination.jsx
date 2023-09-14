import {
  BiChevronsLeft,
  BiChevronLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { calculateURL } from "../../utils";
import "./pagination.scss";

const Pager = (props) => {
  const { lastPage, setPage, page } = props;
  const navigate = useNavigate();

  const handleClick = (newPage) => {
    const newURL = calculateURL(newPage);
    navigate(newURL);
    setPage(newPage);
  };

  return (
    <section className="pagination">
      {lastPage > 1 && (
        <ul>
          <li onClick={() => page !== 1 && handleClick(1)}>
            <BiChevronsLeft size={30} />
          </li>
          <li onClick={() => page - 1 > 0 && handleClick(page - 1)}>
            <BiChevronLeft size={30} />
          </li>
          <li onClick={() => page - 2 > 0 && handleClick(page - 2)}>
            {page - 2 > 0 ? page - 2 : ""}
          </li>
          <li onClick={() => page - 1 > 0 && handleClick(page - 1)}>
            {page - 1 > 0 ? page - 1 : ""}
          </li>
          <li className="actual-page">{page}</li>
          <li onClick={() => page + 1 <= lastPage && handleClick(page + 1)}>
            {page + 1 <= lastPage ? page + 1 : ""}
          </li>
          <li onClick={() => page + 2 <= lastPage && handleClick(page + 2)}>
            {page + 2 <= lastPage ? page + 2 : ""}
          </li>
          <li onClick={() => page + 1 <= lastPage && handleClick(page + 1)}>
            <BiChevronRight size={30} />
          </li>
          <li onClick={() => page !== lastPage && handleClick(lastPage)}>
            <BiChevronsRight size={30} />
          </li>
        </ul>
      )}
    </section>
  );
};

export default Pager;
