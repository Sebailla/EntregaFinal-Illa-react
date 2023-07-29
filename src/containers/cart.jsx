import React from 'react'
import { AppContext } from '../context/context'
import UserInfo from '../components/userInfo';
import { Link, NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const Cart = () => {

  const { carrito, createNewOrder, lastOrder } = React.useContext(AppContext);

  const [pay, setPay] = React.useState(false)

  const handlerPay = () => {
    setPay(true);
  }

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>Lista de Compras</h1>
      {
        !carrito.length ?
          <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h4 style={{ color: 'red', fontSize: '20px' }}>No exiten productos seleccionados</h4>
              <Link to='/all' style={{ marginTop: '60px' }}>
                <Button variant="contained" color="info">
                  Tienda
                </Button>
              </Link>
            </div>
          </>
          :
          <>
            <div style={
              {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }
            }>
              <table style={
                {
                  borderSpacing: '10px',
                  border: '1px solid',
                  borderRadius: '15px',
                  borderColor: 'gray',
                  padding: '35px'
                }
              }>
                <tr>
                  <th colSpan={'2'}
                    style={{ fontSize: '24px', borderBottom: '1px solid blue', paddingBottom: '20px' }}>
                    Producto
                  </th>
                  <th style={{ fontSize: '24px', borderBottom: '1px solid blue', paddingBottom: '20px' }}>Cantidad</th>
                  <th style={{ fontSize: '24px', borderBottom: '1px solid blue', paddingBottom: '20px' }}>Precio Unitario</th>
                  <th style={{ fontSize: '24px', borderBottom: '1px solid blue', paddingBottom: '20px' }}>Total</th>
                </tr>
                {
                  carrito.map((item, index) => (
                    <tr key={item.id + index} style={{ listStyleType: 'none' }}>
                      <td>
                        <img src={item.imageURL} alt={item.product} style={{ width: 50, marginRight: '20px' }} />
                      </td>
                      <td>
                        <h3 style={{ width: '550px', fontSize: '18px' }}>{item.product}</h3>
                      </td>
                      <td>
                        <h3 style={{ textAlign: 'center', width: '150px', fontSize: '18px' }}>{item.quantity}</h3>
                      </td>
                      <td>
                        <h4 style={{ textAlign: 'center', width: '200px', fontSize: '18px' }}>{(`$ ${item.priceUnit}`)}</h4>
                      </td>
                      <td>
                        <h4 style={{ textAlign: 'center', width: '250px', fontSize: '18px' }}>{(`$${item.priceUnit * item.quantity}`)}</h4>
                      </td>
                    </tr>
                  ))
                }
              </table>

              <div style={{ textAlign: 'center', marginTop: '30px', border:'1px solid red', borderRadius:'10px', padding:'20px'}}>
                <Typography variant='h3'>
                  Total a Pagar: 
                  {`  $  
                    ${carrito.map((item) => (
                      item.priceUnit * item.quantity
                    )).reduce((acc, item) => acc + item)}`
                  }
                </Typography>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 50, margin: '25px', padding: '25px' }}>
              <NavLink to={'/all'}>
                <Button variant="contained" color="success" disabled={pay === true}>Seguir comprando</Button>
              </NavLink>
              <Button onClick={handlerPay} variant="contained" color="info">Pagar</Button>
            </div>
            <div>
              {
                pay === false ?
                  <div></div>
                  :
                  <UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />
              }

            </div>
          </>
      }
    </div>

  )
}

export default Cart