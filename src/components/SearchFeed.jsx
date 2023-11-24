import React , {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import {Videos} from '../components'
import { FetchApi } from '../utils/FetchApi'
import { useParams } from 'react-router-dom'

const Feed = () => {
  const [videos, setvideos] = useState([]); // Get the videos from the fetchApi
  const {searchTerm} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchApi(`search?part=snippet&q=${searchTerm}`);
        setvideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [searchTerm]);
  


  return (
    <>
    <Box sx={{mr: {sm: '100px'}}} />
      <Box p={2} sx={{overflowY: "auto" , height: "90vh" , flex: 2}} >
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:"white"}} >Results for: {searchTerm}
          <span style={{color: "#F31503"}}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      </>
  )
}

export default Feed
