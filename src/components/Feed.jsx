import React , {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {SideBar, Videos} from '../components'
import { FetchApi } from '../utils/FetchApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New'); //set seletected category initialy to NEW and pass the state to sidebar component that update the state
  const [videos, setvideos] = useState([]); // Get the videos from the fetchApi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchApi(`search?part=snippet&q=${selectedCategory}`);
        console.log(data.items);
        setvideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [selectedCategory]);
  


  return (
    <Stack sx={{flexDirection: {sx: "column" , md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'},  borderRight: '1px solid #3d3d3d', px:{sx: 0, md: 2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color:"#fff"}} >
          Youtube Clone
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto" , height: "90vh" , flex: 2}} >
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:"white"}} >{selectedCategory}
          <span style={{color: "#F31503"}}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
