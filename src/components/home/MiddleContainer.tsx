import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import img from '../../assets/virtual-img.png'

const StyledBox = styled(Box)`
width: 100%;
height: 546px;
flex-shrink: 0;
background: linear-gradient(143deg, rgba(0, 0, 0, 0.20) 10.85%, rgba(0, 0, 0, 0.20) 181.83%), #050507;
@media screen and (max-width: 900px) {
height: auto;
}
padding-bottom: 20px;
`
const StyledContainer = styled(Container)`

`
const InnerContainer = styled.div`
width: 100%;
height: 408px;
flex-shrink: 0;
@media screen and (max-width: 900px) {
height: 310px;
flex-shrink: 0;
}
`
const Image = styled.img`
width: 100%;
height: 100%;
margin-top: -50%;
`
const ItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

height: 100%;
@media screen and(min-width: 900px) {
    height: 678px;
    flex-shrink: 0;
    align-items: center;
}
`
const Items = styled.p`
color: #FFF;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
@media screen and (max-width: 900px) {
    color: #FFF;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
}
`
const ContactBtn = styled.button`
display: flex;
width: 212px;
height: 56px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #F00;
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
color: #F00;
font-family: Puritan;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.08px;
    }
`
const Span = styled.span`
color: #AEA196;
font-family: Puritan;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.462px;
@media screen and (max-width: 900px) {
    color: #AEA196;
    font-family: Puritan;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.297px;
}
`
const EmptyContainer =  styled.div`
width: 250px;
margin-top: 20%;
position: relative;
height: 226px;
flex-shrink: 0;
border-radius: 315px;
background: linear-gradient(180deg, rgba(211, 149, 99, 0.20) 0%, rgba(234, 186, 143, 0.20) 100%), linear-gradient(180deg, #F00 0%, rgba(227, 40, 40, 0.00) 100%);
filter: blur(166.5px);
`

function MiddleContainer() {
  return (
    <StyledBox>
        <StyledContainer>
        <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <InnerContainer>
                    <EmptyContainer></EmptyContainer>
                  <Image src={img} />
                </InnerContainer>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ItemContainer>
                     <Items>
                     We pride ourselves on our commitment to delivery 
                     high-quality software that goes beyond expectations. 
                     With a focus on <Span>innovation</Span> and <Span>scalable Technologies</Span>
                     </Items>
                     <ContactBtn>Connect with us</ContactBtn>
                    </ItemContainer>
            </Grid>
        </Grid>
        </StyledContainer>
    </StyledBox>
  )
}

export default MiddleContainer