import React,{ useContext,useState } from "react";
import { Box,Button } from "@mui/material";
import { ArticleContext } from "./ArticleProvider";

const AnnotationWindow = () => {
    const { article, setArticle, buttonState, setVariant } = useContext(ArticleContext);

    const highlightText = () => {

        if(buttonState == "person")
        {
            setArticle({
                ...article,
                persons: window.getSelection().toString(),
              });
        }
        else if(buttonState == "org")
        {
            setArticle({
                ...article,
                orgs: window.getSelection().toString(),
              });
        }
    };

    return(
        <Box>
            <Button 
                variant= {buttonState == "person" ? "contained" : "outlined"} 
                onClick={() => {setVariant("person")}}>
                    Person
            </Button>

            <Button 
                variant= {buttonState == "org"? "contained" : "outlined"}
                onClick={() => {setVariant("org")}}>
                    Org
            </Button>
            
            <div onMouseUp={highlightText}>
                {article.description}
            </div>
        </Box>
    );
};

export default AnnotationWindow;