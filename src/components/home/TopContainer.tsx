import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import image1 from "../../assets/web.jpg";
import image2 from "../../assets/erp.webp";
import image3 from "../../assets/mobile.jpeg";
import image4 from "../../assets/uiux.jpg";
import ellipse from "../../assets/Ellipse1.svg";
import HomeNavBar from "../navbar/HomeNavBar";

const StyledBox = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100vh;
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
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 1s ease-in-out, transform 6s ease-in-out;
  opacity: 1;
  transform: scale(1);
  animation: scaleAnimation 6s ease-in-out infinite;

  @keyframes scaleAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    background-size: cover;
    background-position: center center;
  }

  @media screen and (max-width: 480px) {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }

  &.fade-out {
    opacity: 0;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;

  @media screen and (max-width: 600px) {
    height: 90vh;
    padding-top: 60px;
  }
`;

const ContentContainer = styled.div<{ key?: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  max-width: 600px;
  animation: fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 1.5rem;
    max-width: 100%;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  animation: zoomIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ContentIcon = styled.img`
  width: 16px;
  height: 16px;

  @media screen and (max-width: 600px) {
    width: 12px;
    height: 12px;
  }
`;

const MainHeading = styled.h1`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  animation: zoomIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;

  background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
`;

const SubHeading = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
  animation: fadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const ProgressDot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "#ff0000" : "rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.active ? "#ff0000" : "rgba(255, 255, 255, 0.6)"};
  }
`;

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

const slides = [
  {
    image: image1,
    badge: "Software Engineering",
    title: "Web Development",
    subtitle:
      "Robust and scalable web solutions crafted to enhance your online presence and drive business growth.",
  },
  {
    image: image2,
    badge: "Software Development",
    title: "ERP Software",
    subtitle:
      "Comprehensive enterprise solutions designed to streamline your business operations and boost efficiency.",
  },
  {
    image: image3,
    badge: "Mobile Application",
    title: "Mobile App Development",
    subtitle:
      "Innovative mobile applications for iOS and Android platforms with seamless user experience.",
  },
  {
    image: image4,
    badge: "Design",
    title: "UI/UX Design",
    subtitle:
      "Intuitive and visually appealing interfaces that deliver exceptional user experiences.",
  },
];

function TopContainer({ formData, setFormData, sendEmail, form }: HomeProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const currentSlide = slides[currentImageIndex];

  return (
    <StyledBox>
      <BackgroundImage
        backgroundImage={currentSlide.image}
        className={isTransitioning ? "fade-out" : ""}
      />
      <HomeNavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <StyledContainer>
        <ContentContainer key={currentImageIndex}>
          <Badge>
            <ContentIcon src={ellipse} />
            {currentSlide.badge}
          </Badge>
          <MainHeading>{currentSlide.title}</MainHeading>
          <SubHeading>{currentSlide.subtitle}</SubHeading>
        </ContentContainer>
      </StyledContainer>
      <ProgressBar>
        {slides.map((_, index) => (
          <ProgressDot
            key={index}
            active={index === currentImageIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ProgressBar>
    </StyledBox>
  );
}

export default TopContainer;
