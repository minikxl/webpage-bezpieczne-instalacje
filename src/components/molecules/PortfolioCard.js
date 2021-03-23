import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.ligthgray};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  padding: 60px 5%;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  gap: 60px;

  &:nth-child(even) {
    flex-direction: row-reverse;
    div {
      transform: rotateY(180deg);
    }

    p {
      justify-content: flex-end;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    gap: 10px;
    padding: 20px 5%;
    display: flex;
    flex-direction: column;
    
    &:nth-child(even) {
      flex-direction: column;
      div { transform: rotateY(0); }
      p { justify-content: center; }
    }
  }
`
const StyledBG = styled.div`
  width: 70%;
  display: block;

  background-color: ${({ theme }) => theme.colors.y500};
  
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 80%;
  }
`
const StyledImage = styled(Image)`
  width: 100%;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({theme}) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.device.s}) {
    top: 4px;
    left: 4px;
  }
`
const StyledParagraph = styled.p`
  font-size: 1em;
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: .7em;
    justify-content: center;
    text-align: center;
  }
`

const PortfolioCard = ({ photo, alt, description }) => (
  <CardWrapper load="lazy">
    <StyledBG>
      <StyledImage fluid={photo} alt={alt} />
    </StyledBG>
    <StyledParagraph>{description}</StyledParagraph>
  </CardWrapper>
)

export default PortfolioCard
