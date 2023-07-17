import React from 'react';

// -- Inicio componenete context --

export const AppContext = React.createContext();
const { Provider } = AppContext;

const ContextProvider = ({ children }) => {
    const [carrito, SetCarrito] = React.useState([]);

    const addProductToCart = (product) => {
        SetCarrito([...carrito, product]);
    }

    return (
        <Provider value={{ carrito, addProductToCart, quantityCart: carrito.length }}>
            {children}
        </Provider>
    );
};

export default ContextProvider;

// -- Fin componente context --