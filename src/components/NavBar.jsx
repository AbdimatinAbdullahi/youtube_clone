import React from 'react'
import  { Stack } from '@mui/material'
import Logo from '../Assests/logo.png';
import { Link } from 'react-router-dom'
import {SearchBar} from '../components'

const NavBar = () => {
  return (
    <Stack direction='row' p={2} alignItems={'center'} sx={{position:"sticky" , background: "#000", top: 0, justifyContent :"space-between"}} >
      <div className="navabr">
      <Link to="/" style={{alignItems: "center"}} >
        <div className='logo' >
          <img src={Logo} alt="Logo" height={45} />
         <span className='logo_wr' > Cintube</span></div>
      </Link>
      <SearchBar/>
      </div>
    </Stack>
  )
}

export default NavBar
