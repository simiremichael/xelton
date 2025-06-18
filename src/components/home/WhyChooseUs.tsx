import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import whyGif from "../../assets/why-gif.gif";
import { Fade } from "react-awesome-reveal";

const StyledBox = styled(Box)`
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding-bottom: 30px;
`;
const StyledContainer = styled(Container)`
  height: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h2`
  color: #fff;
  font-family: Puritan;
  font-size: 28px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
  @media (max-width: 600px) {
    color: #fff;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 300px;
  @media (max-width: 600px) {
    height: 540px;
  }
`;
const InnerDetaisContainer = styled.div`
  border-top: 2px dotted #f00;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10%;
  border-radius: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const NumberContainer = styled.div`
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 64px;
  background: #fff;
`;
const Numbers = styled.p`
  color: #f00;
  font-family: Puritan;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
`;
const Divider = styled.div`
  height: 160px;
  position: absolute;
  z-index: 1300;
  margin-top: 220px;
  border: 1.5px dotted #f00;
`;
const Content = styled.p`
  color: #fff;
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.33px;
  margin-top: 420px;
  position: absolute;
  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;

const InnderDetailsMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 2px dotted #f00;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 2%;
  margin-top: 10px;
  height: 520px;
  width: 100%;
  border-radius: 10px;
  @media (min-width: 601px) {
    display: none;
  }
`;
const MobileNumberContainer = styled.div`
  display: inline-flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 64px;
  background: #fff;
`;
const MobileNumber = styled.p`
  color: #f00;
  font-family: Puritan;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.297px;
`;
const MobileDivider = styled.div`
  width: 78px;
  position: absolute;
  z-index: 1300;
  border: 1.5px dotted #f00;
  margin-left: 120px;
`;
const MobileNumberContent = styled.p`
  color: #fff;
  font-family: Puritan;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.297px;
  position: absolute;
  left: 0;
  margin-left: 150px;
  width: 20%;
  width: 180px;
`;
// style={{
//   backgroundImage: `url(${whyGif})`,
// }}

function WhyChooseUs() {
  return (
    <StyledBox>
      <Fade duration={5000}>
        <StyledContainer>
          <Heading>Why Choose Us</Heading>
          <InnerContainer>
            <InnerDetaisContainer>
              <NumberContainer>
                <Numbers>1</Numbers>
                <Divider></Divider>
                <Content>Tailored Excellence</Content>
              </NumberContainer>
              <NumberContainer>
                <Numbers>2</Numbers>
                <Divider></Divider>
                <Content>Innovation at its Core</Content>
              </NumberContainer>
              <NumberContainer>
                <Numbers>3</Numbers>
                <Divider></Divider>
                <Content>User-Centric Design</Content>
              </NumberContainer>
              <NumberContainer>
                <Numbers>4</Numbers>
                <Divider></Divider>
                <Content>Agile Development</Content>
              </NumberContainer>
              <NumberContainer>
                <Numbers>5</Numbers>
                <Divider></Divider>
                <Content>End-to-End Solution</Content>
              </NumberContainer>
            </InnerDetaisContainer>
            <InnderDetailsMobileContainer>
              <MobileNumberContainer>
                <MobileNumber>1</MobileNumber>
                <MobileDivider></MobileDivider>
                <MobileNumberContent>Tailored Excellence</MobileNumberContent>
              </MobileNumberContainer>
              <MobileNumberContainer>
                <MobileNumber>2</MobileNumber>
                <MobileDivider></MobileDivider>
                <MobileNumberContent>
                  Innovation at its Core
                </MobileNumberContent>
              </MobileNumberContainer>
              <MobileNumberContainer>
                <MobileNumber>3</MobileNumber>
                <MobileDivider></MobileDivider>
                <MobileNumberContent>User-Centric Design</MobileNumberContent>
              </MobileNumberContainer>
              <MobileNumberContainer>
                <MobileNumber>4</MobileNumber>
                <MobileDivider></MobileDivider>
                <MobileNumberContent>Agile Development</MobileNumberContent>
              </MobileNumberContainer>
              <MobileNumberContainer>
                <MobileNumber>5</MobileNumber>
                <MobileDivider></MobileDivider>
                <MobileNumberContent>End-to-End Solution</MobileNumberContent>
              </MobileNumberContainer>
            </InnderDetailsMobileContainer>
          </InnerContainer>
        </StyledContainer>
      </Fade>
    </StyledBox>
  );
}

export default WhyChooseUs;
