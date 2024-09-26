"use client"
import { AppBar, Avatar, Box, Button, Container, Toolbar, Typography,Link } from '@mui/material'
import { useRouter } from 'next/navigation'

import React from 'react'

function HomePage() {
  const router = useRouter()

  return (
    <>
      <Container>
        <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          padding:'10em',
          gap:'2em'
        }}>

        <Typography variant='h1'>TheJunction</Typography>
        <Typography variant='h1'>📣</Typography>
        <Typography variant='h5'>Want to talk with someone?</Typography>
        <Button variant='contained' onClick={()=>{router.push("./lobby")}}>Get Started</Button>
        <Typography variant='h6' color='yellow'>Made with 🧡 by 
         <Link 
         href={"https://github.com/ShadyEther"} 
         color='cyan'
         underline="hover"
         > ShadyEther and ....</Link>
        </Typography>
        </Box>
      </Container>


    </>
  )
}

export default HomePage