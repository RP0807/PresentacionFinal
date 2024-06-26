import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Presentacion from '../assets/Presentacion.png';
import '../styles.scss';

const Caratula = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box className="presentacion">
                <img id="foto_Presentacion" src={Presentacion} alt="Foto del Estudio" />
                <Typography
                    variant="h2"
                    component="h1"
                    id="titulo"
                    className={isVisible ? 'visible' : ''}
                    sx={{ ml: 4 }}
                >
                    Bienvenido a FotoStudio
                </Typography>
            </Box>
        </Container>
    );
};

export default Caratula;
