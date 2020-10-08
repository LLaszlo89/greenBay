import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../Content/Content";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
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
    },
  },
}));

const SaleItems = (props) => {
  const [values, setValues] = useState("");
  const [open, setOpen] = useState(false);

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
    handleLoginToggle()
  };
  const classes = useStyles();
  const { id ,  user_name,  title,  description ,  URL ,price,  forSale,  soldTo } = props.specId;
console.log( "ID number :"+ id ,"seller :"+  user_name, "title :"+ title, "description :"+ description , "picture :" + URL , "Price :"+price+" $",  "Sold to :"+ soldTo)

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
              color="primary"
              type="submit"
              onClick={handleSubmit}
              variant="outlined"
              size="small"
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

export default connect( mapStateToProps , mapDispatchToProps)(SaleItems);
