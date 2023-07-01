import React from 'react'
import { ShoppingBag } from '@mui/icons-material/'
import { Box, IconButton, Typography} from "@mui/material";
import { orange } from '@mui/material/colors';

const CartWidget = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <IconButton
                color="inherit"
                size="large"
                sx={{ color: orange[300], ml: 10 }}

            >
                <ShoppingBag />
                <Typography
                    variant="subtitle2"
                    ml={0.3}
                    mb={1}
                >
                    1
                </Typography>
            </IconButton>
        </Box>
    )
}

export default CartWidget 