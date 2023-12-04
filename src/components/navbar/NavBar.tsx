import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.svg'
import { NavLink} from "react-router-dom";
import { Menu, MenuItem } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from 'react';

const StyledBox = styled(Box)`
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
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
background: linear-gradient(83deg, #050507 55.33%, #1C2238 133.93%, #D39563 143.52%, #2AC3D1 147.35%, #050507 147.35%);
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
color: #000;
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
border: 0.71px solid rgba(255, 0, 0, 0.20);
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


function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledBox>
        <StyledContainer>
        <LogoContainer>
        <StyledLink id='navbar' to='/'>
            <LogoContent><Logo src={logo}  alt='logo'/>elton Technologies</LogoContent>
        </StyledLink>
        </LogoContainer>
        <MenuContainer>
                <StyledLink id='navbar' to='/about'><MenuItems>About</MenuItems></StyledLink>
                <StyledLink id='navbar' to='/contact'><MenuItems>Contact</MenuItems></StyledLink>
                <HireUsBtn>Hire Us</HireUsBtn>
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
        <MenuItem onClick={handleClose}> <MobileHireUsBtn>Hire Us</MobileHireUsBtn></MenuItem>
      </Menu>
        </StyledContainer>
    </StyledBox>
  )
}

export default NavBar