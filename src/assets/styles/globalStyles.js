import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
  }
  body::-webkit-scrollbar {
    z-index: 99999;
    width: 1em;
    background-color: rgba(0,0,0,0.8);
    transition: all .3s linear;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: black;
    box-shadow: inset 0 0 40px -10px #F2C926;
    border-radius: 10px;
  }
  body::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 60px -10px #F2C926;
  }
  ::selection {
    background-color: #FDD105;
  }
  ::-moz-selection {
    background-color: #FDD105;
  }

  h1{
    font-size: 3rem;
    font-weight: 400;
  }

  h2{
    font-size: 2.5rem;
    font-weight: 300;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 500;
  }
  h4{
    font-size: 1.5rem;
    font-weight: 500;
  }
  h5{
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    border: none;
    cursor: pointer;
    &:focus{
      outline: none;
    }
  }
  p {
    font-size: 1rem;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  mark{
    background: none;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  input, textarea{
    background-color: white;
    border-bottom: 5px solid #FEAF00;
    padding: .5em 1em;
    font-family: 'Poppins';
    resize: none;
  }
  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    input, textarea{
    border-bottom: 3px solid #FEAF00;
    }
  }

  input:focus, textarea:focus{
    outline: 1px solid #F2C926;
  } 
  input[type='checkbox']:focus{
    outline: none;
  } 

  .activeLink{
    border-bottom: 2px groove #FDD105;
  }

  #modal{
    width: 60%;
    @media (max-width: ${({ theme }) => theme.device.l}) {
      width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.device.m}) {
      width: 98%;
    }
  }

  #PowerModal{
    width: 40%;
    @media (max-width: ${({ theme }) => theme.device.l}) {
      width: 60%;
    }
    @media (max-width: ${({ theme }) => theme.device.m}) {
      width: 80%;
    }
  }
  /* react-modal transitions */
  .ReactModal__Overlay {
    overflow: auto;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
  .ReactModal__Content {
    transition: transform 0.3s linear;
    transform: translate(-50%, -50%);
  }

  .ReactModal__Content--after-open {
    transform: translate(-50%, -45%);
  }

  .ReactModal__Content--before-close {
    transform: translate(-50%, -40%);
  }
  // Animations

  @keyframes ContactGrow {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 0px 10px rgba(100, 100, 0, .4);
            box-shadow: 0 0 0px 10px rgba(100, 100, 0, .4);
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}


`

export default GlobalStyle
