import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import img from '../../assets/bottom-img.png'

const StyledBox = styled(Box)`
width: 100%;
height: auto;
flex-shrink: 0;
margin-top: 20px;
background: linear-gradient(143deg, rgba(0, 0, 0, 0.20) 10.85%, rgba(0, 0, 0, 0.20) 181.83%), #050507;
@media screen and (max-width: 900px) {
height: auto;
}
padding-bottom: 20px;
`
const StyledContainer = styled(Container)`

`
const InnerContainer = styled.div`
width: 100%;
height: 408px;
flex-shrink: 0;
@media screen and (max-width: 900px) {
height: 310px;
flex-shrink: 0;
}
`
const Image = styled.img`
width: 100%;
height: 100%;
`
const Heading = styled.p`
color: #FFF;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
`
 const Content = styled.p`
 color: rgba(217, 217, 217, 0.70);
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.33px;
 `
 const ContactBtn = styled.button`
 display: flex;
width: 212px;
height: 56px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
background: rgba(255, 0, 0, 0.12);
color: #F00;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.1px;
border: none;
outlined: none;
cursor: pointer;
@media screen and (max-width: 600px) {
  display: flex;
  width: 159px;
  height: 38px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #F00;
font-family: Puritan;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.08px;
  }
 `

function BottomContainer() {
  return (
    <StyledBox>
        <StyledContainer>
        <Grid container spacing={4}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <InnerContainer>
                  <Image src={img} />
                </InnerContainer>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <InnerContainer style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Heading>Ready to embark on a journey of innnovation?</Heading>
                    <Content>Contact us to discuss your project, and let’s build something extraordinary together.</Content>
                    <ContactBtn>Contact Us</ContactBtn>
                </InnerContainer>
            </Grid>
        </Grid>
        </StyledContainer>
    </StyledBox>
  )
}

export default BottomContainer