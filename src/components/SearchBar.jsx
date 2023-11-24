import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
  }
  return (
    <Paper component={'form'} onSubmit={handleSubmit} sx={{borderRadius: 20, pl:2, boxShadow: "none", mr: {sm: 5} }}  >
      <input type="text" value={search} onChange={(e)=> {setSearch(e.target.value)}} placeholder='Search...' className='search-bar' />
      <IconButton type='submit' sx={{p: '10px' , color:"red"}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
