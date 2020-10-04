import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../Content/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SaleItems = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-search"
            label="Search item"
            type="search"
            variant="outlined"
          />
        </div>
      </form>
      <Content />
    </div>
  );
};

export default SaleItems;
