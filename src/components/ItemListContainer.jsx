import { Box, Typography } from '@mui/material'
import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div>
            <Box sx={{ bgcolor: 'whitesmoke' }}>
                <Typography
                    variant='h2'
                    mt={20}
                    sx={{color: 'darkolivegreen'}}
                >
                    {props.greeting}
                </Typography>
            </Box>


        </div>

    )
}

export default ItemListContainer