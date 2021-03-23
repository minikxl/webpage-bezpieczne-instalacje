import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import { theme } from "../assets/styles/theme"
import Navigation from "../components/organisms/Navigation"
import { ThemeProvider } from "styled-components"
import Footer from "../components/organisms/Footer"
import CookieConsent from 'react-cookie-consent'

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    <CookieConsent
          location="bottom"
          buttonText="ZGODA"
          declineButtonText="Nie zgadzam się"
          cookieName="analytics"
          style={{ 
            zIndex: "99999", 
            textAlign: "center",
            opacity: "1",
            background: "#F2C926",
            color: "black",
            boxShadow: "0 5px 20px black",
            padding: "auto",
            justifyContent: "space-evenly",
            borderTop: "groove 4px gold"}}
          contentStyle={{flex: "`"}}
          buttonStyle={{ background: "white", color: "black", fontSize: ".9em", fontWeight: "bold", borderRadius: "4px", padding: "10px 20px" }}
    >
    Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym poziomie <span role="img" aria-label="cookies" >🍪</span>
    </CookieConsent>
    {children}
    <Footer />
  </ThemeProvider>
)

export default MainLayout
