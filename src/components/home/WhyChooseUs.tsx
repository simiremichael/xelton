import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import whyGif from "../../assets/why-gif.gif";

const StyledBox = styled(Box)`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  
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
  
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const Heading = styled.h2`
  color: #fff;
  font-family: 'Puritan', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  
  background: linear-gradient(135deg, #fff 0%, #ff6b6b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubHeading = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Puritan', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #ff0000, rgba(255, 0, 0, 0.3));
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 1rem;
  }
`;

const TimelineItem = styled.div<{ index: number }>`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  ${props => props.index % 2 === 0 ? `
    justify-content: flex-start;
    
    @media (min-width: 769px) {
      padding-right: 50%;
    }
  ` : `
    justify-content: flex-end;
    
    @media (min-width: 769px) {
      padding-left: 50%;
    }
  `}
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 3rem;
  }
`;

const TimelineNumber = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Puritan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  z-index: 3;
  
  @media (max-width: 768px) {
    left: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const TimelineContent = styled.div<{ index: number }>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  max-width: 400px;
  position: relative;
  animation: ${props => props.index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${props => props.index * 0.2}s both;
  
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
  
  ${props => props.index % 2 === 0 ? `
    margin-right: 2rem;
    
    &::after {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid rgba(255, 255, 255, 0.1);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    
    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 1rem;
      
      &::after {
        left: -10px;
        right: auto;
        border-left: none;
        border-right: 10px solid rgba(255, 255, 255, 0.1);
      }
    }
  ` : `
    margin-left: 2rem;
    
    &::after {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-right: 10px solid rgba(255, 255, 255, 0.1);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  `}
  
  @media (max-width: 768px) {
    max-width: none;
    width: calc(100% - 1rem);
  }
`;

const ContentTitle = styled.h3`
  color: #fff;
  font-family: 'Puritan', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const ContentDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Puritan', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
`;

const reasons = [
  {
    title: "Tailored Excellence",
    description: "We craft custom solutions that perfectly align with your unique business requirements and goals."
  },
  {
    title: "Innovation at its Core",
    description: "We leverage cutting-edge technologies and innovative approaches to deliver future-ready solutions."
  },
  {
    title: "User-Centric Design",
    description: "Every solution we create prioritizes user experience, ensuring intuitive and engaging interfaces."
  },
  {
    title: "Agile Development",
    description: "Our agile methodology ensures rapid delivery, flexibility, and continuous improvement throughout the project."
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to deployment and beyond, we provide comprehensive support throughout your digital journey."
  }
];

function WhyChooseUs() {
  return (
    <StyledBox
      style={{
        backgroundImage: `url(${whyGif})`,
      }}
    >
      <StyledContainer>
        <SectionHeader>
          <Heading>Why Choose Us</Heading>
          <SubHeading>
            Discover what sets us apart and makes us the perfect partner for your digital transformation
          </SubHeading>
        </SectionHeader>
        
        <TimelineContainer>
          <TimelineLine />
          {reasons.map((reason, index) => (
            <TimelineItem key={index} index={index}>
              <TimelineNumber>{index + 1}</TimelineNumber>
              <TimelineContent index={index}>
                <ContentTitle>{reason.title}</ContentTitle>
                <ContentDescription>{reason.description}</ContentDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </StyledContainer>
    </StyledBox>
  );
}

export default WhyChooseUs;
