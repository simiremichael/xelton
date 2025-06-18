import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import vectorWeb from "../../assets/vector-web.svg";
import vectorErp from "../../assets/vector-erp.svg";
import vectorMobile from "../../assets/vector-mobile.svg";
import vectorUx from "../../assets/vector-ux.svg";
import { Slide } from "react-awesome-reveal";

const StyledBox = styled(Box)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20px;
  display: flex;
`;
const StyledContainer = styled(Container)`
  height: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h3`
  font-family: Puritan;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
  text-align: center;
  padding-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 333px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 224px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
const CardIcon = styled.img`
  @media screen and (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
  @media screen and (min-width: 600px) {
    width: 52px;
    height: 52px;
  }
`;
const CardHeader = styled.h4`
  color: #fff;
  font-family: Puritan;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.363px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  @media screen and (max-width: 600px) {
    color: #fff;
    font-family: Puritan;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.264px;
  }
`;
const CardContentContainer = styled.div`
  margin: 0 5%;
`;
const CardContent = styled.p`
  color: rgba(217, 217, 217, 0.79);
  text-align: center;
  font-family: Puritan;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.297px;
  margin-top: 0;
  @media screen and (max-width: 600px) {
    color: rgba(217, 217, 217, 0.79);
    text-align: center;
    font-family: Puritan;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.198px;
  }
`;

// style={{
//   backgroundImage: `url(${backImg})`,
// }}

function WhatWeDo() {
  return (
    <StyledBox>
      <StyledContainer>
        <Heading>What We Do To Serve You Best</Heading>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Slide direction="up">
              <Card>
                <CardIcon src={vectorErp} alt="image" />
                <CardHeader>Custom Software Development</CardHeader>
                <CardContentContainer>
                  <CardContent>
                    Tailored solutions designed to address the specific needs
                    and challenges of your business, ensuring optimal
                    performance and efficiency.
                  </CardContent>
                </CardContentContainer>
              </Card>
            </Slide>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Slide direction="up">
              <Card>
                <CardIcon src={vectorMobile} alt="image" />
                <CardHeader>Mobile App Development</CardHeader>
                <CardContentContainer>
                  <CardContent>
                    Innovative mobile applications for IOS and Android
                    platforms, combining user-centric design with seamless
                    functionality to engage your target audience.
                  </CardContent>
                </CardContentContainer>
              </Card>
            </Slide>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Slide direction="up">
              <Card>
                <CardIcon src={vectorWeb} alt="image" />
                <CardHeader>Web Development</CardHeader>
                <CardContentContainer>
                  <CardContent>
                    Robust and scalable web solutions, from dynamic websites to
                    complex web applications, crafted to enhance your online
                    presence and business growth.
                  </CardContent>
                </CardContentContainer>
              </Card>
            </Slide>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Slide direction="up">
              <Card>
                <CardIcon src={vectorUx} alt="image" />
                <CardHeader>UI/UX Design</CardHeader>
                <CardContentContainer>
                  <CardContent>
                    Intuitive and visually appealing user interfaces, coupled
                    with a focus on user experience, to ensure that your
                    software not only flawlessly but is a pleasure to use.
                  </CardContent>
                </CardContentContainer>
              </Card>
            </Slide>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}

export default WhatWeDo;
