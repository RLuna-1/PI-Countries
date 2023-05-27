import React, {useContext} from "react";
import searchimage from "../../Assets/search.svg";
import styles from "./SearchBar.module.css";


import { SearchContext } from "../../State/Context/SearchContext";


const SearchBar = ({ className }) => {

  const { searchInput, handleSearchInputChange } =
  useContext(SearchContext);

  // const [searchInput, setSearchInput] = useState("");

  // const dispatch = useDispatch();
  // const { filters } = useSelector((state) => state);

  // const handleChange = (e) => {

  //   setSearchInput(e.target.value);
  //   dispatch(setFilters({...filters, name: e.target.value}))
  // };



  return (
    <div className={styles.searchBarContainer}>
      <input
        className={className}
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
        value={searchInput}
      ></input>
      <img src={searchimage} alt="Logo" className={styles.searchBarLogo} />
    </div>
  );
};
export default SearchBar;
