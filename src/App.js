import { Grid} from '@mui/material';
import './App.css';
import AnnotationList from './components/AnnotationList';
import AnnotationWindow from './components/AnnotationWindow';
import Records from './components/Records';

function App() {
  return (
    <Grid container columnGap={1} sx={{p:5}} justifyContent="center">
      <Grid item xs={2} className="grid-list">
        <Records/>
      </Grid>

      <Grid item xs={6}>
        <AnnotationWindow/>
      </Grid>

      <Grid item xs={3} className="grid-list">
        <AnnotationList/>
      </Grid>
    </Grid>
  );
}

export default App;
