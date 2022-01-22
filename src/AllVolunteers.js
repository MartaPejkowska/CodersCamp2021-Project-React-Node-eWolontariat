import './App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    btn:{
      marginBottom: 20, 
      paddingRight: 30,
      paddingLeft:30,
      maxHeight:30,
      fontWeight: 700,
      marginLeft:20
     },
     btnLong:{
        paddingLeft:100,
        paddingRight:100,
     },
    text:{
      color: '#868686',
    },
    icon:{
      fontSize: 130,
    }
  }) 

function AllVolunteers() {

    
    const classes = useStyles();

    return(
        <div className='main'>
            <Typography variant='h4'>Wolontariusze</Typography>
            <Typography variant='h6' className={classes.text}>Popularne kategorie</Typography>
            <div className='button'>
                <Button  className={classes.btn} variant="contained" color="secondary" startIcon={<ListAltIcon/>}>Excel</Button>
                <Button  className={classes.btn} variant="contained" color='primary' startIcon={<ChildFriendlyIcon/>}>Opieka nad dziećmi</Button>
                <Button  className={classes.btn} variant="contained" color="secondary" startIcon={<SchoolIcon/>}>Korepetycje</Button>
                <Button  className={classes.btn} variant="contained" color='primary' startIcon={<ComputerIcon/>}>Strony www</Button>
                <Button  className={classes.btn} variant="contained" color="secondary" startIcon={<LanguageIcon/>}>Tłumaczenia</Button>
            </div>
            <div className='flex'>
                <Typography variant='h5'>Wybierz wg kategorii:</Typography>
                <Button className={classes.btn} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Kliknij, aby rozwinąć</Button>
            </div>
            <div className='grid'>
                <div className='label'>[name]</div>
                <div className='label'>[name]</div>
                <div className='label'>[name]</div>
                <div className='label'>[name]</div>
                <div className='label'>[name]</div>
                <div className='label'>[name]</div>
            </div>
            <div className='center'>
                <Button className={classes.btnLong} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </div>
        </div>
    )
}

export default AllVolunteers;