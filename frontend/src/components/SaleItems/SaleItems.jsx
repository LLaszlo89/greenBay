import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addNewItem } from "../../redux/actions/itemsActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    color: "#52b202",
    fontFamily: "georgia",
  },
  link: {
    textDecoration: "none",
    fontFamily: "georgia",
    fontSize: "20px",
    color: "#006400",
    margin: "15px",
    marginTop: "10px",
    paddingTop: "5px",
  },
}));

const SaleItems = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const initialState = {
    title: "",
    URL: "",
    price: null,
    description: "",
  };

  const [values, setValues] = useState(initialState);
  const [err, setErr] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handlerSubmitForm = async (e) => {
    e.preventDefault();
    const { title, URL, price, description } = values;
    const regex = new RegExp(    );

    if (!title) {
      setErr("All fields are required! Please fill the Title field.");
    } else if (!URL) {
      setErr("All fields are required! Please fill the URL field.");
    } else if (!URL.match(regex)) {
      setErr("Invalid URL");
    } else if (!price) {
      setErr("All fields are required! Please fill the Price field.");
    } else if (Number(price) <= 0) {
      setErr(" Price must be greater than 0 ! ");
    } else if (!description) {
      setErr("All fields are required! Please fill the description field.");
    } else {
      await props.addNew(values);
      history.push("/shop");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <NavLink className={classes.link} to="/shop">
        Go back to the shop
      </NavLink>
      <div>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography color="error" variant="h5" align="center">
            {err}
          </Typography>
          <Grid item>
            <TextField
              id="outlined-title-input"
              label="Title"
              type="title"
              autoComplete="current-title"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-url-input"
              label="URL"
              type="url"
              autoComplete="current-url"
              variant="outlined"
              name="URL"
              value={values.URL}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-price"
              label="Price"
              type="price"
              variant="outlined"
              name="price"
              value={values.price}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <TextField
            id="outlined-description-input"
            label="Description"
            type="description"
            autoComplete="current-description"
            variant="outlined"
            name="description"
            value={values.description}
            onChange={handleInputChange}
            required
          />
          <Button
            variant="outlined"
            onClick={handlerSubmitForm}
            className={classes.button}
          >
            Save item
          </Button>
        </Grid>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (values) => dispatch(addNewItem(values)),
  };
};

export default connect(null, mapDispatchToProps)(SaleItems);
