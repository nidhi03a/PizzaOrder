import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'

//const preventDefault = (event) => event.preventDefault();
const Login = ({ handleChange }) => {
    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
    const validatePassword = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,14}$');
    const [inputState, setInputState] = useState({
        isError: {
            Email: '',
            Password: ''
        }
    })
    const changeHandle = (event) => {
        event.persist();
        //console.log("Event: ",e);
        let { name, value } = event.target;
        let Error = { ...inputState.isError };
        switch (name) {
            case "Email":
                Error.Email =
                    //  value.length<4?"Atleast 4 charcters required": "";
                    validateEmail.test(value) ? "" : "Wrong Pattern";
                break;
            case "Password":
                Error.Password =
                    //  value.length<4?"Atleast 4 charcters required": "";
                    validatePassword.test(value) ? "" : "Wrong Pattern";
                break;
            default:
                break;
        }
        setInputState({ ...inputState, [name]: value, isError: Error });
        console.log("Input Received: ", inputState);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Received:", inputState);
        const data = new FormData(event.currentTarget);
        console.log({
            Email: data.get('Email'),
            Password: data.get('Password'),
        })
        let user = { email: inputState.Email, password: inputState.Password }
        console.log("User value: ", user);
        axios.post('https://project-node-1.herokuapp.com/postLoginData', user)
            .then(res => {
                console.log("Axios response: ", res);
                window.localStorage.setItem("Token", res.data.token)
            })
            .catch(err => {
                console.log("Axios error: ", err);
            })
    }
    return (
        <Grid>
            <Paper
                sx={{
                    padding: '100px',
                    height: '73vh',
                    width: 300,
                    margin: "0 auto",

                }}>
                <Grid align="center">
                    <Avatar sx={{ backgroundColor: "#1bbd7e" }}><LockOutlinedIcon /></Avatar>
                    <h2> Sign In </h2>
                </Grid>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField variant="standard" label="Username" name="Email" placeholder='Enter Your Email' fullWidth required onChange={changeHandle} />
                    {inputState.isError.Email.length > 0 && (
                        <span>{inputState.isError.Email}</span>
                    )}
                    <TextField variant="standard" label="Password" name="Password" placeholder='Enter Password' type='password' fullWidth required onChange={changeHandle} />
                    {inputState.isError.Password.length > 0 && (
                        <span>{inputState.isError.Password}</span>
                    )}
                    <FormControlLabel sx={{ display: "flex" }}
                        control={
                            <Checkbox
                                color="primary"

                            />
                        }
                        label="Remember me"
                    />
                    <Button variant='contained' type='submit'
                        sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            margin: "8px 0"
                        }} fullWidth
                    >Sign In</Button>
                </Box>
                {/* <Typography>
                    <Link href='#' onClick={preventDefault}>
                        Forgot password ?
                    </Link>
                </Typography> */}
                <Typography> Do you have a account.
                    <Link href='#' onClick={() => handleChange("event", 1)}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
