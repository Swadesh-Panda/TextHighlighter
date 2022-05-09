import React, { useContext } from "react";
import { Box } from "@mui/system"
import { ArticleContext } from "./ArticleProvider";

const AnnotationList = () => {
    const {article, setArticle} =  useContext(ArticleContext);

    return(
        <Box>
            <h2>Annotations</h2>
            <p>person : {article.persons}</p>
            <p>org : {article.orgs}</p>
        </Box>
    );
};

export default AnnotationList;