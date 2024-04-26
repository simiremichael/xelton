import TopContainer from "../components/home/TopContainer"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import WhatWeDo from "../components/home/WhatWeDo";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MiddleContainer from "../components/home/MiddleContainer";
import BottomContainer from "../components/home/BottomContainer";
import Footer from "../components/footer/Footer";
// import Container from '@mui/material/Container';


const StyledBox = styled(Box)`

`
// const StyledContainer = styled(Container)`

// `

function Home(props: {formData: any, setFormData: any, sendEmail: any, form: any}) {

    const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail
  const form = props.form

  return (
    <StyledBox>
        <TopContainer sendEmail={sendEmail}  formData={formData} setFormData={setFormData}  form={form} />
        <WhatWeDo />
        <WhyChooseUs />
        <MiddleContainer sendEmail={sendEmail}  formData={formData} setFormData={setFormData} form={form} />
        <BottomContainer sendEmail={sendEmail}  formData={formData} setFormData={setFormData} form={form} />
        <Footer />
    </StyledBox>
  )
}

export default Home