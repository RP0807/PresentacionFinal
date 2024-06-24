import { Container } from '@mui/material';
import React from 'react';
import Album from './assets/album.jpg';
import EdicionFotos from './assets/edicionfotos.jpg';
import SesionFotos from './assets/sesionfotos.png';
import Caratula from './components/Caratula';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
// import Navbar from './components/Navbar';
import Servicio from './components/Servicio';

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Container maxWidth="lg">
                <Caratula class="inicio" />
                <Servicio
                    id="sesiones"
                    title="Sesiones de Fotos"
                    description="Capturamos tus momentos más especiales con nuestras sesiones de fotos profesionales. Ofrecemos una variedad de temas y estilos para adaptarnos a tus necesidades."
                    image={SesionFotos}
                />
                <Servicio
                    id="edicion"
                    title="Edición de Fotos"
                    description="Mejoramos tus fotos con nuestro servicio de edición profesional. Ajustamos la luz, el color y corregimos imperfecciones para obtener el mejor resultado."
                    image={EdicionFotos}
                />
                <Servicio
                    id="albumes"
                    title="Álbumes Fotográficos"
                    description="Crea recuerdos duraderos con nuestros álbumes fotográficos personalizados. Perfecto para bodas, aniversarios y otros eventos importantes."
                    image={Album}
                />
                <Formulario id="contacto" />
            </Container>
            <Footer />
        </div>
    );
};

export default App;
