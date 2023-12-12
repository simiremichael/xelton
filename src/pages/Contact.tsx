import NavBar from "../components/navbar/NavBar"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Footer from "../components/footer/Footer";
import { Container, Grid, TextField } from "@mui/material";
import SvgContainer from "../components/SvgContainer";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const StyledBox = styled(Box)`
width: 100%;
height: 100%;
background-color: #F5F7FF;
`
const StyledContainer = styled(Container)`
margin: 20px 0;
`
const Title = styled.h2`
color: #000;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
@media screen and (max-width: 600px){
color: #000;
font-family: Puritan;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.297px;
}
`
const LeftContainer = styled.div`
display: flex;
padding: 0px 10px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`
const LeftText = styled.p`
color: #000;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.33px;
display: flex;
align-items: center;
@media screen and (max-width: 600px) {
  font-size: 16px;
}
`
const RightContainer = styled.form`
height: auto;
padding: 10px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2.3px 2px 0px rgba(0, 0, 0, 0.18);
`
const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const SubmitBtn = styled.button`
display: flex;
width: 212px;
height: 56px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
cursor: pointer;
flex-shrink: 0;
border-radius: 10px;
border: 0.71px solid rgba(255, 0, 0, 0.20);
background: rgba(255, 0, 0, 0.12);
color: #F00;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.1px;
margin-top: 8px;
@media screen and (max-width: 600px) {
  width: 159px;
  height: 38px;
  padding: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.08px;
}
`
const TextFields = styled(TextField)`
background: rgba(217, 217, 217, 0.40);
margin: 5px 0 12px 0;

`
const Label = styled.label`
color: #000;
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.33px;
text-align: start;
@media screen and (max-width: 600px) {
  color: #000;
  font-family: Puritan;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.231px;
}
`
const EmailIcon = styled(MailOutlineIcon)`
font-size: 28px;
margin-right: 10px;
@media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
const PhoneIcon = styled(CallIcon)`
font-size: 28px;
margin-right: 10px;
@media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
const AddressIcon = styled(LocationOnOutlinedIcon)`
font-size: 28px;
margin-right: 10px;
@media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

function Contact(props: {formData: any, setFormData: any, sendEmail: any}) {

  const formData = props.formData;
  const setFormData = props.setFormData;
const sendEmail = props.sendEmail
  
  const text = 'Contact'
  return (
    <StyledBox>
        <NavBar sendEmail={sendEmail} formData={formData} setFormData={setFormData} />
        <SvgContainer text={text} />
        <StyledContainer>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <LeftContainer>
              <Title>General Inquiries</Title>
              <LeftText><EmailIcon /> sales@xeltontechnologies.com.ng</LeftText>
              <LeftText><PhoneIcon /> +2348067253462</LeftText>
              <LeftText><AddressIcon /> 52 Agungi Ajiran Road, Lekki Lagos, Nigeria</LeftText>
              </LeftContainer>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
            <RightContainer onSubmit={sendEmail}>
            <Title style={{textAlign: 'center', marginTop: 0}}>Contact Us</Title>
            <Label>Full Name</Label>
            <TextFields
          required
          id="outlined-required"
          label="Full Name"
          value={formData.name}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, name: e.target.value})}
        />
         <Label>Email</Label>
         <TextFields
          required
          id="outlined-required"
          label="Email"
          value={formData.email}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, email: e.target.value})}
          />
           <Label>Phone</Label>
          <TextFields
          required
          id="outlined-required"
          label="Phone"
          type="number"
          value={formData.phone}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, phone: e.target.value})}
          />
           <Label>Message</Label>
          <TextFields
          id="outlined-multiline-static"
          label="Message"
          multiline
          fullWidth
          rows={4}
          value={formData.message}
          onChange={(e: any) => setFormData({...formData, message: e.target.value})}
        />
        <BtnContainer>
        <SubmitBtn value='send' type='submit'>Submit</SubmitBtn>
        </BtnContainer>
         </RightContainer>
            </Grid>
          </Grid>
        </StyledContainer>
        <Footer />
    </StyledBox>
  )
}

export default Contact