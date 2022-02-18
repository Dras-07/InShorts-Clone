import {Grid, Card, CardContent,makeStyles,Typography} from "@material-ui/core";



const useStyles = makeStyles(theme=>({

    component:{
        marginBottom:20,
        boxShadow:'0px 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 /12%)',
    },
    image:{
        height:260,
        width:'88%',
        borderRadius:5,
        objectFit:'cover',
    },
    goto:{
        color:'#000000',
        fontWeight:'bold',
        textDecoration:'none',
    },
    container:{
        padding:10,
        paddingBottom:'4px!important',
    },
    rightContainer:{
        margin:'5px 0px 0px -25px',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{
            margin:'5px 0px',
    }
},
title:{
    color:'#444444d',
    fontSize:20,
    fontWeight:'590',
    lineHeight:'27px',
},
author:{
    fontSize:12,
    color:'#808290',
    lineHeight:'22px',
},
description:{
    lineHeight:'22px',
    coloe:'#444444d',
    marginTop:5,
},
publisher:{
    color:'#000000',
    marginTop:'auto',
    textDecoration:'none',
    marginBottom:10,
    fontSize:'12px',
    fontWeight:'500',
}
}));
const Article =({article})=>{
    const classes=useStyles();
return(
    <Card className={classes.component}>
        <CardContent className={classes.container}>
          <Grid container>  
            <Grid item lg={5} md={5} sm={5} xs={12}>
                <img src={article.url} alt="image" className={classes.image} />
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
            <Typography className={classes.title}>{article.title}</Typography>
            <Typography className={classes.author}><b style={{color:'#000000'}}>short by</b> by {article.author}/ {new Date(article.timestamp).toDateString()}</Typography>
            <Typography className={classes.description}>{article.description}</Typography>
            <Typography className={classes.publisher}>read more at <a  className={classes.goto} href={article.link} target="_blank">{article.publisher} </a></Typography>
            </Grid>
          </Grid>   
        </CardContent>
    </Card>
)
}



export default Article;