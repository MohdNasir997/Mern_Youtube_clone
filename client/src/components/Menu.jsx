import React from 'react'
import styled from 'styled-components'
import Ourtube from '../img/logo.png'
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
flex:1;
background-color: ${({ theme }) => theme.bgLighter};
height: 260vh;
color: ${({ theme }) => theme.text};
font-size:14px;
position: sticky;
top: 0s;
`
const Wrapper = styled.div`
padding: 18px 26px;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
margin-bottom: 25px;
font-weight:bold;
`
const Image = styled.img`
height:25px;
`

const Items = styled.div`
display:flex;
align-items: center;
gap:20px;
cursor: pointer;
padding: 7.5px 0px;
&:hover{
  background-color: ${({theme}) => theme.soft}
}
`;
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
padding: 5px 15px;
border: 1px solid #3ea6ff;
color: #3ea6ff;
background-color: transparent;
font-weight: 500;
border-radius: 3px;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({setDarkMode,darkMode}) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
        <Wrapper>
        <Link to='/' style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Image src={Ourtube}/>
                OurTube
            </Logo>
            </Link>
            <Link to='/' style={{textDecoration:'none',color:"inherit"}}>
             <Items>
              <  HomeIcon />
            Home
             </Items>
        </Link>
            <Link to='trends' style={{textDecoration:'none',color:"inherit"}}>
        <Items>
          <  ExploreOutlinedIcon />
            Explore
        </Items>
        </Link>
        <Link to='subscription' style={{textDecoration:'none',color:"inherit"}}>
        <Items>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Items>
        </Link>
        <Hr/>
        {!currentUser &&
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="sign-in" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        }
        <Title>BEST OF OURTUBE</Title>
        <Items>
          <VideoLibraryOutlinedIcon />
          Library
        </Items>
        <Items>
          <HistoryOutlinedIcon />
          History
        </Items>
        <Hr/>
        <Items>
          <LibraryMusicOutlinedIcon />
          Music
        </Items>
        <Items>
          <SportsBasketballOutlinedIcon />
          Sports
        </Items>
        <Items>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Items>
        <Items>
          <MovieOutlinedIcon />
          Movies
        </Items>
        <Items>
          <ArticleOutlinedIcon />
          News
        </Items>
        <Items>
          <LiveTvOutlinedIcon />
          Live
        </Items>
        <Hr/>
        <Items>
          <SettingsOutlinedIcon />
          Settings
        </Items>
        <Items>
          <FlagOutlinedIcon />
          Report
        </Items>
        <Items>
          <HelpOutlineOutlinedIcon />
          Help
        </Items>
        <Items onClick={ () => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon/>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Items>
        </Wrapper>
    </Container>
  )
}

export default Menu