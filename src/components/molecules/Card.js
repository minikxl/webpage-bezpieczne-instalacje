import React from "react"
import styled from "styled-components"
import Icon from "../atoms/Icon"

const CardWrapper = styled.div`
  min-height: 314px;
  width: 410px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  padding: 27px 26px 30px 42px;
  margin: auto;
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 300px;
  }
`
const IconBG = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(253, 209, 5, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`
const StyledParagraph = styled.p`
  font-size: 13.5px;
  margin-top: 11px;
`

const Card = ({ type, header, children }) => (
  <CardWrapper>
    <IconBG>
      <Icon type={type} />
    </IconBG>
    <h3>{header}</h3>
    <StyledParagraph>{children}</StyledParagraph>
  </CardWrapper>
)

export default Card
