import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import { Drafts } from "@mui/icons-material"
import CartWidget from "./CartWidget ";
import logo from "./logo_1_ch-remo.png"


const navLinks = [
    {
        title: "Home", path: "#home", icon: <InboxIcon />
    },
    {
        title: "Categoría", path: "#categoria", icon: <Drafts />
    },
    {
        title: "Login", path: "#login"
    },
    {
        title: "Registro", path: "#registro"
    }
];

const Navbar = () => {

    const cartItem = 2;

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
                <Toolbar>

                    <IconButton
                        /*  color="inherit" */
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: 'Flex', md: 'none' }, color: 'black' }}
                        edge='start'
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        component='img'
                        src={logo}
                        alt="logo"
                        sx={{ width: 200, height: 100 }}
                    />

                    <Typography
                        variant="h4"
                        sx={{ flexGrow: 1, fontFamily: '' }}
                        color={'orange'}
                    >
                        <h1>
                            Tienda Acualife
                        </h1>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '40' }}>
                        {
                            navLinks.map(item => (
                                <Button
                                    /* color='inherit' */
                                    sx={{ color: 'black' }}
                                    key={item.title}
                                    component='a'
                                    href={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))
                        }
                    </Box>
                    <CartWidget cartItem={cartItem} />

                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: 'none', md: 'block' } }}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>

        </>
    )
}

export default Navbar;