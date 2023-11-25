import TopContainer from "../components/home/TopContainer"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import WhatWeDo from "../components/home/WhatWeDo";
// import Container from '@mui/material/Container';


const StyledBox = styled(Box)`
width: 100%;
height: 100%;
`
// const StyledContainer = styled(Container)`

// `

function Home() {
  return (
    <StyledBox>
        <TopContainer />
        <WhatWeDo />
    </StyledBox>
  )
}

export default Home