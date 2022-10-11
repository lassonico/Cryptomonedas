import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCurrency from '../../hooks/useSelectCurrency'
import { monedas } from '../../data/monedas'

const InputSubmit = styled.input`
    background-color: #17c0eb;
    border: none;
    width: 100%;
    padding: 13px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 23px;
    border-radius: 8px;
    transition: background-color .3s ease;
    margin-top: 30px;
    margin-bottom: 70px;
    
    &:hover {
      background-color: #67e6dc;
      color: #ffcccc;
      cursor: pointer;
    }
`

const Formulario = ({setMonedas, setModal}) => {

  const [ cryptos, setCryptos ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ moneda, SelectCurrency ] = useSelectCurrency('Elige tu moneda', monedas);
  const [ cryptomoneda, SelectCryptomoneda ] = useSelectCurrency('Elige tu Cryptomoneda', cryptos);
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCryptos = resultado.Data.map( crypto => {

        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName
        }
        return objeto
      })
      setCryptos(arrayCryptos);
    }
    consultarAPI()
  }, [])

  

  const handleSubmit = e => {
    e.preventDefault()
    if([moneda, cryptomoneda].includes('')){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000);
      return
    }
    setError(false);
    setModal(true)
    setMonedas({
      moneda,
      cryptomoneda
    })
  }

  return (
    <>
      { error && <Error>Todos los campos son obligatorios</Error> }
      <form 
        onSubmit={handleSubmit}
      >
          <SelectCurrency />

          <SelectCryptomoneda />

          <InputSubmit
              type="submit"
              value="Consultar"
          />
      </form>
    </>
  )
}

export default Formulario