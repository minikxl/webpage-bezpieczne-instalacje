import React from "react"
import { Link } from "gatsby"
import { Formik } from "formik";
import Button from "../atoms/Button"
import styled from "styled-components"
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  label {
    width: 100%;
    margin-top: 1.4em;
    font-weight: ${({ theme }) => theme.fontWeight.xxl};
    // RWD 
    @media (max-width: ${({ theme }) => theme.device.l}) {
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-size: .8em;
    }
  }
  input,
  textarea {
    width: 100%;
    font-size: 1em;
    
    // RWD 
    @media (max-width: ${({ theme }) => theme.device.s}) {
      font-size: .7em;
    }
  }

  .checkbox {
    height: 2em;
    margin: 2em 0;
    text-align: center;
    font-size: 0.8em;
    font-weight: ${({ theme }) => theme.fontWeight.m};
    input {
      justify-content: center;
      width: 10%;
      margin: auto;
      &:checked {
        background-color: ${({ theme }) => theme.colors.y500};
      }
    }
    a {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: underline;
    }
  }
  button{
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
    // RWD 
    @media (max-width: ${({ theme }) => theme.device.l}) {
      font-size: 1em;
    }
  }
  // RWD 
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 80%;
    height: 50%;
  }
`

const Form = () => {

    return(
        <Formik
            initialValues={{ name: '', email: '', message: '', consent: true }}
            onSubmit={(values, { setSubmitting, resetForm}) => {
                setSubmitting(false);
                axios({
                    method: "POST", 
                    url:"https://bezpieczneinstalacje.pl/api/send-mail/", 
                    data: values
                  }).then((response)=>{
                    if (response.data.status === 'success') {
                      alert("Wiadomość wysłana!"); 
                      setSubmitting(true);
                      resetForm({});
                    } else {
                      alert("Niestety nie udało się wysłać wiadomości. Możesz zadzwonić, lub wysłać nam maila.")
                      console.log(response.data.error)
                      setSubmitting(true);
                    }
                  })
            }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="name">Imię i nazwisko:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Wpisz swoje imię i nazwisko"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Wpisz swój adres e-mail"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />

                <label htmlFor="name">Wiadomość:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Wpisz treść swojej wiadomości"
                    rows="9"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                />

                <label className="checkbox">
                    <input id="consent" name="consent" type="checkbox" required defaultChecked /> Zgadzam się z przeczytanymi{" "}
                    <Link to="/klauzula-informacyjna/">
                    zasadami polityki prywatności.
                    </Link>
                </label>
                <Button text="Wyślij wiadomość" type="submit" disabled={isSubmitting}/>
            </StyledForm>
        )}
        </Formik>
    )}
export default Form;
