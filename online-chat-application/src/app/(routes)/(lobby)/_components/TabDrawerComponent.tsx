import { Box, IconButton } from '@mui/material'
import React from 'react'


import ChatIcon from '@mui/icons-material/Chat';


function TabDrawerComponent() {
  return (
    <>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
    }}>
        <IconButton>
            <ChatIcon/>
        </IconButton>
        <IconButton>
            <ChatIcon/>
        </IconButton>
        <IconButton>
            <ChatIcon/>
        </IconButton>

    </Box>
    
    </>
  )
}

export default TabDrawerComponent