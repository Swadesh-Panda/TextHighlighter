import { Grid} from '@mui/material';
import './App.css';
import Records from './components/Records';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Records/>
      </Grid>
    </Grid>
  );
}

export default App;
