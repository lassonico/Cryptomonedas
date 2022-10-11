import styled from "@emotion/styled"

const Texto = styled.div`
    background: #ff4d4d;
    color: #FFF;
    padding: 17px 12px;
    margin: 10px 0;
    border-radius: 8px;
    text-align: center;
    font-family: 'Saira', sans-serif;
    font-size: 20px;
    font-weight: 700;
    position: fixed;
    top: 10px;
    right: 20px;

    -webkit-animation: animationError ease-in-out .5s both;
    -moz-animation: animationError ease-in-out .5s both;
    -o-animation: animationError ease-in-out .5s both;
    animation: animationError ease-in-out .5s both;

    @-webkit-keyframes animationError {
        0%{ opacity: 0; -webkit-transform: translateY(-20px); }
        100%{ opacity: 1; -webkit-transform: translateY(0px); }
    }
    @-moz-keyframes animationError {
        0%{ opacity: 0; -moz-transform: translateY(-20px); }
        100%{ opacity: 1; -moz-transform: translateY(0px); }
    }
    @-o-keyframes animationError {
        0%{ opacity: 0; -o-transform: translateY(-20px); }
        100%{ opacity: 1; -o-transform: translateY(0px); }
    }
    @keyframes animationError {
        0%{ opacity: 0; transform: translateY(-20px); }
        100%{ opacity: 1; transform: translateY(0px); }
    }

`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error