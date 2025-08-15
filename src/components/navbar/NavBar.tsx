import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem, Modal, TextField } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const StyledBox = styled(Box)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 30px;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const LogoText = styled.h1`
  font-family: 'Slabo 27px', serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  background: linear-gradient(135deg, #333 0%, #ff6b6b 50%, #333 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  line-height: 1;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-family: 'Puritan', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.1);
  }
  
  &.active {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%);
  border: none;
  border-radius: 25px;
  color: white;
  font-family: 'Puritan', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);
  }
  
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  
  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-top: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 1rem 1.5rem;
  
  &:hover {
    background: rgba(255, 107, 107, 0.1);
  }
`;

const MobileNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-family: 'Puritan', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const MobileCTAButton = styled.button`
  background: linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%);
  border: none;
  border-radius: 20px;
  color: white;
  font-family: 'Puritan', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ModalContainer = styled.form`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  
  @media screen and (max-width: 600px) {
    padding: 1.5rem;
    margin: 1rem;
    max-height: 85vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  color: #333;
  font-family: 'Puritan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.1);
    color: #ff0000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #333;
  font-family: 'Puritan', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  
  & .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    
    &:hover fieldset {
      border-color: #ff6b6b;
    }
    
    &.Mui-focused fieldset {
      border-color: #ff0000;
    }
  }
  
  & .MuiInputLabel-root {
    &.Mui-focused {
      color: #ff0000;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-family: 'Puritan', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }
`;

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto" as const,
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function NavBar({
  formData,
  setFormData,
  sendEmail,
  form,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  sendEmail: (event: React.FormEvent<HTMLFormElement>) => void;
  form: React.RefObject<HTMLFormElement>;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState(false);
  
  const open = Boolean(anchorEl);
  
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleModalOpen = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };
  
  const handleModalClose = () => setOpenModal(false);

  return (
    <StyledBox>
      <StyledContainer>
        <LogoSection>
          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo src={logo} alt="Xelton Technologies" />
            <LogoText>Xelton Technologies</LogoText>
          </NavLink>
        </LogoSection>
        
        <Navigation>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <CTAButton onClick={handleModalOpen}>Hire Us</CTAButton>
        </Navigation>
        
        <MobileMenuButton
          onClick={handleMenuClick}
          aria-label="Open menu"
        >
          <MenuOutlinedIcon />
        </MobileMenuButton>
      </StyledContainer>
      
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <StyledMenuItem onClick={handleMenuClose}>
          <MobileNavLink to="/about">About</MobileNavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleModalOpen}>
          <MobileCTAButton>Hire Us</MobileCTAButton>
        </StyledMenuItem>
      </StyledMenu>
      
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="hire-us-modal"
      >
        <ModalContainer
          style={modalStyle}
          ref={form}
          onSubmit={sendEmail}
        >
          <ModalHeader>
            <ModalTitle>
              Let's work together on your next project
            </ModalTitle>
            <CloseButton onClick={handleModalClose}>
              <HighlightOffOutlinedIcon />
            </CloseButton>
          </ModalHeader>
          
          <FormGroup>
            <Label>Full Name</Label>
            <StyledTextField
              required
              name="name"
              label="Enter your full name"
              value={formData.name}
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Email</Label>
            <StyledTextField
              required
              name="email"
              type="email"
              label="Enter your email address"
              value={formData.email}
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Phone</Label>
            <StyledTextField
              required
              name="phone"
              type="tel"
              label="Enter your phone number"
              value={formData.phone}
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Message</Label>
            <StyledTextField
              name="message"
              label="Tell us about your project"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </FormGroup>
          
          <SubmitButton type="submit">
            Send Message
          </SubmitButton>
        </ModalContainer>
      </Modal>
    </StyledBox>
  );
}

export default NavBar;