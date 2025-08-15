import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import SvgContainer from "../components/SvgContainer";
import { Container, Grid } from "@mui/material";
import image from "../assets/about-img.png";
import bottomImg from "../assets/about-bottom-img.png";
import Footer from "../components/footer/Footer";
import HomeNavBar from "../components/navbar/HomeNavBar";
import { Fade, Slide } from "react-awesome-reveal";

const StyledBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const TopContainer = styled(Container)`
  padding: 4rem 0;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px) {
    height: 350px;
    margin-bottom: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem 0;

  @media screen and (max-width: 900px) {
    padding: 1rem 0;
  }
`;

const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

const ValuesSection = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 0, 0, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const ValuesCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem;
  max-width: 800px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  @media screen and (max-width: 900px) {
    margin: 0 1rem;
    padding: 2rem;
  }
`;

const ValuesTitle = styled.h3`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;

  background: linear-gradient(135deg, #fff 0%, #ff6b6b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ValuesText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const MissionSection = styled(Container)`
  padding: 4rem 0;
`;

const MissionImageContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(255, 0, 0, 0.3) 100%
    );
  }

  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;

const MissionTitle = styled.h2`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin: 0;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    padding: 1.5rem;
  }
`;

const MissionText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Puritan", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

interface AboutProps {
  formData: { name: string; email: string; phone: string; message: string };
  setFormData: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
  sendEmail: () => void;
  form: React.RefObject<HTMLFormElement>;
}

function About({ formData, setFormData, sendEmail, form }: AboutProps) {
  const text = "About Us";

  return (
    <StyledBox>
      <HomeNavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <SvgContainer text={text} />

      <TopContainer>
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Slide direction="left" duration={1000}>
              <ImageContainer>
                <StyledImage src={image} alt="About Xelton Technologies" />
              </ImageContainer>
            </Slide>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Slide direction="right" duration={1000} delay={200}>
              <ContentContainer>
                <ContentText>
                  We are a dynamic team of skilled professionals dedicated to
                  crafting cutting-edge solutions tailored to meet your unique
                  business needs. At Xelton Technology, we pride ourselves on
                  our commitment to delivering high-quality software that goes
                  beyond expectations.
                </ContentText>
                <ContentText>
                  Our mission is to empower businesses through transformative
                  digital experiences. Whether you're looking for custom
                  software development, mobile applications, or robust web
                  solutions, we are here to turn your vision into reality.
                </ContentText>
                <ContentText>
                  What sets us apart is not just our technical prowess but our
                  dedication to understanding your business objectives. We
                  believe in collaborative partnerships, working closely with
                  our clients to ensure that our solutions align seamlessly with
                  their goals.
                </ContentText>
              </ContentContainer>
            </Slide>
          </Grid>
        </Grid>
      </TopContainer>

      <ValuesSection>
        <Fade duration={1000}>
          <ValuesCard>
            <ValuesTitle>Our Values</ValuesTitle>
            <ValuesText>
              With the aptitude for creating new and innovative applications and
              an ability for renovating existing ones, Xelton has pioneered
              itself in Web Solutions, Custom Application Development, Mobile
              Applications, Search Engine Optimization, ERP Software and other
              comprehensive IT Services that drive business success.
            </ValuesText>
          </ValuesCard>
        </Fade>
      </ValuesSection>

      <MissionSection>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" duration={1000}>
              <MissionImageContainer
                style={{ backgroundImage: `url(${bottomImg})` }}
              >
                <MissionTitle>MISSION</MissionTitle>
              </MissionImageContainer>
            </Slide>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" duration={1000} delay={200}>
              <MissionContent>
                <MissionText>
                  Our mission is to create transformative digital solutions that
                  enable businesses to succeed in a rapidly changing
                  technological landscape. We deliver innovative software
                  experiences customized to exceed our clients' unique needs.
                </MissionText>
              </MissionContent>
            </Slide>
          </Grid>
        </Grid>
      </MissionSection>

      <Footer />
    </StyledBox>
  );
}

export default About;
