import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import backImg from '../../assets/what-we-do.png'
import { Grid } from '@mui/material';


const StyledBox = styled(Box)`
flex-shrink: 0;
background-position: center; 
background-repeat: no-repeat;
background-size: cover;
width: 100%;
`
const StyledContainer = styled(Container)`
height: auto;
padding-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading = styled.h3`
color: #FFF;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
text-align: center;
`

const Card = styled.div`
display: flex;
width: 100%;
height: 333px;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 25px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), rgba(255, 255, 255, 0.12);
`
const CardHeader = styled.h4`
color: #FFF;
font-family: Puritan;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.363px;
`
const CardContent = styled.p`
color: rgba(217, 217, 217, 0.79);
text-align: center;
font-family: Puritan;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.297px;
margin-right: 5%;
margin-left: 5%;
`

function WhatWeDo() {
  return (
    <StyledBox style={{
        backgroundImage: `url(${backImg})`
    }}>
        <StyledContainer>
        <Heading>What We Do To Serve You Best</Heading>
        <Grid container spacing={6} columnSpacing={8}>
         <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card>
            <CardHeader>Custom Software Development</CardHeader>
         <CardContent>Tailored solutions designed to address the specific needs and challenges of your business, ensuring optimal performance and efficiency.</CardContent>
          </Card>
         </Grid>
         <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card>
            <CardHeader>Mobile App Development</CardHeader>
         <CardContent>Innovative mobile applications for IOS and Android platforms, combining user-centric design with seamless functionality to engage your target audience.</CardContent>
          </Card>
         </Grid>
         <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card>
            <CardHeader>Web Development</CardHeader>
         <CardContent>Robust and scalable web solutions, from dynamic websites to complex web applications, crafted to enhance your online presence and business growth.</CardContent>
          </Card>
         </Grid>
         <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card>
            <CardHeader>UI/UX Design</CardHeader>
         <CardContent>Intuitivr and visually appealing user interfaces, coupled with a focus on user experience, to ensure that your software not only flawlessly but is a pleasure to use.</CardContent>
          </Card>
         </Grid>
        </Grid>
        </StyledContainer>
    </StyledBox>
  )
}

export default WhatWeDo