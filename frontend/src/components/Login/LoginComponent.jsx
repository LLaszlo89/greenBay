import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/usersAction";
import ApiReq from "../../apiRequest";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #52b202 10%, #91ff35 90%)",
    color: "white",
    fontSize: 20,
    fontFamily: "georgia",
  },
  floatingLabelFocusStyle: {
    color: "#52b202"
}
});
const apiReq = new ApiReq();

const Login = (props) => {
  const classes = useStyles();
  const initialState = {
    username: "",
    password: "",
  };

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(initialState);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

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

    const data = await apiReq.sendHttpRequest( "POST", `http://localhost:3000/api/session`, values);
    if (data.message) {
      setErrorMessage(data.message);
      setError(true);
    } else {
      props.setUser(data);
      props.history.push("/shop");
     // window.location.reload()
    }
  };

  return (
    <div>
      <Typography variant="h4" align={"center"}>
        Welcome to the coolest web shop on the planet earth , to enjoy all the
        benefits please log in
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
      <Dialog open={open} onClose={handleLoginToggle} className={classes.root} fullWidth>
        <DialogTitle id="form-dialog-title">
          Please enter your login details:{" "}
        </DialogTitle>
        <Typography align="center" variant="h4" color="error">
          {errorMessage}
        </Typography>
        <DialogContent>
          <TextField
            placeholder="Enter Your Name"
            label="Name"
            InputLabelProps={{className: classes.floatingLabelFocusStyle}}
            floatingLabelFocusStyle= {{className: classes.floatingLabelFocusStyle}}
            name="username" 
            value={values.name}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            error={error}
          />
          <br />
          <TextField
            placeholder="Enter Your Password"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            InputLabelProps={{className: classes.floatingLabelFocusStyle}}
            floatingLabelFocusStyle= {{className: classes.floatingLabelFocusStyle}}
            margin="normal"
            fullWidth
            error={error}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUser(data))
  };
};

export default connect(null, mapDispatchToProps)(Login);
