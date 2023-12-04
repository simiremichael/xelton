import NavBar from "../components/navbar/NavBar"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SvgContainer from "../components/SvgContainer";
import { Container, Grid } from "@mui/material";
import image from '../assets/about-img.png'


const StyledBox = styled(Box)`
width: 100%;
height: 100%;
background-color: #F5F7FF;
`
const TopContainer = styled(Container)`
margin-top: 20px;
`
const InnerContainer = styled.div`
width: 100%;
height: 456px;
`
const Img = styled.img`
width: 100%;
height: 100%;
`
const P = styled.p`
color: #000;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.33px;
margin-top: 0;
@media screen and (max-width: 900px) {
    font-size: 14px;
}
`
const MiddleContainer = styled.div`
display: flex;
width: 100%;
height: 399px;
justify-content: center;
align-items: center;
flex-shrink: 0;
@media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const ValueContainer = styled.div`
display: flex;
width: 844px;
height: 282px;
padding: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 34px;
flex-shrink: 0;
border-radius: 100px;
background: #F2B5B5;
@media screen and (max-width: 900px) {
    height: auto;
    width: calc(300px + 30%);
    margin: 10px 5%;
}
`
const ValueHeading = styled.h3`
color: #050507;
text-align: center;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
margin: 0;
@media screen and (max-width: 600px) {
    font-size: 18px;
}
`
const ValueDetails = styled.p`
color: #000;
text-align: center;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.33px;
@media screen and (max-width: 600px) {
    font-size: 12px;
}
`
const BottomContainer = styled.div`
width: 100%;
height: 438px;
flex-shrink: 0;
`

function About() {
const text = "About Us"

  return (
    <StyledBox>
        <NavBar />
        <SvgContainer text={text} />
        <TopContainer>
            <Grid container spacing={4}>
                <Grid item lg={5} md={5} sm={6} xs={12}>
                 <InnerContainer>
                <Img src={image} />
                 </InnerContainer>
                </Grid>
                <Grid item lg={7} md={7} sm={6} xs={12}>
                    <InnerContainer style={{height: 'auto'}}>
                     <P>We are a dynamic team of skilled professionals dedicated to crafting cutting-edge solutions tailored to meet your unique business needs. At Xelton Technology, we pride ourselves on our commitment to delivering high-quality software that goes beyond expectations. With a focus on innovation, our talented developers harness the latest technologies to create robust and scalable solutions for a diverse range of industries.</P>
                       <P> Our mission is to empower businesses through transformative digital experiences. Whether you're looking for custom software development, mobile applications, or robust web solutions, we are here to turn your vision into reality. We understand that every project is unique, and our agile approach ensures flexibility and adaptability throughout the development process.</P>
                        <P>What sets us apart is not just our technical prowess but our dedication to understanding your business objectives. We believe in collaborative partnerships, working closely with our clients to ensure that our solutions align seamlessly with their goals and aspirations. Join us on a journey of innovation and reliability. At Xelton Technology, we don't just write code; we craft solutions that propel businesses forward. Explore the possibilities with us, and let's build the future together.</P>
                    </InnerContainer>
                </Grid>
            </Grid>
        </TopContainer>
        <MiddleContainer>
        <ValueContainer>
            <ValueHeading>Our Values</ValueHeading>
            <ValueDetails>With the aptitude for creating new and innovative applications and an ability for renovating the 
existing one, Xelton has pioneered itself in the areas of Web Solutions, Web Designing, Custom 
Application Development, Software Solutions, Mobile Phone Applications (IOS, Android and 
Windows), Search Engine Optimization, Domain and Hosting, Branding, ERP Software and in 
other IT Services.</ValueDetails>
        </ValueContainer>
        </MiddleContainer>
        <BottomContainer></BottomContainer>
    </StyledBox>
  )
}

export default About