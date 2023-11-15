import React, { createContext, useContext, useState } from 'react';

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState([]);

  // Function to update combined data
  const updateCombinedData = (data) => {
    setCombinedData((prevData) => [...prevData, data]);
  };

  return (
    <DataContext.Provider value={{ combinedData, updateCombinedData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};

export default DataContext;
