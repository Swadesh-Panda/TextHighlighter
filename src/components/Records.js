import React,{useContext} from 'react';
import {Box,List,ListItemButton,ListItemText,Divider} from '@mui/material';
import { ArticleContext } from './ArticleProvider';

const Records = () => {
    const { article, setArticle } = useContext(ArticleContext);


    const addRecord = e => {
      e.preventDefault()
      

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
    
    console.log(article)
    

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
            />
          </h2>
    
        {/* <label className="custom-file-label" htmlFor="customFile">
            Upload Text
        </label> */}
        
        <Divider />

        <List component="nav" aria-label="">

          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary={article.name + " ..."} />
          </ListItemButton>
          
        </List>
      </Box>
    );
};

export default Records;