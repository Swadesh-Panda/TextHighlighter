import React, { createContext, useState } from "react";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {

  const [articleList, SetArticleList] = useState([]);

  const [article, setArticle] = useState({
    name: "",
    description: "",
    persons: [],
    orgs: [],
  });

  const [TagState, setTag] = useState("person");

  return (
    <ArticleContext.Provider value={{article, setArticle, TagState, setTag,articleList, SetArticleList}}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };