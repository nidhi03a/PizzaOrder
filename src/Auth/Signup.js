import { Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../Components/Stylesheet/Sign.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from 'axios'

const Signup = () => {
    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
    const validatePassword = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,14}$');
    const validateContact = RegExp('^[789][0-9]{10}$');
    const [inputState, setInputState] = useState({
        isError: {
            Username: '',
            Email: '',
            Phone: '',
            Password: '',
            Confirm: ''
        }
    })
    const changeHandle = (event) => {
        event.persist();
        // console.log("Event: ",e);
        let { name, value } = event.target;
        let Error = { ...inputState.isError };
        switch (name) {
            case "Username":
                Error.Username =
                    value.length < 4 ? (value.length > 6 ? "max 6" : "") : "";
                break;
            case "Email":
                Error.Email =
                    //  value.length<4?"Atleast 4 characters required": "";
                    validateEmail.test(value) ? "" : "Wrong Pattern";
                break;
            case "Phone":
                Error.Phone =
                    validateContact.test(value) ? "" : "Enter Valid Number";
                break;
            case "Password":
                Error.Password =
                    //  value.length<4?"Atleast 4 characters required": "";
                    validatePassword.test(value) ? "" : "Wrong Pattern";
                break;
                case "Confirm":
                    Error.Confirm=
                    validatePassword.test(value) ? "" : "Please Confirm Your Password";
                    break;
            default:
                break;
        }
        setInputState({ ...inputState, [name]: value, isError: Error });
        console.log("value: ", inputState);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Received data: ", inputState);
        const data = new FormData(event.currentTarget);
        console.log({
            Email: data.get('Email'),
            Password: data.get('Password'),
        })
        let user = { username: inputState.Username, email: inputState.Email, password: inputState.Password }
        console.log("User value: ", user);
        axios.post('https://project-node-1.herokuapp.com/postUserData', user)
            .then(res => {
                console.log("Axios response: ", res);
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
                    width: 300,
                    margin: "0 auto"
                }}>
                <Grid align="center">
                    <Avatar
                        sx={{
                            backgroundColor: "#1bbd7e"
                        }}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2>Sign up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                </Grid>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField variant="standard" fullWidth label="Name" name="Username" placeholder='Enter Your Name' onChange={changeHandle} />
                    {inputState.isError.Username.length > 0 && (
                        <span>{inputState.isError.Username}</span>
                    )}
                    <TextField variant="standard" fullWidth label="Email" name='Email' placeholder='Enter Your Email' onChange={changeHandle} />
                    {inputState.isError.Email.length > 0 && (
                        <span>{inputState.isError.Email}</span>
                    )}
                    <FormControl sx={{ marginTop: 5 }}>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            sx={{
                                display: 'initial'
                            }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField variant="standard" fullWidth label="Phone Number" name='Phone' placeholder='Enter Your Number' onChange={changeHandle} />
                    {inputState.isError.Phone.length > 0 && (
                        <span>{inputState.isError.Phone}</span>
                    )}
                    <TextField variant="standard" fullWidth label="Password" name='Password' placeholder='Enter Your Password' onChange={changeHandle} />
                    {inputState.isError.Password.length > 0 && (
                        <span>{inputState.isError.Password}</span>
                    )}
                    <TextField variant="standard" fullWidth label="Confirm Password" name='Confirm' placeholder='Confirm Your Password' onChange={changeHandle} />
                    {inputState.isError.Confirm.length > 0 && (
                        <span>{inputState.isError.Confirm}</span>
                    )}
                    <FormControlLabel
                        control={
                            <Checkbox

                                color="primary"
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    <Button type="submit" variant='contained'
                        sx={{ color: "white", backgroundColor: "black", margin: "8px 0" }}>Sign Up</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Signup
