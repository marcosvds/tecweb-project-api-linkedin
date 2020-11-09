import React, { createContext } from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
    handleProfile,
    handleLocation,
    handleLanguage,
    handlePositionGroups,
    handleEducation,
    handleSkills,
    handleRefresh,
    handleTreasuryMedia,
    handleCompany,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
        handleProfile,
        handleLocation,
        handleLanguage,
        handlePositionGroups,
        handleEducation,
        handleSkills,
        handleRefresh,
        handleTreasuryMedia,
        handleCompany,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
