import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import image1 from '../../assets/web.png';
import image2 from '../../assets/erp.png';
import image3 from '../../assets/mobile.png';
import image4 from '../../assets/uiux.png';
import ellipse from '../../assets/Ellipse1.svg'
import HomeNavBar from '../navbar/HomeNavBar';
import { Slide } from 'react-awesome-reveal';

const StyledBox = styled(Box)`
  width: 100%;  
  background-color: #000;          
  background-position: center; 
  background-repeat: repeat;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  top: 0;
  @media screen and (max-width: 900px) {
    background-size: 100% 100%;
  }

`
const StyledContainer = styled(Container)`
height: 460px;  
@media screen and (max-width: 600px) {
height: 373px;
flex-shrink: 0;
  }
`
const WebDevContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
margin-top: 15%;
justify-content: center;
@media screen and (max-width: 600px) {
  margin-top: 30%;
}
`
const ERPContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
margin-top: 15%;
@media screen and (max-width: 600px) {
  margin-top: 30%;
}
`
const MobileContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
margin-top: 15%;
@media screen and (max-width: 600px) {
  margin-top: 30%;
}
`
const UIUXContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
margin-top: 15%;
@media screen and (max-width: 600px) {
  margin-top: 30%;
}
`
const Content = styled.h3`
display: flex;
align-items: center;
color: #FFF;
font-family: Puritan;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.264px;
@media screen and (max-width: 600px) {
color: #FFF;
font-family: Puritan;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.165px;
  }
`
const ContentIcon = styled.img`
width: 12px;
height: 12px;
fill: #F00;
stroke-width: 1.4px;
stroke: #000;
margin-right: 5px;
@media screen and (max-width: 600px) {
width: 6px;
height: 6px;
}
` 
const ContentHeader = styled.div`
color: #FFF;
font-family: Puritan;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.627px;
@media screen and (max-width: 600px) {
    color: #FFF;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`

function TopContainer(props: {formData: any, setFormData: any, sendEmail: any, form: any}) {
  const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail
  const form = props.form

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
const images = [image1, image2, image3, image4]

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);
  
  return (
    <StyledBox style={{
        backgroundImage: `url(${images[currentImageIndex]})`
      }}>
        <HomeNavBar sendEmail={sendEmail}  formData={formData} setFormData={setFormData} form={form} />
     <StyledContainer className="content-slider">
        { currentImageIndex === 0 &&
        <Slide direction='right'>
        <WebDevContainer>
         <Content><ContentIcon src={ellipse}  />Software Engineering</Content>
         <ContentHeader>Web Development</ContentHeader>
        </WebDevContainer>
        </Slide>
        }
        {currentImageIndex === 1 &&
        <Slide direction='right'>
        <ERPContainer>
          <Content><ContentIcon src={ellipse}  />Software Development</Content>
         <ContentHeader>ERP Software</ContentHeader>
        </ERPContainer>
        </Slide>
          }
          { currentImageIndex === 2 &&
          <Slide direction='right'>
        <MobileContainer>
          <Content><ContentIcon src={ellipse}  />Mobile Application</Content>
         <ContentHeader>Mobile App Development</ContentHeader>
        </MobileContainer>
        </Slide>
         }
         { currentImageIndex === 3 &&
         <Slide direction='right'>
        <UIUXContainer>
          <Content><ContentIcon src={ellipse}  />Design</Content>
         <ContentHeader>User Experience (UI/UX) Design</ContentHeader>
        </UIUXContainer>
        </Slide>
       }
     </StyledContainer>
    </StyledBox>
  )
}

export default TopContainer