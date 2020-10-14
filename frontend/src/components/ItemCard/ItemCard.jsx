import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { itemSold } from "../../redux/actions/itemsActions";

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
=======
const useStyles = makeStyles(() => ({
>>>>>>> new
  root: { height: "300px", width: "350px" },
  img: { height: "100px" },
  button: {
    color: "#52b202",
    fontFamily: "georgia",
<<<<<<< HEAD
    padding:0
=======
    padding: 0,
>>>>>>> new
  },
}));

const ItemCard = (props) => {
  const classes = useStyles();
  const { id, title, price, description, URL } = props;
<<<<<<< HEAD

  const handelBuy = (id) => {
    itemSold(id);
    window.location.reload();
  };

  return (
    <Grid container justify="space-around" alignItems="center">
      <Card className={classes.root}>
        <CardHeader title={title} subheader={price} />
        <CardMedia className={classes.img} image={URL} />
        <CardActions>
          <Button
          className={classes.button}
=======

  const handelBuy = (id) => {
   itemSold(id);    
  };
  

  return (
    <Grid container justify="space-around" alignItems="center">

      <Card className={classes.root}>
        <CardHeader title={title} subheader={price + " green_$"} />
        <CardMedia className={classes.img} image={URL} />
        <CardActions>
          <Button
            className={classes.button}
>>>>>>> new
            onClick={() => {
              handelBuy(id);
            }}
            size="small"
          >
            BUY NOW
          </Button>
        </CardActions>
        <CardContent>
<<<<<<< HEAD
        <div style={{overflow: "hidden", textOverflow: "ellipsis"}}> 
          <Typography  >
            {description}
          </Typography>

</div>
=======
            <Typography>{description}</Typography>
>>>>>>> new
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemCard;
