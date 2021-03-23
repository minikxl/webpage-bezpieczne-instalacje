import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  div {
    width: 100%;
    ${({ half }) => half && `width: 50%;`}
    height: 1px;
    background: ${({ theme }) => theme.colors.y500};
  }
  ${({ center }) => center && `text-align: center;`}
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    h2{
      font-size: 2.1em;
    }
  }
`

const Header = ({ text, center, half }) => (
  <HeaderWrapper center={center} half={half}>
    <h2>{text}</h2>
    <div className="line"></div>
  </HeaderWrapper>
)

export default Header
