import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors.js";

const SearchBox = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div>
      <h2 className={css.titleSearch}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default SearchBox;
