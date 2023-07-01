import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, withTheme } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import { Drafts } from "@mui/icons-material"
import CartWidget from "./CartWidget ";


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

    const [open, setOpen] = useState(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: 'Flex', md: 'none' } }}
                        edge='start'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        sx={{ flexGrow: 1 }}
                        color={'orange'}
                    >
                        Tienda Aqualife
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {
                            navLinks.map(item => (
                                <Button
                                    color='inherit'
                                    key={item.title}
                                    component='a'
                                    href={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))
                        }
                    </Box>

                    {/* Carrito */}
                    <CartWidget />

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