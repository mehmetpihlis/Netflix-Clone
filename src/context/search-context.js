import React from "react";

const searchContext = React.createContext({ searchValue: "", setSearchValue: () => {} });

export default searchContext;