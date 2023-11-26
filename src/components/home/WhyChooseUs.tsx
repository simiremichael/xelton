import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import whyGif from '../../assets/why-gif.gif'


const StyledBox = styled(Box)`
flex-shrink: 0;
background-position: center; 
background-repeat: no-repeat;
background-size: 100% 100%;
width: 100%;
height: 620px;
flex-shrink: 0;
`
const StyledContainer = styled(Container)`
height: auto;
padding-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
function WhyChooseUs() {
  return (
    <StyledBox style={{
        backgroundImage: `url(${whyGif})`
    }}>
        <StyledContainer>

        </StyledContainer>
    </StyledBox>
  )
}

export default WhyChooseUs