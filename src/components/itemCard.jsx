import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ItemCard = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
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
                    image={data.image}
                />
                <CardContent sx={{ height: 150, paddingBottom: 5 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="h6" color="error">
                        $ {data.price}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        paddingBottom: 2,


                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 30
                    }}>
                        <Stack direction="row" spacing={2}>
                            <NavLink to={'/cart'}>
                                <Button variant="contained" color='primary'>Comprar</Button>
                            </NavLink>
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
