import { Grid} from '@mui/material';
import './App.css';
import AnnotationList from './components/AnnotationList';
import AnnotationWindow from './components/AnnotationWindow';
import Records from './components/Records';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Records/>
      </Grid>

      <Grid item xs={6}>
        <AnnotationWindow/>
      </Grid>

      <Grid item xs={3}>
        <AnnotationList/>
      </Grid>
    </Grid>
  );
}

export default App;
