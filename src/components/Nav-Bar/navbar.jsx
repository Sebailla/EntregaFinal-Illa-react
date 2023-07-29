import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget ';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/material';
import logo from './logo_1_ch-remo.png';
import { AppContext } from '../../context/context';

const pages = ['Tienda'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const { quantityCart } = React.useContext(AppContext)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to={'/products/all'}
                                style={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontWeight: 500,
                                    fontSize: 36,
                                    margin: 25,
                                    padding: 5
                                }}
                            >
                                {pages}
                            </Link>
                        </Menu>
                    </Box>
                    <Link to={'/'}>
                        <Box
                            component='img'
                            src={logo}
                            alt="logo"
                            sx={{ width: 180, height: 90 }}
                        />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to={'/products/all'}
                            style={{
                                textDecoration: 'none',
                                color: '#0d6efd',
                                fontWeight: 500,
                                fontSize: 36,
                                marginLeft: 60
                            }}
                        >
                            {pages}
                        </Link>
                    </Box>
                    {
                        quantityCart === 0 ?
                            null
                            :
                            <Box sx={{ flexGrow: 0 }}>
                                <CartWidget cartQuantity={quantityCart} />
                            </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;