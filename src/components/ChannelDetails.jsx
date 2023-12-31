import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { FetchApi } from '../utils/FetchApi'
const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  console.log(videos, channelDetail);
  useEffect(()=>{
    FetchApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      setChannelDetail(data?.items[0])
    });
    FetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setVideos(data?.items)});
  }, [id])
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{zIndex: 10 , height: '300px'}} className='channel-deatils' />
        <ChannelCard channelDetail={channelDetail}  marginTop="-93px" />
      </Box>
      <Box display={'flex'} p={2} >
        <Box sx={{mr: {sm: '100px'}}} />
            <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
