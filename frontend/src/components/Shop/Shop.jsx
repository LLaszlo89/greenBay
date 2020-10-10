import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../Content/Content";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { findItem } from "../../redux/actions/itemsActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

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

  if (window.location.href.substr(-2) !== "?r") {
    window.location = window.location.href + "?r";
  }

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
    handleLoginToggle();

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
              className={classes.button}
              type="submit"
              onClick={handleSubmit}
              variant="outlined"
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
        {status}
      </Dialog>
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
