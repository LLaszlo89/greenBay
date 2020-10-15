import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/usersAction";
import { downloadItemsToStore } from "../../redux/actions/itemsActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #52b202 10%, #91ff35 90%)",
    color: "white",
    fontSize: 20,
    fontFamily: "georgia",
  },
  floatingLabelFocusStyle: {
    color: "#52b202",
  },
});

const Login = (props) => {
  const classes = useStyles();
  const initialState = {
    username: "",
    password: "",
  };

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(initialState);

  const handleLoginToggle = () => {
    setOpen(!open);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    await props.setUserSession(values);
    await props.setItems();
    verify();
  };
  const verify = () => {
    const token = localStorage.getItem("token");
    token && props.history.push("/shop");
  };

  return (
    <div style={{ backgroundImage: "https://uploads-ssl.webflow.com/598435743262c800013158eb/598c28e3153f320001974cdf_green_fox_logo_full.svg"}} >
      <Typography variant="h4" align={"center"} style={{marginTop:'120px'}}  >
        Welcome to the coolest web shop on the planet earth!
      </Typography>
      <Typography variant="h6" align={"center"}>
        To enjoy all its benefits please log in!
      </Typography>
      <Typography align={"center"}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleLoginToggle}
        >
          Login
        </Button>
      </Typography>
      <Dialog
        open={open}
        onClose={handleLoginToggle}
        className={classes.root}
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          Please enter your login details:{" "}
        </DialogTitle>
        <Typography align="center" variant="h4" color="error">
          {props.db_message && props.db_message}
        </Typography>
        <DialogContent>
          <TextField
            placeholder="Enter Your Name"
            label="Name"
            InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
            floatingLabelFocusStyle={{
              className: classes.floatingLabelFocusStyle,
            }}
            name="username"
            value={values.name}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            error={props.db_message && true}
          />
          <br />
          <TextField
            placeholder="Enter Your Password"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
            floatingLabelFocusStyle={{
              className: classes.floatingLabelFocusStyle,
            }}
            margin="normal"
            fullWidth
            error={props.db_message && true}
          />
          <br />
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            onClick={onSubmit}
          >
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    db_message: state.users.error_message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserSession: (values) => dispatch(setUser(values)),
    setItems: (values) => dispatch(downloadItemsToStore(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
