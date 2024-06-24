import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4, textAlign: 'center', width: '100%'}}>
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} FotoStudio. Todos los derechos reservados.
            </Typography>
            <Typography variant="body2">
                <Link href="#" color="inherit" underline="none">
                    Política de Privacidad
                </Link>
                {' | '}
                <Link href="#" color="inherit" underline="none">
                    Términos de Servicio
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
