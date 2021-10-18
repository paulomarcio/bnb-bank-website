import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedCheck, setSelectedCheck] = useState(() => {
    return JSON.parse(sessionStorage.getItem('transaction')) || false;
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem('user')) || false;
  });

  return (
    <AppContext.Provider
      value={{
        isMenuActive,
        setIsMenuActive,
        user,
        setUser,
        transactions,
        setTransactions,
        selectedCheck,
        setSelectedCheck,
        filteredTransactions,
        setFilteredTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'You must surround your components with a AppProvider before call useApp',
    );
  }

  return context;
};

export default AppProvider;
