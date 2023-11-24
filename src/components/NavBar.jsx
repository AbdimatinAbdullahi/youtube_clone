import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../Assests/yt_logo_rgb_dark.png';
import { Link } from 'react-router-dom'
import {SearchBar} from '../components'

const NavBar = () => {
  return (
    <Stack direction='row' p={2} alignItems={'center'} sx={{position:"sticky" , background: "#000", top: 0, justifyContent :"space-between"  }} >
      <Link to="/" style={{display: "flex", alignItems: "center"}} >
        <img src={Logo} alt="Logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default NavBar
