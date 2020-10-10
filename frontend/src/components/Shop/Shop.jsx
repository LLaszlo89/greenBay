import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../Content/Content";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> new_feat
import Grid from "@material-ui/core/Grid";
import { findItem } from "../../redux/actions/itemsActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
<<<<<<< HEAD

=======
>>>>>>> new_feat

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "#52b202",
    },
  },
  button: {
    color: "#52b202",
    fontFamily: "georgia",
  },
}));

const SaleItems = (props) => {
  const [values, setValues] = useState("");
  const [open, setOpen] = useState(false);

<<<<<<< HEAD
=======
  if (window.location.href.substr(-2) !== "?r") {
    window.location = window.location.href + "?r";
  }

>>>>>>> new_feat
  const handleLoginToggle = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setValues(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchId(values);
<<<<<<< HEAD
    handleLoginToggle()
=======
    handleLoginToggle();

>>>>>>> new_feat
  };
  const classes = useStyles();
  const { id ,  user_name,  title,  description ,  URL ,price,  forSale,  soldTo } = props.specId;
console.log( "ID number :"+ id ,"seller :"+  user_name, "title :"+ title, "description :"+ description , "picture :" + URL , "Price :"+price+" $",  "Sold to :"+ soldTo)

  const status = props.notFound ? (
    <div>
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid>
          <Typography align="center" variant="h6" color="error" >
            {props.notFound.message}
          </Typography>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>
      <Grid key={props.specId.id}  container direction="row" justify="center" alignContent="center">
        <Grid>
          <CardMedia
            component="img"
            style={{ maxWidth: "150px", borderRadius: "10px" }}
            image={props.specId.URL}
          />
        </Grid>
        <Grid>
          <Typography align="center" variant="h4">
            {"Title :" + props.specId.title}
          </Typography>
        </Grid>
      </Grid>
      <Typography align="center" variant="h6">
        {`ID number : ${props.specId.id} , SELLER :  ${props.specId.user_name} `}
      </Typography>
      <Typography align="center">{"DESCRIPTION :" + props.specId.description}</Typography>
      <Typography align="right">{`PRICE : ${props.specId.price} $, Sold to : ${props.specId.soldTo}`}</Typography>
    </div>
  );


  return (

    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Grid container direction="row" alignContent="center">
            <TextField
              placeholder="Enter Id "
              id="outlined-search"
              label="Search item"
              type="search"
              name="search"
              variant="outlined"
              onChange={handleInputChange}
            />
            <Button
<<<<<<< HEAD
              color="primary"
              type="submit"
              onClick={handleSubmit}
              variant="outlined"
              size="small"
=======
              className={classes.button}
              type="submit"
              onClick={handleSubmit}
              variant="outlined"
>>>>>>> new_feat
            >
              Search
            </Button>
          </Grid>
        </div>
      </form>
      <Dialog open={open} onClose={handleLoginToggle} fullWidth>
        <DialogTitle id="form-dialog-title">
          Information about the requested item:{" "}
        </DialogTitle>
<<<<<<< HEAD
        <Grid container direction="row" justify="center" alignContent="center"  >
        <Grid>
        <CardMedia  component="img"  style={{ maxWidth: "150px", borderRadius: "10px" }}  image={URL}/>
        </Grid>
        <Grid>
        <Typography align="center" variant="h4" >{ "Title :"+ title}</Typography>
        </Grid>

        </Grid>
        <Typography align="center" variant="h6" >
        { `ID number : ${id} , SELLER :  ${user_name} `}</Typography>
        <Typography align="center" >{"DESCRIPTION :"+ description }</Typography>
        <Typography align="right" >{ `PRICE : ${price} $, Sold to : ${soldTo}` }</Typography>
      </Dialog>

=======
        {status}
      </Dialog>
>>>>>>> new_feat
      <Content />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    specId: state.items.spec_id ,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchId: (id) => dispatch(findItem(id)),
  };
};

<<<<<<< HEAD
export default connect( mapStateToProps , mapDispatchToProps)(SaleItems);
=======
const mapStateToProps = (state) => {
  return {
    specId: state.items.spec_id,
    notFound: state.items.err_message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchId: (id) => dispatch(findItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleItems);
>>>>>>> new_feat
