import { Avatar, Badge, Box, Typography } from '@mui/material'
import React from 'react'


const items=['yeah','oh','baby']

function ChatHistoryComponent() {
  return (
    <>
    <Box sx={{
        width:'50%'
    }}>
        <Box>
            <Typography>Chats</Typography>
        </Box>
        {
            items.map((item)=>{
                return(
                    // <div key={item}>
                    //     {item}
                    // </div>

                    <>
                    <Box sx={{
                        display:'flex',
                        // justifyContent:'space-between',
                        gap:'1em',
                        margin:'1em',
                    }}>
                        <Avatar/>

                        <Box>
                        <Typography>{item}</Typography>
                        <Typography>Last Message</Typography>
                        </Box>

                        <Box>
                            <Typography color='secondary'>1:00am</Typography>
                            <Badge badgeContent='12' color='secondary' sx={{
                                float:'inline-end',
                                margin:'1em',
                            }}></Badge>
                        </Box>

                    </Box>
                    
                    </>
                )
            })
            
                
            
        }
    </Box>
    
    
    
    </>
  )
}

export default ChatHistoryComponent