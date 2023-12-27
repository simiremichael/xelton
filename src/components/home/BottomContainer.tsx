import styled from '@emotion/styled';
import { Grid, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import img from '../../assets/bottom-img.png';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import React from 'react';

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
 const Content = styled.p`
 color: rgba(217, 217, 217, 0.70);
font-family: Puritan;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.33px;
@media screen and (max-width: 600px) {
  font-size: 16px;
  }
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
 const ModalContainer = styled.form`
height: auto;
padding: 10px;
border-radius: 20px;
background: #FFF;
margin: 20px 0;
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
const Title = styled.h3`
color: #050507;
font-family: Puritan;
font-size: 26px;
margin: 0 0 10px 0;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
@media screen and (max-width: 600px) {
color: #050507;
font-family: Puritan;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.297px;
}
`
const CloseIconContainer = styled.div`
display: flex;
justify-content: flex-end;
`

const style = {
  position: 'absolute' as 'absolute',
  top: '46%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 240,
  p: 4,
};

function BottomContainer(props: {formData: any, setFormData: any, sendEmail: any}) {

  const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail


  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
                    <ContactBtn onClick={handleOpenModal}>Contact Us</ContactBtn>
                </InnerContainer>
            </Grid>
        </Grid>
        </StyledContainer>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          {/* <Grid container spacing={2}>
            <Grid item lg={2.5} md={2.5} sm={2} xs={0}></Grid>
            <Grid item lg={7} md={7} sm={8} xs={12}> */}
            <ModalContainer style={style} onSubmit={sendEmail}>
              <CloseIconContainer><HighlightOffOutlinedIcon onClick={handleCloseModal} style={{fontSize: 24, cursor: 'pointer', color: '#000', marginTop: 15, marginRight: 15}} /></CloseIconContainer>
            <Title>Share your ideas with us, and we will get in touch quickly.</Title>
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
          type='number'
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
         </ModalContainer>
            {/* </Grid>
            <Grid item lg={2.5} md={2.5} sm={2} xs={0}></Grid>
          </Grid> */}
      </Modal>
    </StyledBox>
  )
}

export default BottomContainer