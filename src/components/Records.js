import React,{useContext,useState} from 'react';
import {Box,List,ListItemButton,ListItemText,Divider,Button} from '@mui/material';
import { FileCopy } from "@mui/icons-material";
import { ArticleContext } from './ArticleProvider';

const Records = () => {
    const { article, setArticle ,articleList, SetArticleList } = useContext(ArticleContext);

    const addRecord = e => {
      e.preventDefault()
      
      if(article.name != "")
      {
        var articles = articleList
        articles.push(article)
        SetArticleList(articles)
      }

      const reader = new FileReader()
      reader.onload = async (e) => {
        
        setArticle({
            ...article,
            description: (e.target.result),
            name: (e.target.result).substring(0,20),
          });

      };
      reader.readAsText(e.target.files[0])
    };

    console.log(articleList)
    

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
    };
  
    return (
      <Box>
          <h2>Records
            <input
                type="file"
                className="custom-file-input"
                id="customFile"
                accept="text/plain"
                onChange={addRecord}
                hidden
            />
            <label className="custom-file-label" htmlFor="customFile">
              <Button 
                variant="contained"
                color="primary"
                component="span"> <FileCopy/>
              </Button>
            </label>
          </h2>
    
        
      <Divider />

        <List component="nav" aria-label="">

          {
            articleList.map( (article,index) =>

              <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              >
              <ListItemText primary={(index+1)+". " + article.name + "..."} />
              </ListItemButton>

            )
          }
          
        </List>
      </Box>
    );
};

export default Records;