import React, { createContext, useState } from "react";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {

  const [article, setArticle] = useState({
    // edition: "",
    track: "",
    name: "",
    description: "",
    image: null,
    banner_image: null,
    // section: "",
    tags: "",
    category: "",
    home_page_display : null,
  });

  const [content, setContent] = useState("")

  return (
    <ArticleContext.Provider value={{article, setArticle, content, setContent}}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };