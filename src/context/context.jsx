import { addDoc, getFirestore, collection, updateDoc, doc } from 'firebase/firestore/lite';
import React from 'react';
import Swal from 'sweetalert2';

// -- Inicio componenete context --

export const AppContext = React.createContext();
const { Provider } = AppContext;

const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = React.useState([]);
    const [orderId, setOrderId] = React.useState('');

    const addProductToCart = (product) => {
        setCarrito([...carrito, product]);
    }

    //-- Creamos la orden de compra --
    const createNewOrder = (order) => {
        const db = getFirestore();
        const orders = collection(db, 'orders');

        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id)
                setCarrito([])
                // -- SweetAlert --
                Swal.fire(
                    'Felicitaciones!',
                    `Se orden ${snapshot.id}, se realizo corectamente`,
                    'success'
                )
                // - Altualizamos el Id --
                const getDoc = doc(db, 'orders', snapshot.id)
                updateDoc(getDoc, { ordersId: snapshot.id })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Provider value={{ carrito, addProductToCart, quantityCart: carrito.length, createNewOrder, lastOrder: orderId }}>
            {children}
        </Provider>
    );
};

export default ContextProvider;

// -- Fin componente context --