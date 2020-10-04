import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";


const ItemCard = props => {
  const {  title, price, description, imageUrl } = props;
  return (
    <Grid container   justify="space-around"
    alignItems="center"  >
  
    <Card style={ {height:"250" , width: "300px"}}>
      <CardHeader
        title={title}
        subheader={price}
      />
      <CardMedia style={{ height: "200px" }} image={imageUrl} />  
      <CardContent>
        <Typography variant="body2" component="p" >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default ItemCard;
