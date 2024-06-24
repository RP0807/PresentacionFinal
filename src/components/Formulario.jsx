import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../styles.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [nota, setNota] = useState('');
    const [servicio, setServicio] = useState('Sesión de fotos');

    const sendToWhatsApp = () => {
        const message = `Nombre: ${nombre}%0ANota: ${nota}%0AServicio: ${servicio}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+51968681903&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box id="formulario-container">
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                    Contáctanos
                </Typography>
                <form id="formulario">
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        label="Déjanos una nota"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                    />
                    <TextField
                        label="Tipo de Servicio"
                        variant="outlined"
                        select
                        fullWidth
                        margin="normal"
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                    >
                        <MenuItem value="Sesión de fotos">Sesión de fotos</MenuItem>
                        <MenuItem value="Edición de fotos">Edición de fotos</MenuItem>
                        <MenuItem value="Álbum fotográfico">Álbum fotográfico</MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        sx={{ mt: 2 }}
                        onClick={sendToWhatsApp}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Formulario;
