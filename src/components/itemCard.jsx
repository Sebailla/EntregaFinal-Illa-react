import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ItemCount from './itemCount';
import { AppContext } from '../context/context';

const ItemCard = ({ data }) => {

    const { addProductToCart } = React.useContext(AppContext);

    const addToCart = (quantity) => {
        addProductToCart({
            id: data.id,
            product: data.title,
            priceUnit: data.price,
            quantity: quantity,
            imageURL: data.imageURL
        })
    }
    
    return (
        <Card sx={{ maxWidth: 330 }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <CardMedia
                    component="img"
                    alt={data.title}
                    height="140"
                    image={data.imageURL}
                />
                <CardContent sx={{ height: 150, paddingBottom: 5 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="h6" color="error">
                        $ {data.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Disponible: {data.stock}
                    </Typography>

                </CardContent>
                <CardActions
                    sx={{
                        paddingBottom: 2
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 30
                    }}>
                        <Stack direction="row" spacing={2}>
                            <ItemCount stock={data?.stock} addToCart={addToCart}/>
                            <NavLink to={'/product/' + data.id}>
                                <Button variant="contained" color='secondary'>Detalle</Button>
                            </NavLink>
                        </Stack>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}
export default ItemCard;
