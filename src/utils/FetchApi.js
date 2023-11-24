import axios from "axios";
const BASE_URL ='https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7f25238678msh40d9dd0da1117b4p1c374fjsn04e34978d524',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const  FetchApi =  async (url)=>{
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('Error in FetchApi:', error);
  }
}
