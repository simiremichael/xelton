import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "../components/footer/Footer";
import { Container } from "@mui/material";
import SvgContainer from "../components/SvgContainer";
import HomeNavBar from "../components/navbar/HomeNavBar";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
`;
const StyledContainer = styled(Container)`
  margin: 20px 0;
`;
const TextContainer = styled.div``;
const Title = styled.h3`
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.33px;
  margin-bottom: 0;
  @media screen and (max-width: 600px) {
    font-family: Puritan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.198px;
  }
`;
const List = styled.li`
  font-family: Puritan;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  list-style-type: circle;
  list-style-position: inside;
  line-height: normal;
  letter-spacing: -0.33px;
  margin-top: 0;
  @media screen and (max-width: 600px) {
    font-family: Puritan;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.198px;
  }
`;
const P = styled.p`
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.33px;
  margin: 8px 0;
  @media screen and (max-width: 600px) {
    font-family: Puritan;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.198px;
  }
`;

interface PrivacyProps {
  formData: any;
  setFormData: (data: any) => void;
  sendEmail: (data: any) => void;
  form: any;
}

function Privacy(props: PrivacyProps) {
  const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail;
  const form = props.form;

  const text = "Privacy Policy";
  return (
    <StyledBox>
      <HomeNavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      {/* <NavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      /> */}
      <SvgContainer text={text} />
      <StyledContainer>
        <TextContainer>
          <Title>1. Information We Collect</Title>
          <P>We may collect the following types of information:</P>
          <ul style={{ marginBottom: 10 }}>
            <List>
              Personal Information: Name, email address, contact details, and
              other information you voluntarily provide.
            </List>
            <List>
              User Data: Information about how you interact with our software,
              including log files, device information, and IP addresses.
            </List>
          </ul>
          <Title>2. How We Use Your Information</Title>
          <P>We use collected information for:</P>
          <ul style={{ marginBottom: 10 }}>
            <List>Providing and maintaining our software services.</List>
            <List>Improving and customizing user experiences.</List>
            <List>Responding to your inquiries and support requests.</List>
            <List>Sending important notices and updates.</List>
          </ul>
          <Title>3. Information Sharing</Title>
          <P>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to third parties. However, we may share
            information with trusted third parties who assist us in operating
            our website, conducting our business, or servicing you.
          </P>

          <Title>4. Data Security</Title>
          <P>
            We implement security measures to protect your personal information.
            However, no method of transmission over the internet or electronic
            storage is completely secure. We cannot guarantee absolute security.
          </P>

          <Title>5. Cookies and Tracking Technologies</Title>
          <P>
            Our software may use cookies and similar tracking technologies to
            enhance user experience. You can adjust your browser settings to
            refuse cookies, but this may limit certain features.
          </P>

          <Title>6. Your Choices</Title>
          <P>
            You can choose not to provide certain information, but this may
            affect your ability to use specific features of our software. You
            may opt out of receiving promotional emails.
          </P>

          <Title>7. Children's Privacy</Title>
          <P>
            Our services are not directed at individuals under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe we have unintentionally collected such information, please
            contact us.
          </P>

          <Title>8. Changes to This Privacy Policy</Title>
          <P>
            We may update this Privacy Policy periodically. Check the "Last
            Updated" date to be aware of any changes. Your continued use of our
            services after changes indicates your acceptance.
          </P>

          <Title>9. Contact Us</Title>
          <P>
            If you have questions or concerns about our Privacy Policy, please
            contact us at info@xeltontechnologies.com.ng. By using our software,
            you agree to this Privacy Policy.
          </P>
        </TextContainer>
      </StyledContainer>
      <Footer />
    </StyledBox>
  );
}

export default Privacy;
