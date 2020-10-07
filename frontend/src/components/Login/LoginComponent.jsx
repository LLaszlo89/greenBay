import React from "react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { downloadItems } from "../../redux/actions/itemsActions";

import sendHttpRequest from "../../apiRequest";

const Login = (props) => {
  const initialState = {
    username: "",
    password: "",
  };

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(initialState);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    console.log("FIRS TIME RENDERED");
  }, []);

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
    const data = await sendHttpRequest(  "POST",  `http://localhost:3000/api/session`,  values );
    if (data.message) {
      setErrorMessage(data.message);
      setError(true);
    } else {
 
      props.download(data)
    }
  };

  return (
    <div>
      <Typography align={"center"}>
        Welcome to the coolest web shop on the planet earth , to enjoy all the
        benefits please log in
      </Typography>
      <Typography align={"center"}>
        <Button variant="outlined" color="primary" onClick={handleLoginToggle}>
          Login
        </Button>
      </Typography>
      <Dialog open={open} onClose={handleLoginToggle} fullWidth>
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
            name="username" // Without it will not update state!!!!!!!!!!!
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
            name="password" //state name so we can use it
            value={values.password}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            error={error}
          />
          <br />
          <Button
            color="primary"
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
    download: (data) => dispatch(downloadItems(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
