import { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import Formulario from "./assets/components/Formulario"
import Imagenes from './assets/components/Imagenes'
import Modal from './assets/components/Modal'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }
`

const Heading = styled.h1`
  font-family:  'Saira', sans-serif;
  color: #18dcff;
  text-align: center;
  font-weight; 700;
  margin-top: 80px;
  margin-botom: 50px;
  font-size: 35px;

  &::after{
    content: '';
    width: 180px;
    height: 6px;
    background-color: #fff200;
    display: block;
    margin: 10px auto;
  }

  @media (max-width: 780px){
    margin-top: 10px;
  }
`

function App() {

  const [ monedas, setMonedas ] = useState({})
  const [ contizacion, setCotizacion ] = useState({});
  const [ modal, setModal ] = useState(false);
  const [ cargando, setCargando ] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
    
      const cotizarCrypto = async () => {
        setCargando(true)
        
        const { moneda, cryptomoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[cryptomoneda][moneda]);
        setCargando(false)
        setModal(true)
      }
      setCotizacion({})
      cotizarCrypto()
    }
  }, [monedas])

  const cerrarModal = () => {
    setModal(false);
  }

  return (
    <>
      <Contenedor className="App">
        <Imagenes />
        <div>
          <Heading>Cotiza Criptomonedas en linea</Heading>
          <Formulario
            setMonedas={setMonedas}
            setModal={setModal}
            cerrarModal={cerrarModal}
          />
        </div>
      </Contenedor>
      { modal &&
        <Modal
          cerrarModal={cerrarModal}
          monedas={monedas}
          contizacion={contizacion}
          setCotizacion={setCotizacion}
          setModal={setModal}
          cargando={cargando}
        />
      }
    </>
  )
}

export default App
