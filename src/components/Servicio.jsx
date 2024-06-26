import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import '../styles.scss';

const Servicio = ({ title, description, image }) => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box className="servicio">
                <Box className="descripcion">
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                </Box>
                <img src={image} alt={`Ejemplo de ${title}`} />
            </Box>
        </Container>
    );
};

export default Servicio;
