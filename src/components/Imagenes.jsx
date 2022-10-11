import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    
    @media (max-width: 780px){
        margin: 20px auto;
    }
`
const Images = styled.img`
    width: 70px;
    margin: 0 auto;

    @media (max-width: 780px){
        width: 50px;
    }
`

const Imagenes = () => {

    const [ criptoImagen, setCriptoImagen ] = useState(null)

    useEffect(() =>{
        const imagen = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCriptoImagen(resultado.Data)
        }
        imagen()
    }, [])
    

  return (
    <>
        <Container>
            {criptoImagen?.map((imge) => (
                    <div key={imge.CoinInfo.Name}>
                        <Images 
                            src={`https://cryptocompare.com/${imge.CoinInfo.ImageUrl}`}
                            alt="Imagen Cryptomoneda"
                        />
                    </div>
                ))
            }
        </Container>
    </>
  )
}

export default Imagenes