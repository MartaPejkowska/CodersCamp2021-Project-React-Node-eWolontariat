import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import MainProfile from './MainProfile';
import AllVolunteers from './AllVolunteers';
import AllTasks from './AllTasks';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7A82',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4DAF7B',
      contrastText: '#fff'
    },
    default:{
      main: '#868AE0',
    }
  },
  typography:{
    fontFamily: "'Quicksand', sans-serif", 
    h4: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 2
    },
    h5:{
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 2
    },
    h6:{
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 4
    }
  }
});




function App() {


  return (
    <ThemeProvider theme={theme}>
      <MainProfile/>
      <AllVolunteers/>
      <AllTasks/>
    </ThemeProvider>
  );
}

export default App;
