import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "../components/footer/Footer";
import { Container } from "@mui/material";
import SvgContainer from "../components/SvgContainer";
import HomeNavBar from "../components/navbar/HomeNavBar";

const StyledBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const StyledContainer = styled(Container)`
  padding: 4rem 0;
  position: relative;
  z-index: 1;
`;

const ContentCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 20%,
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

const Section = styled.div<{ index?: number }>`
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
  animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${props => (props.index || 0) * 0.1 + 0.2}s both;
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-family: "Puritan", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  position: relative;

  background: linear-gradient(135deg, #fff 0%, #ff6b6b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #ff0000 0%, #ff6b6b 100%);
    border-radius: 2px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0 0 1rem 0;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledList = styled.ul`
  margin: 1rem 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Puritan", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  list-style: none;

  &::before {
    content: "•";
    color: #ff6b6b;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.1) 0%,
    rgba(255, 0, 0, 0.05) 100%
  );
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 1rem;
  text-align: center;
`;

const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Puritan", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;

  a {
    color: #ff6b6b;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UpdateText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: "Puritan", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
`;

interface PrivacyProps {
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

function Privacy({ formData, setFormData, sendEmail, form }: PrivacyProps) {
  const text = "Privacy Policy";

  return (
    <StyledBox>
      <HomeNavBar
        sendEmail={sendEmail}
        formData={formData}
        setFormData={setFormData}
        form={form}
      />
      <SvgContainer text={text} />

      <StyledContainer>
        <ContentCard>
          <Section index={0}>
            <SectionTitle>1. Information We Collect</SectionTitle>
            <ContentText>
              We may collect the following types of information:
            </ContentText>
            <StyledList>
              <ListItem>
                Personal Information: Name, email address, contact details,
                and other information you voluntarily provide.
              </ListItem>
              <ListItem>
                User Data: Information about how you interact with our
                software, including log files, device information, and IP
                addresses.
              </ListItem>
            </StyledList>
          </Section>

          <Section index={1}>
            <SectionTitle>2. How We Use Your Information</SectionTitle>
            <ContentText>We use collected information for:</ContentText>
            <StyledList>
              <ListItem>
                Providing and maintaining our software services.
              </ListItem>
              <ListItem>
                Improving and customizing user experiences.
              </ListItem>
              <ListItem>
                Responding to your inquiries and support requests.
              </ListItem>
              <ListItem>Sending important notices and updates.</ListItem>
            </StyledList>
          </Section>

          <Section index={2}>
            <SectionTitle>3. Information Sharing</SectionTitle>
            <ContentText>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to third parties. However, we may
              share information with trusted third parties who assist us in
              operating our website, conducting our business, or servicing
              you.
            </ContentText>
          </Section>

          <Section index={3}>
            <SectionTitle>4. Data Security</SectionTitle>
            <ContentText>
              We implement security measures to protect your personal
              information. However, no method of transmission over the
              internet or electronic storage is completely secure. We cannot
              guarantee absolute security.
            </ContentText>
          </Section>

          <Section index={4}>
            <SectionTitle>
              5. Cookies and Tracking Technologies
            </SectionTitle>
            <ContentText>
              Our software may use cookies and similar tracking technologies
              to enhance user experience. You can adjust your browser
              settings to refuse cookies, but this may limit certain
              features.
            </ContentText>
          </Section>

          <Section index={5}>
            <SectionTitle>6. Your Choices</SectionTitle>
            <ContentText>
              You can choose not to provide certain information, but this
              may affect your ability to use specific features of our
              software. You may opt out of receiving promotional emails.
            </ContentText>
          </Section>

          <Section index={6}>
            <SectionTitle>7. Children's Privacy</SectionTitle>
            <ContentText>
              Our services are not directed at individuals under the age of
              13. We do not knowingly collect personal information from
              children. If you believe we have unintentionally collected
              such information, please contact us.
            </ContentText>
          </Section>

          <Section index={7}>
            <SectionTitle>8. Changes to This Privacy Policy</SectionTitle>
            <ContentText>
              We may update this Privacy Policy periodically. Check the
              "Last Updated" date to be aware of any changes. Your continued
              use of our services after changes indicates your acceptance.
            </ContentText>
          </Section>

          <Section index={8}>
            <SectionTitle>9. Contact Us</SectionTitle>
            <ContentText>
              If you have questions or concerns about our Privacy Policy,
              please contact us. By using our software, you agree to this
              Privacy Policy.
            </ContentText>
            <ContactInfo>
              <ContactText>
                Email us at{" "}
                <a href="mailto:info@xeltontechnologies.com.ng">
                  info@xeltontechnologies.com.ng
                </a>
              </ContactText>
            </ContactInfo>
          </Section>

          <LastUpdated>
            <UpdateText>
              Last Updated: {new Date().toLocaleDateString()}
            </UpdateText>
          </LastUpdated>
        </ContentCard>
      </StyledContainer>

      <Footer />
    </StyledBox>
  );
}

export default Privacy;
