import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import MainProfile from './pages/MainProfile';
import AllVolunteers from './pages/AllVolunteers';
import AllTasks from './pages/AllTasks';

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
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.5rem',
      paddingBottom: '1rem'
    },
    h5:{
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: '2rem'
    },
    h6:{
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem'
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
