import React from 'react';
import './index.css';
import ButtonCustom from '../button';

const Main = () => {

    const [inputValue, setInputValue] = React.useState('');

    const handleClick = (event) => {
        // alert('Estas Clickeando: ' + inputValue);
        setInputValue(parseInt(inputValue) + 1);
    }

    const handleValue = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className='contenedor' sx={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Hola aca estoy!!</h1>
            <ButtonCustom label={'Aceptar'} color={'blue'} handleClick={handleClick}/>
            <div>
                <input style={{}} value={inputValue} onChange={handleValue}/>
            </div>

        </div>
    )
}

export default Main

