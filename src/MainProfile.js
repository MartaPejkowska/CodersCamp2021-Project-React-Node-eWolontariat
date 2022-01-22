import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import './App.css';

const useStyles = makeStyles({
    btn:{
      marginBottom: 20, 
      paddingRight: 30,
      paddingLeft:30,
      maxHeight:30,
      fontWeight: 700
     },
    text:{
      color: '#868686',
    },
    icon:{
      fontSize: 130,
    }
  })

function MainProfile() {

    const classes = useStyles();
  
    return (
      <div className='container'>
        <div className='sideBarL'>
          <PersonIcon color='primary' className={classes.icon}/>
          <br/>
          <Button className={classes.text}>Edytuj zdjęcie</Button>
        </div>
        <div className='sideBarR'>
          <div className='name'>
            <Typography variant='h4'>[name]</Typography>
            <Button className={classes.btn} variant="contained" color="secondary">Wolontariusz</Button>
            <Button className={classes.btn} variant="outlined">Edytuj profil</Button>
          </div>
          <div className='action'>
            <Typography variant='h5'>Akcje, w których wziąłem udział</Typography>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <Button className={classes.text}>Załaduj więcej</Button>
            <Typography variant='h6' className={classes.text}>Aby dołączyć do jakieś akcji musisz założyć profil wolontariusza</Typography>
        
             <Button className={classes.btn} variant="contained" color="secondary">Zakładam sobie profil wolonratiusza</Button>
        
          </div>
          <div>
            <Typography variant='h5'>Organizacje, do których należę: [number]</Typography>
            <Typography variant='h6' className={classes.text}>[liczba organizacji]</Typography>
            <Button className={classes.btn} variant="contained" color="primary">Tworzę stronę organizacji</Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainProfile;