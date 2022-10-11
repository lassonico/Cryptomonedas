import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Saira', sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 19px;
    padding: 14px;
    border-radius: 10px;
    color: black;
`

const useSelectCurrency = (label, opciones) => {

    const [ state, setState ] = useState('');
  
    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>

            <Select
                value={state}
                onChange={ e => setState( e.target.value )}
            >
                <option value="">Seleccione</option>
                { opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectCurrency ]
}

export default useSelectCurrency