import NavBar from "../components/navbar/NavBar"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';


const StyledBox = styled(Box)`
width: 100vw;
height: 100%;
background-color: #F5F7FF;
`

function Contact() {
  return (
    <StyledBox>
        <NavBar />
    </StyledBox>
  )
}

export default Contact