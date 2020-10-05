import React, { createContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAqGfJuK_7V797gwLf1Emd9K-BzKYr6XaI",
  authDomain: "user-app-44e10.firebaseapp.com",
  databaseURL: "https://user-app-44e10.firebaseio.com",
  projectId: "user-app-44e10",
  storageBucket: "user-app-44e10.appspot.com",
  messagingSenderId: "24161197699",
  appId: "1:24161197699:web:be60090867e10b9a5985b6",
};

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
