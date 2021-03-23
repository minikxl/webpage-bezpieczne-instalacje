import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Header from "../components/atoms/Header"
import Button from "../components/atoms/Button"

const StyledWrapper = styled.article`
  width: 100%;
  min-height: calc(100vh - 30px);
  height: 100%;
  padding: 150px 10% 50px;

  .link {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.green};
  }

  div {
    margin-bottom: 30px;
  }

  p {
    text-indent: 1em;
  }
  ol {
    margin: 3em 5em;
    li {
      padding: 10px 20px;
    }
      // RWD 
    @media (max-width: ${({ theme }) => theme.device.l}) {
      margin: 2em 1em;
    }
  }
  button {
    margin: auto;
    i {
      transform: rotate(90deg);
    }
  }
`

const InformationPage = () => (
  <section>
    <SEO title="Klauzula informacyjna" />
    <StyledWrapper>
      <Header text="Klauzula informacyjna" />
      <p>
        Wyrażam zgodę na przesyłanie przez Bezpieczne Instalacje Wojciech
        Bursztyn informacji handlowych, marketingowych za pośrednictwem urządzeń
        telekomunikacyjnych a także z wykorzystaniem elektronicznej formy
        komunikacji (e-mail lub SMS/ MMS). Korespondencję elektroniczną proszę
        kierować na następujący adres poczty elektronicznej -{" "}
        <a className="link" href="mailto:biuro@bezpieczneinstalacje.pl">
          biuro@bezpieczneinstalacje.pl
        </a>
        .
      </p>

      <ol>
        <li>
          Administratorem danych osobowych jest Bezpieczne Instalacje Wojciech
          Bursztyn (Krakowskie Przedmieście 4, Bochnia 32-700).
        </li>
        <li>
          Informujemy, że przesłanie zapytania przez formularz odczytujemy jako
          Państwa wolę nawiązania z nami współpracy, co uzasadnia przetwarzanie
          Państwa danych osobowych (art. 6 ust. 1 lit. b RODO). Państwa dane
          podane w formularzu i treści zapytania będą wykorzystywane wyłącznie w
          celu udzielenia Państwu odpowiedzi.
        </li>
        <li>
          Natomiast udzielenie zgody na przetwarzanie danych osobowych w celach
          marketingowych jest podstawą do przetwarzania danych osobowych,
          wskazaną w art. 6 ust. 1 lit. a RODO. Użytkownik może w każdym
          przypadku wycofać zgodę na przetwarzanie danych osobowych poprzez
          wyrażenie takiej woli w postaci wiadomości mailowej do Administratora,
          bądź w formie tradycyjnego listu na adres siedziby Administratora.
          Jednak wycofanie zgody nie wpływa na zgodność z prawem przetwarzania,
          którego dokonano na podstawie zgody przed jej wycofaniem.
        </li>
        {/* <li>Szczegóły dotyczące wykorzystywania przez Administratora danych osobowych, w tym sposób, podstawa prawna i czas przetwarzania danych osobowych pozyskiwanych poprzez formularz oraz ewentualni odbiorcy tych danych, przysługujące uprawnienia właścicieli praw zostały przedstawione w <Link to="polityka-prywatnosci"> POLITYCE PRYWATNOŚCI. </Link> Zachęcamy do zapoznania się z nią.</li> */}
      </ol>
      <Button
        icon="Arrow"
        text="POWRÓT"
        onClick={() => window.history.back()}
      />
    </StyledWrapper>
  </section>
)

export default InformationPage
