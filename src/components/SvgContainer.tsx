import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledBox = styled(Box)`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  fill: linear-gradient(180deg, #1c2238 0%, #050507 100%);
`;
const Svg = styled.svg`
  top: 0;
  height: 184px @media screen and (max-width: 600px) {
    height: 113px;
  }
`;
const Heading = styled.h2`
  color: #fff;
  font-family: Puritan;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.627px;
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: -11%;
  @media screen and (max-width: 600px) {
    color: #fff;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
  }
`;

function SvgContainer(props: { text: string }) {
  const text = props.text;
  return (
    <StyledBox>
      <HeaderContainer>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 184"
          fill="none"
        >
          <path
            d="M0 0H1440V180C1440 180 1176 194 1136 168C1096 142 776 202 718 154C660 106 356 192 298 180C240 168 0 180 0 180V0Z"
            fill="url(#paint0_linear_741_288)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_741_288"
              x1="720"
              y1="0"
              x2="720"
              y2="183.764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1C2238" />
              <stop offset="1" stopColor="#050507" />
            </linearGradient>
          </defs>
        </Svg>
        <Heading>{text}</Heading>
      </HeaderContainer>
    </StyledBox>
  );
}

export default SvgContainer;
