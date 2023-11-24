import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {VideoDetail, ChannelDetails, Feed, NavBar, SearchFeed } from './components';
function App() {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
            <NavBar/>
            <Routes>
              <Route path='/' exact element={<Feed/>} />
              <Route path='/video/:id' element={<VideoDetail/>} />
              <Route path='/channel/:id' element={<ChannelDetails/>} />
              <Route path='/search/:searchTerm' element={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
