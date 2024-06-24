import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FotoStudio
                </Typography>
                <Button color="inherit" href="#inicio">
                    Inicio
                </Button>
                <Button color="inherit" href="#sesiones">
                    Sesiones de Fotos
                </Button>
                <Button color="inherit" href="#edicion">
                    Edición de Fotos
                </Button>
                <Button color="inherit" href="../#albumes">
                    Álbumes Fotográficos
                </Button>
                <Button color="inherit" href="#contacto">
                    Contacto
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
