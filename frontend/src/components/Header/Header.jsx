import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/usersAction";

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
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    borderStyle: "solid",
    marginRight: "20px",
  },
});

const Header = (props) => {
  const classes = useStyles();
  const { username, cash, pic } = props.user;


  const handelLogout = () => {
    props.logoutUser();
  };

  const isLoggedIn = username ? (
    <div>
      <AppBar
        data-test="headersComponent"
        position="static"
        className={classes.root}
      >
        <Toolbar>
          <Grid container spacing={1} justify="space-between">
            <Grid item container direction="row" alignContent="center">
              <CardMedia className={classes.img} component="img" image={pic} />
              <Grid item>
                <Typography variant="h6">{username}</Typography>
                <Typography variant="h6">
                  {cash && cash + " green_$"}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Link className={classes.link} to="/create">
            Sale you item
          </Link>

          <Button
            className={classes.button}
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
      <AppBar
        data-test="headersComponentOnEmpty"
        className={classes.root}
        position="static"
      >
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );

  return <div>{isLoggedIn}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
