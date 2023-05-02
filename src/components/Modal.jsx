import Spineer from './Spineer'
import styled from '@emotion/styled'


const ModalContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: #000000eb;
    top: 0;
    left: 0;

`
const ModalView = styled.div`
    width: 50%;
    height: auto;
    margin: 0 auto;
    padding: 25px;
    background-color: #FFF;
    overflow: hidden;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 780px){
        width: 80%;
        flex-direction: column;
    }
`

const Contenedor = styled.div`
  width: 100%;

  @media (max-width: 780px){
    margin-top: 30px;
  }

`
const ContenedorTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextModa = styled.h2`
  font-family:  'Saira', sans-serif;
  color: #3d3d3d;
  text-align: center;
  font-weight: 700;
  font-size: 25px;

  &::after{
    content: '';
    width: 180px;
    height: 6px;
    background-color: #fff200;
    display: block;
    margin: 10px auto;
}
`
const Imagen = styled.img`
  display: block;
  width: 150px;
  margin: -20px auto 0 auto;
`
const Precio = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  font-family: 'Saira', sans-serif;
  line-height: 2px;
`
const Parrafos = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  font-family:  'Saira', sans-serif;
  line-height: 2px;

`
const Divtextos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Spans = styled.span`
  font-size: 17px;
  font-weight: bold;
  font-family: 'Saira', sans-serif;
  color: #17c0eb;
  margin: 0 0 0 20px;

  @media (max-width: 780px){
    margin: 0;
  }
`

const Boton = styled.button`
  width: 100%;
  background-color: #17c0eb;
  color: #FFF;
  padding: 7px 25px;
  font-family:  'Saira', sans-serif;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  transition: background .3s ease;
  margin-top: 25px;

  &:hover{
    cursor: pointer;
    background-color: #18dcff;
  }
`

const Modal = ({cerrarModal, contizacion, monedas, cargando}) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = contizacion;
  const { cryptomoneda } = monedas;

  return (
    <ModalContent>
        <ModalView>
          { cargando ? <Spineer /> : (
            <>
              <ContenedorTitle>
                <TextModa>{cryptomoneda}</TextModa>
                <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cryptomoneda"/>
              </ContenedorTitle>
              <Contenedor>
                <Divtextos>
                  <Precio>Precio actual:</Precio>
                  <Spans>{PRICE}</Spans>
                </Divtextos>
                <Divtextos>
                  <Parrafos>Mayor del día:</Parrafos>
                  <Spans>{HIGHDAY}</Spans>
                </Divtextos>
                <Divtextos>
                  <Parrafos>Menor del día:</Parrafos>
                  <Spans>{LOWDAY}</Spans>
                </Divtextos>
                <Divtextos>
                  <Parrafos>Variación:</Parrafos>
                  <Spans>{CHANGEPCT24HOUR}%</Spans>
                </Divtextos>

                <Boton
                  onClick={cerrarModal}
                  >Cerrar
                </Boton>
              </Contenedor>
            </>
            )
          }
        </ModalView>
    </ModalContent>
  )
}

export default Modal