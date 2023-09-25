import React from 'react'
import Header from '../Component/Header'
import { Box, Typography } from '@mui/material'

const Webcode = () => {
  return (
    <>
    <Header title={"Webcode"}/>
    <Box padding={4}>
        <Typography  textAlign={'center'} variant="h4" fontWeight={400} fontFamily={'ubuntu'} color="text.secondary">No Webcode available</Typography>
    </Box>
    </>
  )
}

export default Webcode