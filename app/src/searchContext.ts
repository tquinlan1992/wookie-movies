import React from "react";

const SearchContext = React.createContext<{
  search: string;
  setSearch: (search: string) => void;
}>({ search: "", setSearch: () => {} });

export default SearchContext;
