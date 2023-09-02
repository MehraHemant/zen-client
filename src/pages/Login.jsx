import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../utils/Images/download.png'
import bg_img from '../utils/Images/home_bg.png'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'

const Login = () => {


    const [data, setData] = useState({email: '', password: ""});
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }


    const login = (email, password) => {
        try {
            fetch("http://localhost:8080/api/login", {
                method: 'POST', mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email": email, 'password': password })
            })
                .then(res => res.json())
                .then(res => {
                    Swal.fire({
                        position: 'center',
                        icon: res.status,
                        title: res.message,
                        showConfirmButton: false,
                        timer: 1000
                    }); localStorage.setItem('auth_token', res.token); <Navigate to="/class" />
                });
        } catch (err) { console.error(err) };
    }

    const handleSubmit =  (e) => {
        e.preventDefault()  
        login(data.email, data.password);
    }

    return (
        <Box boxSizing={'border-box'}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Grid container>
                        <Container>
                            <Typography component='img' height={120} src={logo}></Typography>
                            <Box display='flex' justifyContent='center'>
                                <Box component='form' onSubmit={handleSubmit} maxWidth={420}>
                                    <TextField required color='secondary' type='email' name='email' margin='normal' autoFocus placeholder='Enter Email Address' variant='standard' fullWidth label='Email' onChange={handleChange} value={data.value} />
                                    <TextField required color='secondary' type='password' name='password' margin='normal' placeholder='Enter Password' variant='standard' fullWidth label='Password' onChange={handleChange} value={data.value} />
                                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }} size='large' fullWidth >
                                        Login
                                    </Button>
                                    <Box width={'100%'}>
                                        <Typography component='span' color='secondary' sx={{ cursor: 'pointer' }} mx={'auto'}>Forgot Password ?</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }} position='relative' boxSizing='border-box' height='100vh'>
                    <Box position='absolute' right='0' overflow={'hidden'} height={'100vh'}>
                        <Box component={'img'} height='100vh' src={bg_img}></Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Login