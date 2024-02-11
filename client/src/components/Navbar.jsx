import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Upload from './Upload';
import { logout } from '../Redux/UserSlice';
import axios from 'axios';

const Container = styled.div`
position:sticky;
top:0;
background-color: ${({theme}) => theme.bgLighter};
height: 56px;
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`;
const Search = styled.div`
width: 40%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
border:none;
background-color: transparent;
color: ${({theme}) => theme.text};
outline: none;
`;
const Button = styled.button`
padding: 5px 15px;
border: 1px solid #3ea6ff;
color: #3ea6ff;
background-color: transparent;
font-weight: 500;
border-radius: 3px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const Navbar = () => {
  const {currentUser} = useSelector(state => state.user);
  const {currentVideo} = useSelector(state => state.video)
  const [open,setOpen] = useState(false)
  const [query,setQuery] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const API = import.meta.env.VITE_API

  const handlelogout = async () => {
    try {
      await axios.get(`${API}/auth/signout`).then(dispatch(logout()))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='search' onChange={ e => setQuery(e.target.value)}/>
          <SearchOutlinedIcon onClick={() => navigate(`/search?query=${query}`)}/>
        </Search>
        {
          currentUser ? 
          <User>
          <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
          <Avatar src={currentUser.img} />
          {currentUser.name}
          <Button onClick={handlelogout}><AccountCircleOutlinedIcon/> Sign Out</Button>
        </User> :
          <Link to='sign-in' style={{textDecoration:'none'}}>
          <Button><AccountCircleOutlinedIcon/> Sign In</Button>
          </Link>
        
        }
      </Wrapper>
      {open && <Upload setOpen={setOpen}/>}
    </Container>
    </>
  )
}

export default Navbar