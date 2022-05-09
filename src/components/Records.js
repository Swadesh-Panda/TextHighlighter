import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Records = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
    };
  
    return (
      <Box>
          
      <input
        type="file"
        className="custom-file-input"
        id="customFile"
        accept="text/plain"
      />
      <label className="custom-file-label" htmlFor="customFile">
        Upload Text
      </label>
        <Divider />
        <List component="nav" aria-label="">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Item0" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Item1" />
          </ListItemButton>
        </List>
      </Box>
    );
};

export default Records;