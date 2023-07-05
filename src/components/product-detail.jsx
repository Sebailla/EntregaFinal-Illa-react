import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ProductDetail = ({ data }) => {
    return (
        <div style={{

            margin: '20px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 'between',
        }}>
            <img src={data?.pictures?.[0].url} alt={data?.title}
                style={{ width: 500, height: 550 }}
            ></img>
            <div>
                <h1>{data?.title}</h1>
                <p>{data?.seller_address?.city.name} - {data?.seller_address?.state.name} - {data?.seller_address?.country.name}</p>
                <h3 style={{
                    color: 'orangered',
                    fontWeight: 'bold',
                    fontSize: 36,
                    marginTop: 40
                }}>$ {data?.price}</h3>


                <Stack direction="row" spacing={2}>
                    <NavLink to={'/cart'}>
                        <Button variant="contained" color='primary'>Comprar</Button>
                    </NavLink>
                    <NavLink to={'/product/'}>
                        <Button variant="contained" color='secondary'>Volver</Button>
                    </NavLink>
                </Stack>

            </div>
        </div>
    )
}

export default ProductDetail;