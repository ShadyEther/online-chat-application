import { Container, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link } from '@mui/material'
import React from 'react'

function RegisterPage() {
  return (
    <>
    ogin Page
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
          This is for the New User Registration
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
            <TextField
              label='Password '
              fullWidth
              margin="normal"
              
              id='password'
              name="password"
              color='secondary'
            />
            <TextField
              label='Confirm Password '
              fullWidth
              margin="normal"
              id='consfirmPassword'
              name="consfirmPassword"
              color='secondary'
            />
            
            <Button variant='contained'
              sx={{
                width: '50%'
              }}

            > Register 📑 </Button>
          </Box>
          <Box>
            Already Registered Before?  
            <Link href='./login' color='#ffff00'> Login Here</Link>
          </Box>
        </Box>
      </Container>

    
    </>
  )
}

export default RegisterPage