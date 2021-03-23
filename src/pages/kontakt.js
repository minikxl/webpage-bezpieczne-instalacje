import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/atoms/Header"


import LogoFull from "../assets/images/icons/Logo_full.svg"
import BackgroundImage from "gatsby-background-image"
import Icon from "../components/atoms/Icon"
import Form from "../components/molecules/Form"


const StyledWrapper = styled(BackgroundImage)`
  width: 100%;
  height: calc(100% - 30px);
  padding: 0 10%;

  p {
    margin-top: 3em;
    margin-bottom: 2em;
    display: block;
    /* width: 50%; */
  }

  display: flex;
  justify-content: space-between;
  flex-direction: row;

  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    align-items: center;
  }
`
const FlexItemsWrapper = styled.div`
  height: calc(100% - 30px);
  &:nth-child(even){
    padding-top: 150px;
    width: 50%;
  }
  &:nth-child(odd){
    width: 40%;
  }
  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 100% !important;
    &:nth-child(odd){
      width: 70%;
      margin: 40px 0;
    }
  }
`;

const ContactDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  
  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    gap: 0;
  }

  img{
    width: 70%;
    margin: -10px auto 20px;
    // RWD 
    @media (max-width: ${({ theme }) => theme.device.s}) {
      width: 80%;
    }
  }

  div {
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;

    i {
      width: 33px;
      height: 33px;
      background-position: center;
      background-size: 100%;
      @media (max-width: ${({ theme }) => theme.device.s}) {
        width: 24px;
        height: 24px;
      }
    }
    a {
      margin: 0;
      padding: 0;
      font-size: 1.3em;
      transition: all 0.4s;
      background-image: linear-gradient(0deg, currentColor 1px, transparent 0);
      background-size: 0 100%;
      background-repeat: no-repeat;
      // RWD 
      @media (max-width: ${({ theme }) => theme.device.s}) {
        font-size: .7em;
        display: block;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.y500};
        background-size: 100% 100%;
      }
    }
  }
`
const FormWrapper = styled.div`
  position: relative;
  display: block;
  min-height: calc(100vh - 30px);
  height: calc(100% - 30px);

  padding: 140px 10% 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkgray};
  color: white;
  text-align: center;

  &::before {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.colors.darkgrayTransparent};
    width: 112%;
    top: 0;
    right: -6%;
    height: 100%;
    z-index: -1;
    transform: skewX(-4deg);
    // RWD 
    @media (max-width: ${({ theme }) => theme.device.s}) {
      display: none;
    }
  }

  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 20px 0;
    height: 100%;
    h3{
      font-size: 1.3em;
    }
  }
`


const ContactPage = ({ data }) => (
  <section>
    <SEO title="Kontakt" />
    <StyledWrapper fluid={data.file.childImageSharp.fluid} fadeIn>
      <FlexItemsWrapper>
        <Header text="Skontaktuj się z nami" />
        <p>
          Chcesz wiedzieć więcej? Dobrać najlepsze rozwiązania pod Twoją
          inwestycję? Poznać plany cenowe? Mieć gwarancję trwałości rozwiązań i
          najwższej jakości wykonania? Zadzwoń, lub wyślij nam wiadomość!
        </p>

        <ContactDataWrapper>
          <img src={LogoFull} alt="Logo" />
            <div>
              <Icon type="Phone" /> <a href="tel:+48697602287">+48 697 602 287</a>
            </div>
            <div>
              <Icon type="Mail" />{" "}
              <a href="mailto:biuro@bezpieczneinstalacje.pl">
                biuro@bezpieczneinstalacje.pl
              </a>
            </div>
            <div>
              <Icon type="Location" />{" "}
              <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/dhLo5FTmaFXTwgca9">
                Krakowskie Przedmieście 4, Bochnia 32-700
              </a>
            </div>
        </ContactDataWrapper>
      </FlexItemsWrapper>

      <FlexItemsWrapper>
        <FormWrapper>
          <h3>Wyślij nam wiadomość</h3>
          <Form/>
        </FormWrapper>
      </FlexItemsWrapper>
    </StyledWrapper>
  </section>
)

export const data = graphql`
  query {
    file(name: { eq: "aboutas" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
