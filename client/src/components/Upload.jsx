import React, { useState } from 'react'
import styled from 'styled-components'



const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 400px;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: white;
`;
const Title = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;


const Upload = ({setOpen}) => {
    const [video,setVideo] = useState(null)
    const [img,setImg] = useState(null)
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');


  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  return (
    <Container>
        <Wrapper>
            <Close onClick={() => setOpen(false)}>X</Close>
            <Title>Add a New Video</Title>
            <Label>Video:</Label>
            <Input type='file' accept='video/*' onChange={(e) => setVideo(e.target.files[0])}/>
            <Input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <Desc placeholder='description' rows={8} onChange={(e) => setDesc(e.target.value)}/>
            <Input type='text' placeholder='seperate tags by comma' onChange={handleTags}/>
            <Label>Image:</Label>
            <Input type='file' accept='image/*' onChange={(e) => setImg(e.target.files[0])}/>
            <Button>Upload</Button>
        </Wrapper>
    </Container>
  )
}

export default Upload