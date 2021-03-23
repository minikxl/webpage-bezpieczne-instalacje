import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import Phone from "../../assets/images/icons/Phone_Y.svg"
import MainLogo from "../atoms/Logo"

const StyledNav = styled.nav`
  z-index: 9000;
  position: absolute;
  width: 100%;
  height: 110px;
  background: ${({ theme }) => theme.colors.blackTransparent};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.41);
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-evenly;
  align-items: center;
  /* padding: 0 50px; */
 
  /* line */
  &::after {
    content: "";
    width: 85%;
    height: 1px;
    background: rgba(253, 209, 5, 0.7);
    position: absolute;
    top: 85px;
    right: 0;

    @media (max-width: ${({ theme }) => theme.device.xl}) {
    display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    gap: 20px;
    ${({hamburger}) => hamburger && css`
      ${console.log("afas")}
      position: fixed;
    `}
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    /* justify-content: space-between; */
  }
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  gap: 20px;

  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    font-size: 1em;
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 1.8em;
    gap: 40px;
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
   font-size: 1.2em; 
   gap: 5px;
   img{
     width: 12%;
   }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  border-top: 4px solid white;
  width: 30px;
  height: 25px;
  background: transparent;
  transition: 0.3s transform linear;
  &::before, &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 4px solid white;
    transform: translateY(5px);
  }

  &::after{
    transform: translateY(15px);
    transition: 0.3s transform linear;
  }

  ${({hamburger}) => hamburger && css`
      transform: rotate(45deg);
      border: none;
      &::after{
        transform: rotate(-90deg) translateX(-5px) ;
      }
  `
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: block;
  }
`;

const NavigationList = styled.ul`
  
  list-style: none;
  display: flex;
  gap: 15px;
  margin-top: 17px;
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    top: -100%;
    transition: top 1s;
    display: none;
    position: fixed;
    z-index: -1;
    ${({hamburger}) => hamburger && css`
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 3em;
      background: ${({theme}) => theme.colors.black};
    `
    }
  }
`

const NavigationListItem = styled.li`
  min-width: 115px;
  height: 42px;
  background: ${({ theme }) => theme.colors.blackTransparent};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 15px; */
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: 1em;
  white-space: nowrap;
  transition: all 0.2s linear;
  a {
    padding: 0 20px;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  //action
  &:hover {
    /* ${({ theme }) => theme.transition.button}; */
    background: rgba(50, 50, 50, 0.3);
    box-shadow: 5px 5px 25px black;
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    width: 112px;
    font-size: .8em;
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 70%;
    font-size: 1.8em;
    height: 10%;
    background: ${({ theme }) => theme.colors.blackTransparent};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    text-transform: uppercase;
    a{
      border-left: .6em solid ${({ theme }) => theme.colors.y700};
    }
    .activeLink{
      border-left: .6em solid ${({ theme }) => theme.colors.white};
      border-bottom: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 1.2em;     
  }
`

const StyledContact = styled.a`
  width: 259px;
  height: 60px;
  margin-top: -5px;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 32px 0px 0px 32px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: repeat(2, 50%);
  text-align: center;
  padding: 10px;
  z-index: 9001;
  div {
    background-image: url(${Phone});
    background-size: contain;
    background-repeat: no-repeat;
    grid-column: 1;
    grid-row: 1/3;
    height: 50px;
    width: 50px;
    margin-top: -1px;
    transition: all 0.2s;
  }
  p {
    display: block;
    margin: 0;
    font-size: 1rem;
  }
  p:nth-child(even) {
    color: #fdd105;
    font-weight: ${({ theme }) => theme.fontWeight.l};
    font-size: 1.1em;
  }
  p:nth-child(odd) {
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }

  // actions
  &:hover {
    cursor: pointer;
  }
  &:hover div {
    transform: scale(1.2) rotate(-7deg);
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    width: 50px;
    height: 50px;
    margin-right: -50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    animation: ContactGrow 3s linear 1s infinite normal;
    p {
      display: none;
    }
    div {
      position: absolute;
      width: 50px;
      height: 50px;
      margin: 0;
      top: 7%;
      left: 7%;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: none;
    ${({hamburger}) => hamburger && css`
      position: absolute;
      display: grid;
      top: 86vh;
      width: 259px;
      height: 80px;
      border-radius: 5px;
      margin: 0;
      padding: 20px;
      animation-duration: 8s;
      p {
      display: block;
      }
      div{
        position: relative;
      }
    `
    }
  }
`

const Navigation = () => {
  const [HamburgerOn, setHamburgerOn] = useState(false);

  return (
    <StyledNav hamburger={HamburgerOn}>
      <StyledLogo to="/">
          <MainLogo transparent />
          Bezpieczne Instalacje
      </StyledLogo>
      <HamburgerButton hamburger={HamburgerOn} onClick={() => setHamburgerOn(!HamburgerOn)}></HamburgerButton>
      <NavigationList hamburger={HamburgerOn}>
        <NavigationListItem>
          <Link activeClassName="activeLink" to="/" onClick={() => setHamburgerOn(false)}>
            Strona główna
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link activeClassName="activeLink" to="/o-nas/" onClick={() => setHamburgerOn(false)}>
            O nas
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link activeClassName="activeLink" to="/o-nas/#realizacje" onClick={() => setHamburgerOn(false)}>
            Realizacje
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link activeClassName="activeLink" to="/kontakt/" onClick={() => setHamburgerOn(false)}>
            Kontakt
          </Link>
        </NavigationListItem>
      </NavigationList>
      <StyledContact href="tel:+48697602287" hamburger={HamburgerOn}>
        <div></div>
        <p>+48 697 602 287</p>
        <p>Zapytaj o ofertę</p>
      </StyledContact>
    </StyledNav>
  )
}
export default Navigation
