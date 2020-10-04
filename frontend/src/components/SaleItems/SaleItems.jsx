import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

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
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container spacing={2} direction="column" justify="center" alignItems="center"  >
          <Grid item >
            <TextField
              id="outlined-title-input"
              label="Title"
              type="title"
              autoComplete="current-title"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-url-input"
              label="URL"
              type="url"
              autoComplete="current-url"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-price"
              label="Price"
              type="price"
              variant="outlined"
            />
          </Grid>
          <TextField
            id="outlined-description-input"
            label="Description"
            type="description"
            autoComplete="current-description"
            variant="outlined"
          />
          <Button  variant="contained" color="primary">Save item</Button>
        </Grid>
      </div>
    </form>
  );
};

export default SaleItems;
