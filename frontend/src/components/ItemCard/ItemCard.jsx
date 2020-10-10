import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {height:"300px" , width: "350px"},
  img: {height:"100px"},

}));


const ItemCard = props => {
  const classes = useStyles();

  const {  title, price, description, imageUrl } = props;
  return (
    <Grid container justify="space-around"
    alignItems="center"  >
  
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.img} image={imageUrl} />  
      <CardActions>
        <Button size="small">BUY NOW</Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" component="p" >
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
};

export default ItemCard;
