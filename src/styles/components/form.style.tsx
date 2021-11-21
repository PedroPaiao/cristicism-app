import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  form {
    display: block;
    position: relative;
    width: 75%;
  }

  @media (max-width: 576px) {
    form {
      width: 80%;
    }
  }
  @media (max-width: 375px) {
    form {
      width: 90%;
    }
  }

  form::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
    background-image: linear-gradient(to bottom left, #8257e6, #e1e1e6);
  }

  fieldset {
    position: relative;
    display: block;
    background-color: ${props => props.theme.colors.background};
    padding: 25px;
    z-index: 2;

    h2 {
      color: ${props => props.theme.colors.text};
      margin-bottom: 20px;
      text-align: center;
    }

    & > p {
      font-size: 14px;
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        font-weight: 500;
        &:hover {
          transition: 0.4s;
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }

  input,
  button {
    appearance: none;
    background: none;
    border: none;
    outline: none;
  }

  .form-group {
    display: block;
    margin-bottom: 15px;

    input {
      display: block;
      width: 100%;
      background-color: #f8f8f8;
      padding: 10px 15px;
      border-radius: 5px;
      transition: 0.4s;
    }

    label {
      color: ${props => props.theme.colors.text};
      margin-bottom: 5px;
      transition: 0.4s;
    }

    &:focus-within label {
      color: ${props => props.theme.colors.primary};
    }
  }

  input[type='submit'] {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    margin: 15px 0px;
    width: 100%;
    color: ${props => props.theme.colors.text};
    background: linear-gradient(to right, #8257e6 40%, #8257e6 40%, #e1e1e6);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;

    &:hover {
      background-position: 45% 0%;
    }
  }
`
