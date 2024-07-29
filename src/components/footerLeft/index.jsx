import { Box, Typography } from '@mui/material'
import React from 'react'
import blogo from '../../assets/blogo.png'
import google from '../../assets/google.png'

const FooterLeft = () => {
  return (
    <Box width="30%"  gap={4} display='flex' flexDirection='column' color='#AEB4BE'>
      <img height='60px' width='150px' src={blogo} alt=''/>
      <Typography variant='p'>
      A shopping website is an online platform where users can browse and purchase products or services. It usually includes features like product categories, search options, secure payments, and customer reviews to assist in the buying process.
      </Typography>
      <img src={google} alt=''/>
    </Box>
  )
}

export default FooterLeft
