"use client"
import { Box, Button, Checkbox, Container, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';




function LoginPage() {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }





  return (
    <>
      Login Page
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5em'
        }}>
        <Box
          sx={{
            paddingBottom: '1em',
          }}>
          Already have a account?
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap:'1em',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '25%',
              border: 'solid',
              borderRadius: '20px',
              padding: '1.5em',
              gap: '2em',

            }}>
            <TextField
              label='Username '
              fullWidth
              margin="normal"
              autoComplete="email"
              id='email'
              name="email"
              color='secondary'
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password" color='secondary'>Password</InputLabel>
              <OutlinedInput
              color='secondary'
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon color='secondary'/> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant='contained'
              sx={{
                width: '50%'
              }}

            > Login 🔐 </Button>
          </Box>
          <Box>
            New User?   
            <Link href='./register' color='#ffff00'> Login Here</Link>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage