
import { Box, IconButton, Badge } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartQuantity }) => {
    return (
        <Box>
            <Link to={'/cart'}>
                <IconButton aria-label='delete'>
                    <Badge badgeContent={cartQuantity} color='error'>
                        <ShoppingBagIcon fontSize='large' htmlColor='#0d6efd' />
                    </Badge>
                </IconButton>
            </Link>
        </Box>
    )
}

export default CartWidget;




