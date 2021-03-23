import React from "react"
import Modal from "react-modal"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "../atoms/Icon"
import Button from "../atoms/Button"
import PopupWindow from "../molecules/PopupWindow"

const StyledLandingPage = styled.header`
  position: relative;
  color: white;
  width: 100%;
  height: 100vh;
  @media (max-height: ${({ theme }) => theme.device.s}) {
    height: 160vh;
  }
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: -1000;
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
  background: ${({ theme }) => theme.colors.blackTransparent};
`

const StyledLandingPageTitle = styled.div`
  width: 70%;
  height: calc(100% - 30px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .line {
    height: 1px;
    width: 60%;
    background: ${({ theme }) => theme.colors.y500};
  }
  h1 {
    display: block;
    margin: 0;
    font-size: 2.19em;
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    text-transform: uppercase;
  }
  h2 {
    display: block;
    margin-top: 10px;
    font-size: 1.56em;
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    h1{
      font-size: 2em;
    }
    h2{
      font-size: 1.3em;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    h1{
      margin-bottom: 5px;
      font-size: 1.5em;
    }
    h2{
      font-size: 1em;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 83%;
    height: 90%;
    h1{
      font-size: 1.3em;
    }
    h2{
      font-size: 1em;
    }
  }
`

const StyledBaner = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  background: linear-gradient(
    269.94deg,
    rgba(253, 209, 5, 0.65) 19.45%,
    rgba(0, 0, 0, 0.65) 50.41%
  );
  bottom: 0;
  left: 0;
  right: 0;
  /* padding: 0 10%; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  // RWD  
  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 0 5%;
    
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
   flex-direction: column;
   gap: 25px; 
   height: 200px;
   background: linear-gradient(
    0deg,
    rgba(253, 209, 5, 0.45) 20.45%,
    rgba(0, 0, 0, 0.35) 50.41%
  );
    backdrop-filter: blur(2px);
  }

`

const StyledList = styled.ul`
  list-style: none;
  margin-top: -24px;
  white-space: nowrap;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  li {
    height: 2em;
    margin-bottom: 0.5em;
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
  li:nth-child(2) {
    margin-left: 17%;
  }
  li:nth-child(3) {
    margin-left: 34%;
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    li:nth-child(1n + 1) {
      margin-left: 0px;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    /* margin: auto; */
    li{
      font-size: .8em;
    }
  }
  
`

const ButtonsWrapper = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2%;
  
  // RWD

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    Button {
      height: 3em;
      font-size: 1.2em;
      i {
        width: 24px;
        height: 24px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    Button {
      height: 3em;
      font-size: 1em;
      i {
        width: 18px;
        height: 18px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 20%;
    Button {
      height: 3.3em;
      width: 10em;
      font-size: .9em;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
   flex-direction: row; 
      height: 2em;
      width: 100%;
  }
`;

// MODAL
Modal.setAppElement(`#___gatsby`);
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    height: "100%"
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight             : '85%',
  }
};

// COMPONENT
const LandingPage = () => {

  const [modalIsOpen,setIsOpen] = React.useState(false);
  
  const data = useStaticQuery(graphql`
    query GetLandingPageBG {
      file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <StyledLandingPage>
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="Hero Image"/>
      <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setIsOpen(false)}
          style={modalStyle}
          closeTimeoutMS={500}
          id="modal"
          contentLabel="Dofinansowania"
      >
        <PopupWindow/>
      </Modal>
      <StyledLandingPageTitle>
        <h1>Fotowoltaika, rekuperacja, elektryka.</h1>
        <div className="line"></div>
        <h2>Postaw na bezpieczeństwo i bezawaryjne działanie</h2>
      </StyledLandingPageTitle>
      <StyledBaner>
        <StyledList>
          <li>
            <Icon type="ArrowLandingPage"></Icon>Tylko trwałe i długowieczne
            instalacje
          </li>
          <li>
            <Icon type="ArrowLandingPage"></Icon>Instalacja dostosowana do
            Twoich potrzeb
          </li>
          <li>
            <Icon type="ArrowLandingPage"></Icon>Pomoc w uzyskaniu dotacji
          </li>
        </StyledList>
        <ButtonsWrapper>
          <Button text="Dofinansowania" onClick={() => setIsOpen(true)} />
          <a href="#HowItWorks">
            <Button icon="Arrow" text="Więcej" />
          </a>
        </ButtonsWrapper>
      </StyledBaner>
    </StyledLandingPage>
  )
}

export default LandingPage
