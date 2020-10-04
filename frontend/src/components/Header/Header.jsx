import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
        <Button variant="outlined" color="primary" onClick={props.handleLoginToggle} >
        Login
      </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
