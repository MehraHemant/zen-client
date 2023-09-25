import React from 'react'
import Header from '../Component/Header'
import { Box, Typography } from '@mui/material'

const Capstone = () => {
  return (
    <>
    <Header title={"Capstone"}/>
    <Box padding={4}>
        <Typography  textAlign={'center'} variant="h4" fontWeight={400} fontFamily={'ubuntu'} color="text.secondary">No Capstone available</Typography>
    </Box>
    </>
  )
}

export default Capstone