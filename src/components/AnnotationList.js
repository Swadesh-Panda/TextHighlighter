import React, { useContext } from "react";
import { Box, Grid, Button,Divider } from "@mui/material";
import { ArticleContext } from "./ArticleProvider";
import { Close } from "@mui/icons-material";

const AnnotationList = () => {
    const {article, setArticle, TagState, setTag } =  useContext(ArticleContext);

    return(
        <Box>
            <h2>Annotations</h2>

        <Divider />

            {TagState == "person" ?

                article.persons.map( (text) =>
                <Grid container justifyContent="center">
                    <Grid item xs={4}>
                        {text}
                    </Grid>

                    <Grid item xs={4}>
                        person
                    </Grid>

                    <Grid item xs={4}>
                        <Button variant="Text">
                            <Close />
                        </Button>
                    </Grid>
                </Grid>
                )

                :

                article.orgs.map( (text) =>
                <Grid container justifyContent="center">
                    <Grid item xs={4}>
                        {text}
                    </Grid>

                    <Grid item xs={4}>
                        org
                    </Grid>

                    <Grid item xs={4}>
                        <Button variant="Text">
                            <Close />
                        </Button>
                    </Grid>
                </Grid>
                )



            }


            {/* <Grid container justifyContent="center">
                <Grid item xs={4}>
                    {TagState == "person" ? article.persons : article.orgs}
                </Grid>
                
                <Grid item xs={4}>
                    {TagState == "person" ? "person" : "org"}
                </Grid>
                
                <Grid item xs={4}>
                    <Button variant="Text">
                        <Close />
                    </Button>
                </Grid>

            </Grid> */}
        </Box>
    );
};

export default AnnotationList;