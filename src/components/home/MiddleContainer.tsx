import styled from "@emotion/styled";
import { Grid, Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../../assets/virtual-img.png";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import React from "react";
import { Slide } from "react-awesome-reveal";

const StyledBox = styled(Box)`
  width: 100%;
  height: 546px;
  flex-shrink: 0;
  margin-bottom: 15px;
  @media screen and (max-width: 900px) {
    height: auto;
  }
  padding-bottom: 20px;
`;
const StyledContainer = styled(Container)``;
const InnerContainer = styled.div`
  width: 100%;
  height: 408px;
  flex-shrink: 0;
  position: relative;
  @media screen and (max-width: 900px) {
    height: 310px;
    flex-shrink: 0;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  top: -20%;
  position: absolute;
  left: 1%;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and(min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Items = styled.p`
  color: #fff;
  font-family: Puritan;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
  margin-top: 25%;
  @media screen and (max-width: 900px) {
    color: #fff;
    font-family: Puritan;
    font-size: 18px;
    margin-top: 0;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;
const ContactBtn = styled.button`
  display: flex;
  width: 212px;
  height: 56px;
  padding: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  margin-top: 10px;
  border: 0.71px solid rgba(255, 0, 0, 1);
  background: rgba(255, 0, 0, 0.12);
  color: #f00;
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.1px;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 159px;
    height: 38px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #f00;
    font-family: Puritan;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.08px;
  }
`;
const Span = styled.span`
  color: #aea196;
  font-family: Puritan;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
  @media screen and (max-width: 900px) {
    color: #aea196;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;
const EmptyContainer = styled.div`
  width: 250px;
  margin-top: 20%;
  position: relative;
  height: 226px;
  flex-shrink: 0;
  border-radius: 315px;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(211, 149, 99, 0.2) 0%,
      rgba(234, 186, 143, 0.2) 100%
    ),
    linear-gradient(180deg, #f00 0%, rgba(227, 40, 40, 0) 100%);
  filter: blur(166.5px);
  @media screen and (max-width: 900px) {
    height: 180px;
    filter: blur(146.5px);
  }
  @media screen and (max-width: 768px) {
    height: 160px;
    filter: blur(106.5px);
  }
  @media screen and (max-width: 600px) {
    height: 140px;
    filter: blur(86.5px);
  }
`;
const ModalContainer = styled.form`
  height: auto;
  padding: 10px;
  border-radius: 20px;
  background: #fff;
  margin: 20px 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 2.3px 2px 0px rgba(0, 0, 0, 0.18);
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitBtn = styled.button`
  margintop: 10px;
  display: flex;
  width: 212px;
  height: 56px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.71px solid rgba(255, 0, 0, 1);
  background: rgba(255, 0, 0, 0.12);
  color: #f00;
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.1px;
  margin-top: 8px;
  @media screen and (max-width: 600px) {
    width: 159px;
    height: 38px;
    padding: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.08px;
  }
`;
const TextFields = styled(TextField)`
  background: rgba(217, 217, 217, 0.4);
  margin: 5px 0 12px 0;
`;
const Label = styled.label`
  color: #000;
  font-family: Puritan;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.33px;
  text-align: start;
  @media screen and (max-width: 600px) {
    color: #000;
    font-family: Puritan;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.231px;
  }
`;
const Title = styled.h3`
  color: #050507;
  font-family: Puritan;
  font-size: 26px;
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.462px;
  @media screen and (max-width: 600px) {
    color: #050507;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;
const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const style = {
  position: "absolute",
  top: "46%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 380,
  p: 4,
};

interface HomeProps {
  formData: any;
  setFormData: (data: any) => void;
  sendEmail: (data: any) => void;
  form: any;
}

function MiddleContainer(props: HomeProps) {
  const formData = props.formData;
  const setFormData = props.setFormData;
  const sendEmail = props.sendEmail;
  const form = props.form;

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <StyledBox>
      <StyledContainer>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <InnerContainer>
              <EmptyContainer></EmptyContainer>
              <Image src={img} alt="image" />
            </InnerContainer>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* <JackInTheBox duration={2000}> */}
            <Slide direction="right" duration={2000}>
              <ItemContainer>
                <Items>
                  We pride ourselves on our commitment to delivery high-quality
                  software that goes beyond expectations. With a focus on{" "}
                  <Span>innovation</Span> and <Span>scalable Technologies</Span>
                </Items>
                <ContactBtn onClick={handleOpenModal}>
                  Connect with us
                </ContactBtn>
              </ItemContainer>
            </Slide>
            {/* </JackInTheBox> */}
          </Grid>
        </Grid>
      </StyledContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Grid container spacing={2}>
            <Grid item lg={2.5} md={2.5} sm={2} xs={0}></Grid>
            <Grid item lg={7} md={7} sm={8} xs={12}> */}
        <ModalContainer
          style={style as React.CSSProperties}
          ref={form}
          onSubmit={sendEmail}
        >
          <CloseIconContainer>
            <HighlightOffOutlinedIcon
              onClick={handleCloseModal}
              style={{
                fontSize: 24,
                cursor: "pointer",
                color: "#000",
                marginTop: 15,
                marginRight: 15,
              }}
            />
          </CloseIconContainer>
          <Title>
            Share your ideas with us, and we will get in touch quickly.
          </Title>
          <Label>Full Name</Label>
          <TextFields
            required
            id="name"
            name="name"
            label="Full Name"
            value={formData.name}
            fullWidth
            size="small"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <Label>Email</Label>
          <TextFields
            required
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            fullWidth
            size="small"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Label>Phone</Label>
          <TextFields
            required
            id="phone"
            name="phone"
            label="Phone"
            type="number"
            value={formData.phone}
            fullWidth
            size="small"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Label>Message</Label>
          <TextFields
            id="message"
            name="message"
            label="Message"
            multiline
            fullWidth
            rows={4}
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <BtnContainer>
            <SubmitBtn value="send" type="submit">
              Submit
            </SubmitBtn>
          </BtnContainer>
        </ModalContainer>
        {/* </Grid>
            <Grid item lg={2.5} md={2.5} sm={2} xs={0}></Grid>
          </Grid> */}
      </Modal>
    </StyledBox>
  );
}

export default MiddleContainer;
