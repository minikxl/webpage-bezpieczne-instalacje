import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Header from "../components/atoms/Header"
import PortfolioCard from "../components/molecules/PortfolioCard"
import Modal from "react-modal"
import Logo_white from "../assets/images/icons/Logo_white.svg"

const AboutWrapper = styled(BackgroundImage)`
  width: 100%;
  padding: 150px 10% 10%;

  article {
    margin-top: 3em;
    display: block;
    width: 50%;

    p {
      text-indent: 1.3em;
      margin-top: 1.1em;
      font-weight: ${({ theme }) => theme.fontWeight.m};
    }

    span,
    h5 {
      color: ${({ theme }) => theme.colors.y700};
      font-weight: ${({ theme }) => theme.fontWeight.l};
    }
    h5 {
      text-align: center;
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      display: block;
      width: 100%;
      margin-top: 1.2em;
      font-size: 1.1em;
    }

    // RWD
    @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 100%;
    }
  }
`;

const StyledMainLogo = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  opacity: 0.2;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    position: static;
    float: right;
    display: block;
    width: 20%;
    margin: 0 10px;
    transform: translateY(0%);
    &::after, &::before{
      content: "";
      clear: both;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    float: none;
    margin: 10px auto;
    display: block;
    width: 30%;
    transform: translateY(0%);
  }

`

const ThumbnailPowersWrapper = styled.div`
  position: absolute;
  right: 35%;
  top: 200px;
  width: 10%;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-items: stretch;
  grid-template-columns: 1fr 1fr;

  // RWD

  @media (min-width: 2200px) {
    width: 7%;
  }
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    width: 15%;
    right: 30%;
    top: 300px;
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    position: static;
    margin: 60px auto 0;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    

  }


`

const StyledPowersImgDiv = styled.div`
  transition: all .4s;
  ${({ name }) => name.includes("Certificate") && `
    grid-column: 1 / 3;
  `}

  @media (max-width: ${({ theme }) => theme.device.l}) {
    ${({ name }) => name.includes("Certificate") && `
      grid-column: auto;
    `}
  }
  &:hover {
    box-shadow: 0 0 10px -5px black;
    z-index: 11;
   
  }
`

const StyledSectionPortfolio = styled.section`
  padding: 60px 10% 100px;
`
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
    border                : 'none',
    padding               : '0',
    backgroundColor       : 'transparent'
  }
};

const AboutPage = ({ data }) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(data.file.childImageSharp.fluid);
  const fPowerClick = (fluid) =>{
    setIsOpen(true);
    setModalContent({...fluid});
  }
  return(
  <>
    <SEO title="O nas" />

    <section>
      <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsOpen(false)}
            style={modalStyle}
            closeTimeoutMS={500}
            id="PowerModal"
            contentLabel="Uprawnienia"
        >
          <Image fluid={modalContent} alt="Certyfikat"/>
      </Modal>
      <AboutWrapper fluid={data.file.childImageSharp.fluid} fadeIn>
        <Header text="O nas" half />
        <article>
          <p>
            BEZPIECZNE INSTALACJE to firma która istnieje dzięki zaangażowaniu <span>2 prężnie rozwijających się osób.</span>
          </p>
          <p>
            <span>9 letnia praca</span> w branży elektroniki, elektryki
            konsumenckiej i przemysłowej, ponad <span>11 letnie doświadczenie</span> w branży instalacji
            inteligentnych domów, oraz chęć ciągłego rozwijania się i dążenia do
            poszerzania portfolio uświadomiła nas o konieczności zainwestowania
            w usługi ekologiczne. Drugi rok realizujemy zlecenia oraz montaż
            instalacji fotowoltaicznych.
          </p>
          <StyledMainLogo src={Logo_white} alt="logo" />
          <p>
            Działamy prężnie na rynku <span>południowej i centralnej Polski.</span> Posiadamy magazyny w
            Bochni oraz w Mokotowie dzielnicy Warszawy. Ze względu na dwie
            lokalizacje możemy zaproponować i świadczyć swoje usługi dla <span>całego kraju.</span>
          </p>
          <p>
            Posiadamy niezbędne uprawnienia elektryczne oraz UDT (Urzędu Dozoru
            Technicznego).
          </p>
          <h5>Zawsze stawiamy na bezpieczeństwo swoich klientów.</h5>
        </article>

        <ThumbnailPowersWrapper>
          {data.allFile.nodes.map(({ childImageSharp }) => (
            <StyledPowersImgDiv
              key={childImageSharp.fluid.originalName} 
              name={childImageSharp.fluid.originalName}
              onClick={() => fPowerClick(childImageSharp.fluid)}
            >
              <Image
                fluid={childImageSharp.fluid}
                alt="Nasze uprawnienia"
                imgStyle={{ objectFit: 'contain' }}
              />
            </StyledPowersImgDiv>
            ))}
        </ThumbnailPowersWrapper>
      </AboutWrapper>
    </section>

    <StyledSectionPortfolio id="realizacje">
      <Header text="Realizacje" center />
      <div>
        {data.allDatoCmsPortfolio.nodes.map(
          ({ photo, description, originalId }) => (
            <PortfolioCard
              key={originalId}
              photo={photo.fluid}
              alt={photo.alt}
              description={description}
            />
          )
        )}
      </div>
    </StyledSectionPortfolio>
  </>
)
}

export const data = graphql`
  query {
    file(name: { eq: "aboutas" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allFile(filter: { absolutePath: { regex: "/about_powers/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
            originalName
          }
        }
      }
    }
    allDatoCmsPortfolio {
      nodes {
        photo {
          fluid(maxWidth: 900) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          alt
        }
        description
        originalId
      }
    }
  }
`

export default AboutPage
