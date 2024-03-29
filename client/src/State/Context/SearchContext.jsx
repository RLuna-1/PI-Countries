import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../State/Actions";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state);

  const handleSearchInputChange = (e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value);
    dispatch(setFilters({...filters, name: e.target.value, page: 1}))
  };

  const handleSearchInputReset = () => {
    setSearchInput("");
  };

  const value = {
    searchInput,
    handleSearchInputChange,
    handleSearchInputReset,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
