import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.svg'
import { NavLink} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Modal, TextField } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


const StyledBox = styled(Box)`
background: rgba(255, 255, 255, 0.1);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
`
const StyledContainer = styled(Container)`
display: flex;
align-items: center;
justify-content: space-between;
`
const LogoContainer = styled.div`
display: flex;
height: 46px;
padding: 5.345px 0px 5.345px 5.012px;
justify-content: flex-end;
align-items: center;
`
const Logo = styled.img`
width: 47.76px;
height: 35.311px;
flex-shrink: 0;
margin-right: -12px;
`
const LogoContent = styled.p`
font-family: Slabo 27px;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.297px;
background: linear-gradient(83deg, #FFF 55.33%, #D39563 133.93%, #2AC3D1 147.35%, #253138 147.35%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
cursor: pointer;
display: inline-flex;
align-items: center;
margin-left: -10px;
`
const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (min-width: 901px) {
    gap: 203px;
  }
`
const MenuItems = styled.p`
color: #FFF;
font-family: Puritan;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.08px;
cursor: pointer;
@media screen and (max-width: 900px) {
    display: none;
  }
`
const HireUsBtn = styled.button`
display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
color: #F00;
cursor: pointer;
border-radius: 10px;
background: #FFF;
@media screen and (max-width: 900px) {
    display: none;
  }
`
const MobileHireUsBtn = styled.button`
display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
color: #F00;
cursor: pointer;
border-radius: 10px;
background: #FFF;
outline: none;
border: none;
`
const StyledLink = styled(NavLink)`
text-decoration: none;
color: #fff;
:active {
    font-weight: bold;
}
`
const StyledLinks = styled(NavLink)`
text-decoration: none;
color: #050507;
font-family: Puritan;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.264px;
:active {
    font-weight: bold;
}
`
const BuggerMenuContainer = styled.div`
@media screen and (min-width: 901px) {
    display: none;
  }
`
const StyledButton  = styled.button`
border: none;
outlined: none;
@media screen and (min-width: 901px) {
    display: none;
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

function HomeNavBar(props: {formData: any, setFormData: any, sendEmail: any, form: any}) {

  const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail;
  const form = props.form;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
const handleHire = () => {
  setOpenModal(true);
  setAnchorEl(null);
}

  return (
    <StyledBox>
        <StyledContainer>
        <LogoContainer>
        <StyledLink id='navbar' to='/'>
            <LogoContent><Logo src={logo}  alt='logo'/>elton Technologies</LogoContent>
            </StyledLink>
        </LogoContainer>
        <MenuContainer>
                <MenuItems><StyledLink id='navbar' to='/about'>About</StyledLink></MenuItems>
                <MenuItems><StyledLink id='navbar' to='/contact'>Contact</StyledLink></MenuItems>
                <HireUsBtn onClick={handleOpenModal}>Hire Us</HireUsBtn>
                <BuggerMenuContainer>
                <StyledButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                    >
                  <MenuOutlinedIcon />
                 </StyledButton>
                </BuggerMenuContainer>
            </MenuContainer>
        </StyledContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <StyledLinks id='navbar' to='/about'>About</StyledLinks></MenuItem>
        <MenuItem onClick={handleClose}>  <StyledLinks id='navbar' to='/contact'>Contact</StyledLinks></MenuItem>
        <MenuItem onClick={handleHire}> <MobileHireUsBtn>Hire Us</MobileHireUsBtn></MenuItem>
      </Menu>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          {/* <Grid container spacing={2}>
            <Grid item lg={2.5} md={2.5} sm={2} xs={0}></Grid>
            <Grid item lg={7} md={7} sm={8} xs={12}> */}
            <ModalContainer style={style} ref={form} onSubmit={sendEmail}>
              <CloseIconContainer><HighlightOffOutlinedIcon onClick={handleCloseModal} style={{fontSize: 24, cursor: 'pointer', color: '#000', marginTop: 15, marginRight: 15}} /></CloseIconContainer>
            <Title>Share your ideas with us, and we will get in touch quickly.</Title>
            <Label>Full Name</Label>
            <TextFields
          required
           name='name'
          id="name"
          label="Full Name"
          value={formData.name}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, name: e.target.value})}
        />
         <Label>Email</Label>
         <TextFields
          required
          name='email'
          id="email"
          label="Email"
          value={formData.email}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, email: e.target.value})}
          />
           <Label>Phone</Label>
          <TextFields
          required
          name='phone'
          id="phone"
          type='number'
          label="Phone"
          value={formData.phone}
          fullWidth
          size="small"
          onChange={(e: any) => setFormData({...formData, phone: e.target.value})}
          />
           <Label>Message</Label>
          <TextFields
          id="message"
          name='message'
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

export default HomeNavBar