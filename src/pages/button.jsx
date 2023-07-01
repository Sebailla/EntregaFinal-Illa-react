import React from "react";

const ButtonCustom = ({label, color, handleClick}) => {
    
    return <button onClick={handleClick} style={{...style, color: color}}> {label}</button>;
        
}

export default ButtonCustom;

const style = {
    width: 120,
    heigth: 50,
    backgroundColor: 'red',
    padding: '3 10',
    borderRadius: 8
}
