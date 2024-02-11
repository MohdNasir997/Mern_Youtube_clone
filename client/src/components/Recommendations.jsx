import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Card from './Card';



const Container = styled.div`
  flex: 2;
`;


const Recommendations = ({tags}) => {
    const [videos, setVideos] = useState([]);
    const API = import.meta.env.VITE_API

    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(`${API}/videos/tags?tags=${tags}`);
        setVideos(res.data);
      };
      fetchVideos();
    }, [tags]);
  return (
   <Container>
    {videos.map( video => (
        <Card key={video._id} video={video} type='sm' />
    ))}
   </Container>
  )
}

export default Recommendations