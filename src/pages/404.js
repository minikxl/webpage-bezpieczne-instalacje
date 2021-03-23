import React from "react"
import styled from "styled-components"
import Header from "../components/atoms/Header"

import SEO from "../components/seo"

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  padding: 150px 10%;
`

const NotFound = () => (
  <StyledWrapper>
    <SEO title="404: Not found" />
    <Header text="Nie znalezono strony." />
    <br/>
    <p>Błąd 404: Podana strona nie istnieje. <span aria-label=":(" role="img">🙁</span></p>
  </StyledWrapper>
)

export default NotFound
