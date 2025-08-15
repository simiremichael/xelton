import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import vectorWeb from "../../assets/vector-web.svg";
import vectorErp from "../../assets/vector-erp.svg";
import vectorMobile from "../../assets/vector-mobile.svg";
import vectorUx from "../../assets/vector-ux.svg";


const StyledBox = styled(Box)`
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div<{ isVisible: boolean; scrollDirection: string }>`
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(${props => props.scrollDirection === 'down' ? '50px' : '-50px'});
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${props => props.isVisible && `
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media screen and (max-width: 600px) {
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

const Card = styled.div<{ index: number; isVisible: boolean; scrollDirection: string }>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(${props => props.scrollDirection === 'down' ? '60px' : '-60px'});
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${props => props.index * 0.1}s;
  
  ${props => props.isVisible && `
    opacity: 1;
    transform: translateY(0);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) !important;
    border-color: rgba(255, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(255, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
`;

const CardIcon = styled.img`
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
  
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const CardHeader = styled.h3`
  color: #fff;
  font-family: 'Puritan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CardContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Puritan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const services = [
  {
    icon: vectorErp,
    title: "Custom Software Development",
    description: "Tailored solutions designed to address the specific needs and challenges of your business, ensuring optimal performance and efficiency."
  },
  {
    icon: vectorMobile,
    title: "Mobile App Development",
    description: "Innovative mobile applications for iOS and Android platforms, combining user-centric design with seamless functionality to engage your target audience."
  },
  {
    icon: vectorWeb,
    title: "Web Development",
    description: "Robust and scalable web solutions, from dynamic websites to complex web applications, crafted to enhance your online presence and business growth."
  },
  {
    icon: vectorUx,
    title: "UI/UX Design",
    description: "Intuitive and visually appealing user interfaces, coupled with a focus on user experience, to ensure that your software not only functions flawlessly but is a pleasure to use."
  }
];

function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    window.addEventListener('scroll', handleScroll);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <StyledBox ref={sectionRef}>
      <StyledContainer>
        <SectionHeader isVisible={isVisible} scrollDirection={scrollDirection}>
          <Heading>What We Do To Serve You Best</Heading>
          <SubHeading>
            We deliver cutting-edge technology solutions that transform your business ideas into reality
          </SubHeading>
        </SectionHeader>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
              <Card index={index} isVisible={isVisible} scrollDirection={scrollDirection}>
                <IconContainer>
                  <CardIcon src={service.icon} alt={service.title} />
                </IconContainer>
                <CardHeader>{service.title}</CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}

export default WhatWeDo;
