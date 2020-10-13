import React from "react";
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #52b202 30%, #91ff35 90%)",
    color: "white",
    height: 90,
    padding: "20px, 20px",
  },
  button: {
    color: "white",
    fontSize: 20,
    fontFamily: "georgia",
  },
  img: {
    maxWidth: "60px",
    borderRadius: "10px",
    marginTop: "10px",
  },
  link:{
    textDecoration: "none",
    color :"white" , 
    fontSize:"20px",
    textAlign: "center",
    borderStyle: "solid",
    marginRight : "20px"
  }
});

const Header = () => {
  const classes = useStyles();

  const name = localStorage.getItem("username");
  const picture = localStorage.getItem("picture");
  const cash = localStorage.getItem("cash_balance");

  const handelLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const isLoggedIn = name ? (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container spacing={1} justify="space-between">
            <Grid item container direction="row" alignContent="center">
              <CardMedia
                className={classes.img}
                component="img"
                image={picture}
              />
              <Grid item>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h6">{cash && cash + "$"} </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <NavLink className={classes.link} to="/create"> Sale you item </NavLink>

          <Button
            className={classes.button}
            onClick={() => {
              handelLogout();
            }}
          >
            {" "}
            Logout{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );

  return <div>{isLoggedIn}</div>;
};

export default Header;
