import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const StyledBox = styled(Box)`
  display: inline-flex;
  width: 100%;
  height: auto;
  justify-content: flex-end;
  align-items: center;
  gap: 19px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const StyledContainer = styled(Container)`
  height: auto;
`;
const InnerContainer = styled.div`
  @media screen and (max-width: 900px) {
    align-items: flex-start;
    margin-top: 15px;
    padding: 0 5%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.img`
  width: 47.76px;
  height: 35.311px;
  flex-shrink: 0;
  margin-right: -12px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  :active {
    font-weight: bold;
  }
`;
const LogoContent = styled.p`
  font-family: Slabo 27px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.297px;
  background: linear-gradient(
    83deg,
    #fff 55.33%,
    #d39563 133.93%,
    #2ac3d1 147.35%,
    #253138 147.35%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -10px;
`;
const ParagraphContainer = styled.div`
  display: flex;
  padding: 5px;
  width: auto;
  justify-content: flex-start;
  align-items: left;
`;
const Paragraph = styled.p`
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  text-align: 
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.264px;
   border-bottom: 1px solid var(--Stroke, rgba(108, 108, 117, 0.5));
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const Heading = styled.p`
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.33px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 10px;
    margin-left: 0px;
  }
`;
const Email = styled.p`
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  line-height: normal;
  letter-spacing: -0.264px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const Phone = styled.p`
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.264px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const Address = styled.p`
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.264px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const Copyright = styled.p`
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.264px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const EmailIcon = styled(MailOutlineIcon)`
  font-size: 28px;
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const PhoneIcon = styled(CallIcon)`
  font-size: 28px;
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const AddressIcon = styled(LocationOnOutlinedIcon)`
  font-size: 28px;
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <StyledBox>
      <StyledContainer>
        <Grid container>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <InnerContainer
              style={{
                height: "100%",
                display: "flex",
                width: "90%",
                overflowX: "hidden",
                alignItems: "self-start",
              }}
            >
              <LogoContainer>
                <StyledLink id="navbar" to="/">
                  <LogoContent>
                    <Logo src={logo} alt="logo" />
                    elton Technologies
                  </LogoContent>
                </StyledLink>
              </LogoContainer>
            </InnerContainer>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <InnerContainer
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <ParagraphContainer>
                <StyledLink to="/about">
                  <Paragraph>About us</Paragraph>
                </StyledLink>
              </ParagraphContainer>
              <ParagraphContainer>
                <StyledLink to="/contact">
                  <Paragraph>Contact</Paragraph>
                </StyledLink>
              </ParagraphContainer>
              <ParagraphContainer>
                <StyledLink to="/privacy">
                  <Paragraph>Privacy policy</Paragraph>
                </StyledLink>
              </ParagraphContainer>
            </InnerContainer>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <InnerContainer
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Heading>Contact Us</Heading>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:sales@xeltontechnologies.com.ng"
              >
                <Email>
                  <EmailIcon /> sales@xeltontechnologies.com.ng
                </Email>
              </a>
              <a style={{ textDecoration: "none" }} href="tel:08067253462">
                <Phone>
                  <PhoneIcon /> +2348067253462
                </Phone>
              </a>
              <Address>
                <AddressIcon /> 52 Agungi Ajiran Road, Lekki, Lagos, Nigeria
              </Address>
            </InnerContainer>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <InnerContainer
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Copyright>{`© Copyright ${new Date().getFullYear()} Xelton Technology (Nig.) Ltd`}</Copyright>
            </InnerContainer>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}

export default Footer;
