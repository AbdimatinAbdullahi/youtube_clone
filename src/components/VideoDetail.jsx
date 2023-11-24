import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Stack, Typography, Box } from '@mui/material'
import ReactPlayer from 'react-player'
import {FetchApi} from '../utils/FetchApi'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './'

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    FetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        console.log(data)
        setVideoDetail(data.items[0])})

    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        console.log(data)
        setVideos(data.items)})
  }, [id]);

  if(!VideoDetail.snippet) {
    return 'Loading Please Wait...'
  }

  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{xs: 'column', md: "row"}} >
        <Box flex={1}>
          <Box sx={{width:"100%", position:"sticky", top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player'  />
           <Typography variant='h6' color={'white'} fontWeight={'bold'} >{VideoDetail.snippet.title}</Typography>           
            <Stack direction={'row'}  justifyContent={'space-between'} sx={{color:"gray"}} py={1} px={2}>

              <Link to={`/channel/${VideoDetail.snippet.channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: "subtitle"}} color={'white'} >
                  {VideoDetail.snippet.channelTitle}
                  <CheckCircle sx={{fontSize: 12, color:"gray", ml: '5px'}} />
                  </Typography>
              </Link>

              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>

                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(VideoDetail.statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(VideoDetail.statistics.likeCount).toLocaleString()} likes
                </Typography>

              </Stack>

            </Stack> 
          </Box>

        </Box>
        <Box px={2} py={{md: 2, xs: 5}}  justifyContent={'center'} alignItems={'center'}>
        <Videos videos={videos} direction={'column'}/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
