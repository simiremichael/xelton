import TopContainer from "../components/home/TopContainer";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import WhatWeDo from "../components/home/WhatWeDo";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MiddleContainer from "../components/home/MiddleContainer";
import BottomContainer from "../components/home/BottomContainer";
import Footer from "../components/footer/Footer";

const StyledBox = styled(Box)`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  min-height: 100vh;
  overflow-x: hidden;
`;

interface HomeProps {
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

function Home({ formData, setFormData, sendEmail, form }: HomeProps) {
  return (
    <StyledBox>
      <TopContainer
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <WhatWeDo />
      <WhyChooseUs />
      <MiddleContainer
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <BottomContainer
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <Footer />
    </StyledBox>
  );
}

export default Home;
