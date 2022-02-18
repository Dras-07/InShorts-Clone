import { AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
const useStyles = makeStyles({
    header:{
background:'#FFFFFF',
height:70,   //percentage

    },
    logo:{
        height:55,
        margin:'auto',
    },
    menu:{
        color:'#000000',
    }
    
});


const Header=()=>{
    const classes=useStyles();
    const url='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
    return(
      <AppBar className={classes.header}>
          <Toolbar>
             <Menu className={classes.menu} />
             <img src={url} className={classes.logo} alt='logo'/>
          </Toolbar>
      </AppBar>
    )
}

export default Header;