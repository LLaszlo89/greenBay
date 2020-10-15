import React , { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardMedia from "@material-ui/core/CardMedia";
import Content from "../Content/Content";
import { findItem } from "../../redux/actions/itemsActions";
import { connect } from "react-redux";
import {CANCEL_ERR_MESSAGE} from '../../redux/actions/actionTypes'


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

  const handleLoginToggle = () => {
    setOpen(!open);
    {props.notFound.message && props.cancel()}
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

  const sellerStatus =  props.specId.soldTo ? "Sold to :" + props.specId.soldTo : " Still Available ! "
  const status = props.notFound  ? (
    <div>
      <Grid container direction="row" justify="center" alignContent="center" >
        <Grid>
          <Typography align="center" variant="h6" color="error">
            {props.notFound.message}
          </Typography>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
      >
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
      <Typography align="center">
        {"DESCRIPTION :" + props.specId.description}
      </Typography>
      <Typography style={{ marginRight:"25px"}} align="right">{`PRICE : ${props.specId.price} $, ${sellerStatus}`}</Typography>
    </div>
  );
console.log("This is the mssg in shop after buy" , props.purchase_message)
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
            <Typography align="center" variant="h6">
            {props.purchase_message}
          </Typography>
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
    specId: state.items.spec_id,
    notFound: state.items.err_message,
    purchase_message: state.items.sold_message
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchId: (id) => dispatch(findItem(id)),
    cancel: () => dispatch({ type : CANCEL_ERR_MESSAGE })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleItems);
