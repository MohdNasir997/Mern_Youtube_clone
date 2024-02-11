import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Container= styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({videoId}) => {
  const Api = import.meta.env.VITE_API
  const UserImage = 'https://images.pexels.com/photos/16355930/pexels-photo-16355930/free-photo-of-woman-with-a-bunch-of-red-roses-and-a-man-walking-holding-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  // const videoId = '65b8da5dd0ac0221efab44b7'

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${Api}/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {
        console.log(err,API)
      }
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
        <NewComment>
            <Avatar                 
            src={UserImage}
            />
            <Input placeholder='Add a comment'/>
        </NewComment>
        {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments