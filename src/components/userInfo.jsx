import { Button } from '@mui/material';
import React from 'react'

const emailValidator = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

const UserInfo = ({ carrito, createNewOrder }) => {

    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    const handleSubmit = (event) => {
        if (!isFormValid || !createNewOrder || !carrito.length) {
            return
        }
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: carrito,
            createAt: new Date(),
            total: carrito.reduce((accumulator, item) => accumulator + item.priceUnit * item.quantity, 0)
        }
        createNewOrder(order)
    }

    const isFormValid = () => {
        return (
            Boolean(nombre.length) &&
            Boolean(apellido.length) &&
            emailValidator(email) &&
            Boolean(telefono.length)
        )
    }

    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }
        }>
            <h1 style={{ textAlign: 'center' }}>Datos del Cliente</h1>
            <div>
                <form style={{
                    border: '1px solid violet',
                    borderRadius: '10px',
                    padding: '30px',
                    width: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <div style={
                        {
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: '10px'
                        }}>
                        <label style={{fontSize:'20px', fontWeight:'700'}}>Nombre: </label>
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} 
                        style={{fontSize:'20px', fontWeight:'500'}}/>
                    </div>
                    <div style={
                        {
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: '10px'
                        }}>
                        <label style={{fontSize:'20px', fontWeight:'700'}}>Apellido: </label>
                        <input type="text" placeholder="Apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} 
                        style={{fontSize:'20px', fontWeight:'500'}}/>
                    </div>
                    <div style={
                        {
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: '10px'
                        }}>
                        <label style={{fontSize:'20px', fontWeight:'700'}}>e-mail: </label>
                        <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}
                        style={{fontSize:'20px', fontWeight:'500'}} />
                    </div>
                    <div style={
                        {
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: '10px'
                        }}>
                        <label style={{fontSize:'20px', fontWeight:'700'}}>Teléfono: </label>
                        <input type="text" placeholder="Teléfono" value={telefono} onChange={(event) => setTelefono(event.target.value)} 
                        style={{fontSize:'20px', fontWeight:'500'}}/>
                    </div>
                </form>
            </div>
            <div style={{ margin: '20px', padding: '20px' }}>
                <Button onClick={handleSubmit} disabled={!isFormValid()} variant="contained" color="info">Realizar Pago</Button>
            </div>
        </div>
    )
}

export default UserInfo