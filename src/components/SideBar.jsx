import React from 'react'
import {categories} from '../utils/constant';
import {Stack } from '@mui/material';



const SideBar = ({selectedCategory, setSelectedCategory}) => {

  return (

    <Stack direction='row' sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}>
      {categories.map((category)=>(
        <button key={category.name} className='category-btn' onClick={()=> setSelectedCategory(category.name)} style={{background: category.name === selectedCategory && '#FC1503', color: "#fff" }}>
            <span style={{color: category.name === selectedCategory ? 'White': 'red', paddingRight: "10px"}} >{category.icon}</span>
            <span style={{opacity: category.name === selectedCategory ? '1': '0.8'}} >{category.name}</span>
        </button>
      ))}
    </Stack>

  )
};

export default SideBar
