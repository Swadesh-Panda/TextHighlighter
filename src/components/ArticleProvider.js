import React, { createContext, useState } from "react";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {

  const [article, setArticle] = useState({
    name: "",
    description: "",
    persons: "",
    orgs: "",
  });

  const [buttonState, setVariant] = useState("person");

  return (
    <ArticleContext.Provider value={{article, setArticle, buttonState, setVariant}}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };