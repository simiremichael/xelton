import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.svg'
import { NavLink} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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
const StyledLink = styled(NavLink)`
text-decoration: none;
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


function HomeNavBar() {
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
        <MenuItem onClick={handleClose}> <StyledLink id='navbar' to='/about'>About</StyledLink></MenuItem>
        <MenuItem onClick={handleClose}>  <StyledLink id='navbar' to='/contact'>Contact</StyledLink></MenuItem>
        <MenuItem onClick={handleClose}> <HireUsBtn>Hire Us</HireUsBtn></MenuItem>
      </Menu>
    </StyledBox>
  )
}

export default HomeNavBar