import React from 'react'
import Header from '../Component/Header'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const Certificate = () => {
  return (
    <>
    <Header title={"Certificate"}/>
    <Box padding={4}>
        <Typography  textAlign={'center'} variant="h4" fontWeight={400} fontFamily={'ubuntu'} color="text.secondary">Your Certificate is not yet Generated.</Typography>
    </Box>
    </>
  )
}

export default Certificate