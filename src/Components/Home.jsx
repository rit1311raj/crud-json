
import pihu from '../Assets/Image/pihu.png';
import { Box ,makeStyles, Typography} from '@material-ui/core';
const useStyle= makeStyles({
     image:{
         width: '100%',
     },
     component:{
         margin:30
     },
     text:{
         marginLeft: 20,
         marginBottom: 10
     }
})  
const Home = () =>{
    const classes = useStyle();
    return(
       <Box className={classes.component}>
          <Typography variant='h4' className={classes.text}>Ritik Raj</Typography>
          <img className={classes.image} src={pihu} alt="al"/>
       </Box>
    )
}

export default Home