import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const Header = () => {
  const name = localStorage.getItem("username");
  const picture = localStorage.getItem("picture");
  const cash = localStorage.getItem("cash_balance");
  
  const handelLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const isLoggedIn = name ? (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1} justify="space-between">
            <Grid item container direction="row" alignContent="center">
              <CardMedia
                component="img"
                style={{ maxWidth: "50px", borderRadius: "10px" }}
                image={picture}
              />
              <Grid item>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h6">{cash && cash + "$"} </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>

          <Button
            style={{ color: "white" }}
            onClick={() => {
              handelLogout();
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );

  return <div>{ isLoggedIn }</div>;
};

export default Header;
