import React from 'react'
import TabDrawerComponent from '../_components/TabDrawerComponent'
import ChatHistoryComponent from '../_components/ChatHistoryComponent'
import ChatScreenComponent from '../_components/ChatScreenComponent'
import { Container } from '@mui/material'

function LobbyPage() {
  return (
    <>
    <Container
    sx={{
        display:'flex',
    
    }}>

    <TabDrawerComponent/>
    <ChatHistoryComponent/>
    <ChatScreenComponent/>
    </Container>
    </>
  )
}

export default LobbyPage