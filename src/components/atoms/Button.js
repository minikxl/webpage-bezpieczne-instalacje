import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blackTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  height: 65px;
  width: 215px;
  font-size: 1.34em;
  font-weight: ${({ theme }) => theme.fontWeight.xl};
  border-radius: 7px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    ${({ theme }) => theme.transition.button}
  }

  &:disabled,
  &[disabled]{
    box-shadow: 0 0 10px -3px gray;
  }
`

const Button = ({ text, icon, onClick }) => (
  <StyledButton onClick={onClick}>
    {{ icon }.icon !== undefined && <Icon type={icon} />}
    {text}
  </StyledButton>
)

export default Button
