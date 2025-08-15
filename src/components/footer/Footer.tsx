import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const StyledBox = styled(Box)`
  width: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 0 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 0, 0, 0.08) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #ff6b6b 50%,
      transparent 100%
    );
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  margin-bottom: 3rem;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 38px;
  margin-right: 0.75rem;
  filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.3));
  flex-shrink: 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoText = styled.h2`
  font-family: "Slabo 27px", serif;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
  background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  line-height: 1;
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Puritan", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;

  @media screen and (max-width: 900px) {
    max-width: 400px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.2) 0%,
    rgba(255, 0, 0, 0.1) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 1.2rem;
    color: #ff6b6b;
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.3) 0%,
      rgba(255, 0, 0, 0.2) 100%
    );
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 0, 0, 0.2);

    svg {
      color: #fff;
    }
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 900px) {
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #ff0000 0%, #ff6b6b 100%);
    border-radius: 2px;
  }

  @media screen and (max-width: 900px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled(StyledLink)`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.75rem 0;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #ff6b6b;
    padding-left: 1rem;
    background: rgba(255, 107, 107, 0.05);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: #ff6b6b;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 4px;
  }

  @media screen and (max-width: 900px) {
    &:hover {
      padding-left: 0;
    }
    &::before {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ContactSection = styled.div`
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.05);
    border-color: rgba(255, 107, 107, 0.2);
    transform: translateX(5px);
  }

  &:hover div {
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.4) 0%,
      rgba(255, 0, 0, 0.3) 100%
    );
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    &:hover {
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ContactIcon = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.2) 0%,
    rgba(255, 0, 0, 0.1) 100%
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 1.3rem;
    color: #ff6b6b;
  }

  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 1.1rem;
    }
  }
`;

const CopyrightSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: "Puritan", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

function Footer() {
  return (
    <StyledBox>
      <StyledContainer>
        <FooterContent>
          <Grid container spacing={5}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <LogoSection>
                <LogoContainer>
                  <StyledLink to="/">
                    <Logo src={logo} alt="Xelton Technologies" />
                    <LogoText>Xelton Technologies</LogoText>
                  </StyledLink>
                </LogoContainer>
                <CompanyDescription>
                  Transforming ideas into innovative digital solutions. We
                  deliver cutting-edge technology services that drive business
                  growth.
                </CompanyDescription>
                <SocialLinks>
                  <SocialIcon href="#" aria-label="Twitter">
                    <TwitterIcon />
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.linkedin.com/company/xeltontechs/?viewAsMember=true"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </SocialIcon>
                </SocialLinks>
              </LogoSection>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <NavSection>
                <SectionTitle>Quick Links</SectionTitle>
                <NavLinks to="/about">About Us</NavLinks>
                {/* <NavLinks to="/services">Services</NavLinks> */}
                <NavLinks to="/contact">Contact</NavLinks>
                <NavLinks to="/privacy">Privacy Policy</NavLinks>
              </NavSection>
            </Grid>

            <Grid item lg={5} md={5} sm={12} xs={12}>
              <ContactSection>
                <SectionTitle>Get In Touch</SectionTitle>

                <ContactItem href="mailto:sales@xeltontechnologies.com.ng">
                  <ContactIcon>
                    <MailOutlineIcon />
                  </ContactIcon>
                  sales@xeltontechnologies.com.ng
                </ContactItem>

                <ContactItem href="tel:+2348067253462">
                  <ContactIcon>
                    <CallIcon />
                  </ContactIcon>
                  +234 806 725 3462
                </ContactItem>

                <ContactItem as="div">
                  <ContactIcon>
                    <LocationOnOutlinedIcon />
                  </ContactIcon>
                  52 Agungi Ajiran Road, Lekki, Lagos, Nigeria
                </ContactItem>
              </ContactSection>
            </Grid>
          </Grid>
        </FooterContent>

        <CopyrightSection>
          <Copyright>
            © {new Date().getFullYear()} Xelton Technologies (Nig.) Ltd. All
            rights reserved.
          </Copyright>
        </CopyrightSection>
      </StyledContainer>
    </StyledBox>
  );
}

export default Footer;
