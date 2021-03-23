import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Icon from "../atoms/Icon"

const ContactCardWrapper = styled(Link)`
  width: 400px;
  height: 100px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
  border-radius: 80px 0px 0px 80px;
  display: flex;
  flex-direction: row;
  transition: all 0.3s;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 500;
    width: calc(471px - 132px);
    padding: 0 20px;
  }
  i {
    margin-left: -5px;
    transition: transform 0.3s;
    height: 100px;
  }
  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
    i {
      filter: brightness(2.32) contrast(1.53) grayscale(0.03) hue-rotate(200deg)
        saturate(3);
      transform: rotate(-20deg);
    }
  }

  // RWD
  
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 250px;
    height: 65px;
    p{
      font-size: .8em;
    }
    i {
    height: 80px;
    }

  }

`

const ContactCard = ({ type, href, link }) => (
  <ContactCardWrapper to={link} href={href}>
    {type === "message" && (
      <>
        <Icon type="Send" />
        <p>Wyślij nam wiadomość</p>
      </>
    )}
    {type === "call" && (
      <>
        <Icon type="Phone_G" />
        <p>Lub zadzwoń do nas! +48 697 602 287</p>
      </>
    )}
  </ContactCardWrapper>
)

export default ContactCard
