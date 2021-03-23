import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import LandingPage from "../components/organisms/LandingPage"
import Header from "../components/atoms/Header"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Icon from "../components/atoms/Icon"
import Card from "../components/molecules/Card"
import HomeImage from "../assets/images/icons/Home.svg"
import Logo from "../assets/images/icons/Logo_white.svg"
import ContactCard from "../components/molecules/ContactCard"

const BackgroundHow = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 20%;

  // RWD 
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    padding: 50px 10%;
  }
`

const StyledParagraph = styled.p`
  text-indent: 1.2em;
  padding-top: 1em;
  width: 55%;
  ${({first}) => first && `width: 100%`};

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    width: 100%;
    text-align: justify;
  }
`

const ImgHome = styled.img`
  position: absolute;
  right: 10%;
  top: 30%;
  display: block;
  /* shape-outside: polygon(
    1px 341px,
    81px 300px,
    68px 168px,
    327px 63px,
    629px 0px,
    608px 340px,
    253px 530px,
    223px 516px,
    3px 391px
  ); */
  width: 35%;
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    position: static;
    /* shape-outside: none; */
    width: 100%;
    display: block;
    margin: auto;
  }
`

const H3Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  line-height: 2em;
  margin-top: 3em;
`
const Line = styled.div`
  margin-top: 40px;
  width: 50%;
  height: 1px;
  background: ${({ theme }) => theme.colors.y500};
  @media (max-width: ${({ theme }) => theme.device.xl}) {
    margin: 1em auto 0;
    width: 80%;
  }
`

// const BackgroundCards = styled.div`

// `;
const BackgroundCards = styled.div`
  position: relative;
  width: 100%;
  padding: 50px 20%;
  &::after {
    content: "";
    background: url(${Logo}) no-repeat center;
    background-size: 20%;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
   
    @media (max-width: ${({ theme }) => theme.device.l}) {
      background-size: 50%;
    }
  }
`
const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  margin: 50px auto 0 auto;
  column-gap: 165px;
  row-gap: 53px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.l}) {
    column-gap: 100px;
  }
`

const BackgroundContactCards = styled(BackgroundImage)`
  padding: 50px 20%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.s}) {
    padding: 30px 13%;    
  }

`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  width: 100%;
  height: 200px;
  margin: auto;
  
  // RWD
  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    margin: 40px 0;
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    height: 120px;
    gap: 7%;
  }
`

const OpinionWrapper = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledOpinionLink = styled.a`
  border: 3px solid ${({ theme }) => theme.colors.y500};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.3em;
  padding: 20px 60px;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  text-align: center;
  transition: all 0.5s;
  border-radius: 8px;
  border-radius: 50px;
  /* box-shadow: 3px 3px 80px 10px white; */
  &:hover {
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.y500};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    text-shadow: 2px 2px 1px ${({ theme }) => theme.colors.blackTransparent};
  }

  // RWD
  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 1em;
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: .9em;
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Fotowoltaika" />

    <LandingPage />

    {/* ------------- */}
    <section id="HowItWorks">
      <BackgroundHow
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        fadeIn
      >
        <article>
          <Header text="Jak działa system fotowoltaiczny?" />
          <StyledParagraph first>
            Panele fotowoltaiczne przetwarzają energię słoneczną, na prąd
            elektryczny, dzięki czemu nie zapłacisz za energię wykorzystywaną w
            Twoim domu, a nadmiar którego nie będziesz w stanie zużyć,
            przekazywany jest do energetyki. W dni kiedy jest mniejsze
            nasłonecznienie i panele słabiej pracują energetyka oddaje nam 80%
            naszej energii.
          </StyledParagraph>
          <StyledParagraph first>
            Dzięki odpowiedniemu zaplanowaniu inwestycji, jesteśmy w stanie być
            samowystarczalni i nie płacić rachunków za prąd.
          </StyledParagraph>
          <ImgHome src={HomeImage} alt="Home - szablon domu" />
          <Line></Line>

          <H3Wrapper>
            <Icon type="A" />
            <h3>PANELE</h3>
          </H3Wrapper>
          <StyledParagraph>
            Jedynie sprawdzonych producentów, odznaczające się długoletnią
            żywotnością i wydajnością. W naszych instalacjach zawsze montujemy
            do nich inteligentne optymalizatory mocy.
          </StyledParagraph>

          <H3Wrapper>
            <Icon type="B" />
            <h3>OPTYMALIZATORY</h3>
          </H3Wrapper>
          <StyledParagraph>
            To urządzenie, które zapewnia ciągłą pracę paneli z największą możliwą wydajnością eliminując efekt tak zwanego najsłabszego ogniwa. Większość firm łączy panele ze sobą bezpośrednio przez co ich praca jest zależna od siebie i wynika z tego który jest najsłabszy lub zacieniony. Dzięki optymalizacji, każdy panel pracuje całkowicie niezależnie z maksymalną mocą. Drugą zaletą optymalizatorów jest bezpieczeństwo przeciwpożarowe. Funkcja SafeDC wbudowana w optymalizatory daje możliwość rozłączenia każdego panelu z osobna i w ten sposób eliminuje ryzyko porażenia prądem w trakcie ewentualnego gaszenia pożaru. Trzecią zaletą jest możliwość podglądu na prace pojedynczego panelu fotowoltaicznego i ewentualna szybka reakcja w przypadku awarii.
          </StyledParagraph>

          <H3Wrapper>
            <Icon type="C" />
            <h3>FALOWNIK</h3>
          </H3Wrapper>
          <StyledParagraph>
            Jest mózgiem całego systemu i to on przekazuje prąd do energetyki.
            Korzystamy z inwerterów jednej z najlepszych firm, które gwarantują niezawodne
            działanie. Łącząc się z nimi za pomocą aplikacji będziesz w stanie
            zobaczyć jak działa Twoja instalacja.
          </StyledParagraph>
        </article>
      </BackgroundHow>
    </section>

    {/* -------------- */}

    <section>
      <BackgroundCards>
        <Header text="Dlaczego my?" />
        <CardsWrapper>
          {data.allMdx.edges.map(({ node }) => (
            <Card
              key={node.frontmatter.id}
              type={node.frontmatter.icon}
              header={node.frontmatter.title}
            >
              {node.excerpt}
            </Card>
          ))}
        </CardsWrapper>
      </BackgroundCards>
    </section>

    {/* -------------- */}

    <section>
      <BackgroundContactCards
        fluid={data.allFile.edges[1].node.childImageSharp.fluid}
        fadeIn
      >
        <Header text="Potrzebujesz szybkiej wyceny?" center />
        <ButtonsWrapper>
          <ContactCard type="message" link="/kontakt/" />
          <ContactCard type="call" href="tel:+48697602287" />
        </ButtonsWrapper>
        <OpinionWrapper>
          <StyledOpinionLink
            target="_blank"
            rel="noreferrer"
            href="https://www.oferteo.pl/bezpieczne-instalacje-wojciech-bursztyn/firma/4449394/#offer"
          >
            Zobacz nasze opinie wystawione na oferteo!
          </StyledOpinionLink>
        </OpinionWrapper>
      </BackgroundContactCards>
    </section>
  </>
)

export const data = graphql`
  query Backgrounds {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "backgrounds" }
        name: { regex: "/bg/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100,traceSVG: {color: "#f2f2f2"}) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMdx(filter: { slug: { regex: "/cards/" } }) {
      edges {
        node {
          frontmatter {
            id
            title
            icon
          }
          excerpt(pruneLength: 100000)
        }
      }
    }
  }
`

export default IndexPage;
