import React,{ useContext,useState } from "react";
import { Box,Button,Divider } from "@mui/material";
import { ArticleContext } from "./ArticleProvider";

const AnnotationWindow = () => {
    const { article, setArticle, TagState, setTag } = useContext(ArticleContext);

    
    const [personList, setPersonList] = useState([])
    const [orgList, setOrgList] = useState([])


    const highlightText = (e) => {
        e.target.style.background = 'yellow';

        if(TagState == "person")
        {
            var persons = personList
            persons.push(window.getSelection().toString())
            setPersonList(persons)

            setArticle({
                ...article,
                persons: personList,
              });
        }
        else if(TagState == "org")
        {
            var orgs = orgList
            orgs.push(window.getSelection().toString())
            setOrgList(orgs)

            setArticle({
                ...article,
                orgs: orgList,
              });
        }
    };
    
    const myHTML = `<h1>John Doe</h1>`;

    return(
        <Box>
            <Button 
                variant= {TagState == "person" ? "contained" : "outlined"} 
                onClick={() => {setTag("person")}}>
                    Person
            </Button>

            <Button 
                variant= {TagState == "org"? "contained" : "outlined"}
                onClick={() => {setTag("org")}}>
                    Org
            </Button>

        <Divider />
            
            <div onMouseUp={highlightText}>
                {article.description}
            </div>
            <div dangerouslySetInnerHTML={{ __html: myHTML }} />
        </Box>
    );
};

export default AnnotationWindow;