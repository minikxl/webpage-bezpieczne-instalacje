import React from "react"
import styled from "styled-components"
import ArrowLandingPage from "../../assets/images/icons/arrow-LandingPage.svg"
import Arrow from "../../assets/images/icons/arrow.svg"
import A from "../../assets/images/icons/A.svg"
import B from "../../assets/images/icons/B.svg"
import C from "../../assets/images/icons/C.svg"
import Eco from "../../assets/images/icons/Eco.svg"
import Montage from "../../assets/images/icons/Montage.svg"
import Phone_G from "../../assets/images/icons/Phone_G.svg"
import Phone_Y from "../../assets/images/icons/Phone_Y.svg"
import Safety from "../../assets/images/icons/Safety.svg"
import Send from "../../assets/images/icons/Send.svg"
import Phone from "../../assets/images/icons/Phone.svg"
import Mail from "../../assets/images/icons/Mail.svg"
import Location from "../../assets/images/icons/Location.svg"
import Support from "../../assets/images/icons/Support.svg"

/*
  <Icon type="ArrowLandingPage"/>
  <Icon type="Arrow"/>
  <Icon type="A"/>
  <Icon type="B"/>
  <Icon type="Eco"/>
  <Icon type="Montage"/>
  <Icon type="Phone_G"/>
  <Icon type="Phone_Y"/>
  <Icon type="Safety"/>
  <Icon type="Send"/>
  <Icon type="Phone"/>
  <Icon type="Mail"/>
  <Icon type="Location"/>
  <Icon type="Support"/>
 */

const StyledIcon = styled.i`
  position: relative;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  /* padding: 20px; */
  width: 32px;
  height: 32px;
  ${({ icon }) =>
    icon === "ArrowLandingPage" &&
    `
    background-image: url( ${ArrowLandingPage} );
    top: 20px;
    width: 45px;
    height: 32px;
    
    `}
  ${({ icon }) =>
    icon === "Arrow" &&
    `
    background-image: url( ${Arrow} );
    `}
  ${({ icon }) =>
    icon === "A" &&
    `
    background-image: url( ${A} );
    `}
  ${({ icon }) =>
    icon === "B" &&
    `
    background-image: url( ${B} );
    `}
  ${({ icon }) =>
    icon === "C" &&
    `
    background-image: url( ${C} );
    `}
  ${({ icon }) =>
    icon === "Eco" &&
    `
    background-image: url( ${Eco} );
    width: 38px;
    height: 42px;
    `}
  ${({ icon }) =>
    icon === "Montage" &&
    `
    background-image: url( ${Montage} );
    width: 45px;
    height: 32px;
    
    `}
  ${({ icon }) =>
    icon === "Phone_G" &&
    `
    background-image: url( ${Phone_G} );
    width: 132px;
    height: 132px;
    `}
  ${({ icon }) =>
    icon === "Phone_Y" &&
    `
    background-image: url( ${Phone_Y} );
    `}
  ${({ icon }) =>
    icon === "Safety" &&
    `
    background-image: url( ${Safety} );
    width: 32px;
    height: 37px;
    `}
  ${({ icon }) =>
    icon === "Send" &&
    `
    background-image: url( ${Send} );
    width: 132px;
    height: 132px;
    `}
  ${({ icon }) =>
    icon === "Phone" &&
    `
    background-image: url( ${Phone} );
    width: 33px;
    height: 33px;
    `}
  ${({ icon }) =>
    icon === "Mail" &&
    `
    background-image: url( ${Mail} );
    background-size: contain;
    width: 33px;
    `}
  ${({ icon }) =>
    icon === "Location" &&
    `
    background-image: url( ${Location} );
    width: 33px;
    height: 33px;
    `}
  ${({ icon }) =>
    icon === "Support" &&
    `
    background-image: url( ${Support} );
    width: 40px;
    height: 40px;
    `}
`

const Icon = ({ type }) => <StyledIcon icon={type}></StyledIcon>

export default Icon
