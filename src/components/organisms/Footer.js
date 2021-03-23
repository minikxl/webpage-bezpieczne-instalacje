import React from "react"
import styled from "styled-components"
import MailIco from "../../assets/images/icons/Mail.svg"

const FooterWrapper = styled.footer`
  
  width: 100%;
  min-height: 30px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  z-index: 9000;
  position: absolute;
  span,
  a {
    position: relative;
    width: 100%;
    height: 100%;
  }
  span {
    font-weight: ${({ theme }) => theme.fontWeight.l};
    font-size: 1.13em;
  }
  a:nth-child(1) {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.gray};
    z-index: 22;
    &:hover {
      background-color: black;
      padding: 10px;
      border-radius: 10px;
      color: white;
      transform: translateY(-60%);
      height: 80px;
      /* width: 200px; */
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        display: block;
      }
    }
    img {
      display: none;
      width: 40px;
      padding: 10px auto;
      filter: brightness(1000);
    }
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.l}) {
    /* flex-direction: column-reverse; */
    flex-wrap: wrap;
    span{
      order: 1;
      font-size: .8em;
    }
    a{
      order: 2;
      font-size: .7em;
    }
    .author-link{
      order: 3;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <a href="mailto:kontakt.dominikkras@gmail.com" className="author-link">
      Autor: Dominik Kras
      <img src={MailIco} alt="mail" />
    </a>
    <span>BEZPIECZNE INSTALACJE &copy; 2021</span>
    <a href="mailto:biuro@bezpieczneinstalacje.pl">
      <img src={MailIco} alt="mail" /> &nbsp; biuro@bezpieczneinstalacje.pl
    </a>
  </FooterWrapper>
)

export default Footer
