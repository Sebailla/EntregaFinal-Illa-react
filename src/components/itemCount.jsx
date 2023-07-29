import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemCount = ({ stock, addToCart }) => {

    const [counter, setCounter] = React.useState(1);
    const [clicked, setClicked] = React.useState(false);
    const navigate = useNavigate();

    const handlerAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const handlerSubstract = () => {
        if (counter <= 1) {
            return;
        }
        setCounter(counter - 1);
    }

    const handlerCart = () => {
        addToCart(counter);
        setCounter(1);
        setClicked(true);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu producto se agrego al Carrito',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const handlerNavigateToCart = () => {
        return navigate('/cart')

    }


    return (
        <div>
            {
                clicked ?
                    <Button onClick={handlerNavigateToCart}>Finalizar Compra</Button>
                    :
                    <>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                gap: '10px'
                            }}
                        >
                            <Button onClick={handlerSubstract}>-</Button>
                            <p>{counter}</p>
                            <Button onClick={handlerAdd}>+</Button>
                        </div>
                        <Button onClick={handlerCart} size='small'>Agregar al Carrito</Button>
                    </>
            }
        </div>
    )
}

export default ItemCount