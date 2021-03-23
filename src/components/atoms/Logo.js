import React from "react"
import Logo from "../../assets/images/icons/Logo.svg"
import Logo_white from "../../assets/images/icons/Logo_white.svg"

const MainLogo = ({ transparent }) => (
  <>
    {transparent ? (
      <img src={Logo} alt="logo" />
    ) : (
      <img src={Logo_white} alt="logo" />
    )}
  </>
)

export default MainLogo
