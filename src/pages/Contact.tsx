import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "../components/footer/Footer";
import { Container, Grid, TextField } from "@mui/material";
import SvgContainer from "../components/SvgContainer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HomeNavBar from "../components/navbar/HomeNavBar";

const StyledBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const StyledContainer = styled(Container)`
  padding: 4rem 0;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  background: linear-gradient(135deg, #fff 0%, #ff6b6b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  animation: slideInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InfoTitle = styled.h3`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
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
    text-align: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  &:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.1);
    border-color: rgba(255, 107, 107, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 0, 0, 0.2);
  }

  &:hover div {
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.4) 0%,
      rgba(255, 0, 0, 0.3) 100%
    );
    transform: scale(1.1);
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.2) 0%,
    rgba(255, 0, 0, 0.1) 100%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 1.5rem;
    color: #ff6b6b;
  }

  @media screen and (max-width: 600px) {
    width: 45px;
    height: 45px;

    svg {
      font-size: 1.3rem;
    }
  }
`;

const FormContainer = styled.form`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  animation: slideInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  color: #333;
  font-family: "Puritan", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #333;
  font-family: "Puritan", sans-serif;
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
  font-family: "Puritan", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface ContactProps {
  formData: { name: string; email: string; phone: string; message: string };
  setFormData: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  form: React.RefObject<HTMLFormElement>;
}

function Contact({ formData, setFormData, sendEmail, form }: ContactProps) {
  const text = "Contact";

  return (
    <StyledBox>
      <HomeNavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <SvgContainer text={text} />

      <StyledContainer>
        <SectionTitle>Get In Touch With Us</SectionTitle>

        <Grid container spacing={5} alignItems="stretch">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ContactInfoSection>
              <InfoTitle>Let's Start a Conversation</InfoTitle>

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
            </ContactInfoSection>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormContainer ref={form} onSubmit={sendEmail}>
              <FormTitle>Send Us a Message</FormTitle>

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
                  name="user_email"
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

              <SubmitButton type="submit">Send Message</SubmitButton>
            </FormContainer>
          </Grid>
        </Grid>
      </StyledContainer>

      <Footer />
    </StyledBox>
  );
}

export default Contact;
