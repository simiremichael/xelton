import styled from "@emotion/styled";
import { Grid, Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../../assets/virtual-img.png";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import React from "react";
import { Slide } from "react-awesome-reveal";

const StyledBox = styled(Box)`
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 0, 0, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: 350px;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem 0;

  @media screen and (max-width: 900px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

const MainText = styled.h2`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 2rem 0;

  @media screen and (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
`;

const HighlightText = styled.span`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff0000 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CTAButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.2) 0%,
    rgba(255, 0, 0, 0.1) 100%
  );
  border: 2px solid #ff0000;
  border-radius: 50px;
  color: #ff0000;
  font-family: "Puritan", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  align-self: flex-start;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.3) 0%,
      rgba(255, 0, 0, 0.2) 100%
    );
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.2);
  }

  @media screen and (max-width: 900px) {
    align-self: center;
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;
const ModalContainer = styled.form`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
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
  color: #1a1a1a;
  font-family: "Puritan", sans-serif;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
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

interface HomeProps {
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

function MiddleContainer({
  formData,
  setFormData,
  sendEmail,
  form,
}: HomeProps) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <StyledBox>
      <StyledContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" duration={1000}>
              <ImageContainer>
                <GlowEffect />
                <Image src={img} alt="Innovation" />
              </ImageContainer>
            </Slide>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" duration={1000} delay={200}>
              <ContentContainer>
                <MainText>
                  We pride ourselves on our commitment to delivering
                  high-quality software that goes beyond expectations. With a
                  focus on <HighlightText>innovation</HighlightText> and{" "}
                  <HighlightText>scalable technologies</HighlightText>.
                </MainText>
                <CTAButton onClick={handleOpenModal}>Connect with us</CTAButton>
              </ContentContainer>
            </Slide>
          </Grid>
        </Grid>
      </StyledContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="contact-modal"
        aria-describedby="contact-form"
      >
        <ModalContainer style={modalStyle} ref={form} onSubmit={sendEmail}>
          <ModalHeader>
            <ModalTitle>
              Share your ideas with us, and we'll get in touch quickly.
            </ModalTitle>
            <CloseButton onClick={handleCloseModal}>
              <HighlightOffOutlinedIcon />
            </CloseButton>
          </ModalHeader>

          <FormGroup>
            <Label>Full Name</Label>
            <StyledTextField
              required
              id="name"
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
              id="email"
              name="email"
              label="Enter your email address"
              type="email"
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
              id="phone"
              name="phone"
              label="Enter your phone number"
              type="tel"
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
              id="message"
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
        </ModalContainer>
      </Modal>
    </StyledBox>
  );
}

export default MiddleContainer;
