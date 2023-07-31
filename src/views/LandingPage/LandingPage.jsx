import { useState } from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import ChatBotComponent from '../../components/ChatBot/ChatBot';

const Container = styled.div`
  background-color: ${props => props.darkMode ? '#1a1a1a' : '#fff'};
  color: ${props => props.darkMode ? '#fff' : '#333'};
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#eecafa' : '#fff'};
  color: ${props => props.primary ? '#333' : '#8d8af1'};
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#fff' : '#8d8af1'};
    color: ${props => props.primary ? '#eecafa' : '#fff'};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  color: #333;
  margin: 1rem;
`;

const CardDescription = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #666;
  margin: 1rem;
`;

const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    background-color: transparent;
    border: none;
    color: ${props => props.active ? '#8d8af1' : '#333'};
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #8d8af1;
    }
  }
`;

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getButtonLabel = (buttonLanguage) => {
    if (language === 'es') {
      return buttonLanguage === 'es' ? 'Español' : 'Inglés';
    } else if (language === 'en') {
      return buttonLanguage === 'es' ? 'Spanish' : 'English';
    }
  };

  return (
    <>
      <Container darkMode={isDarkMode}>
        <NavBar />
        <Title>{language === 'es' ? 'Bienvenidos' : 'Welcome'}</Title>
        <Subtitle>
          {language === 'es'
            ? 'Somos Bonita & Lovely. ¡Descubre la magia de la belleza con nosotros y sé siempre encantadora y llena de confianza!'
            : 'We are Bonita & Lovely.Discover the magic of beauty with us and always be charming and confident!'}
        </Subtitle>

        <Button primary>{language === 'es' ? 'Comprar Ahora' : 'Buy Now'}</Button>
        <CardContainer>
          <Card>
            <CardImage src="https://via.placeholder.com/300x300.png?text=Product+1" alt="Product 1" />
            <CardTitle>{language === 'es' ? 'Producto 1' : 'Product 1'}</CardTitle>
            <CardDescription>{language === 'es' ? 'Descripción del Producto 1' : 'Product 1 Description'}</CardDescription>
          </Card>
          <Card>
            <CardImage src="https://via.placeholder.com/300x300.png?text=Product+2" alt="Product 2" />
            <CardTitle>{language === 'es' ? 'Producto 2' : 'Product 2'}</CardTitle>
            <CardDescription>{language === 'es' ? 'Descripción del Producto 2' : 'Product 2 Description'}</CardDescription>
          </Card>
          <Card>
            <CardImage src="https://via.placeholder.com/300x300.png?text=Product+3" alt="Product 3" />
            <CardTitle>{language === 'es' ? 'Producto 3' : 'Product 3'}</CardTitle>
            <CardDescription>{language === 'es' ? 'Descripción del Producto 3' : 'Product 3 Description'}</CardDescription>
          </Card>
        </CardContainer>
        <div style={{ height: '300px', overflowY: 'scroll' }}>
          <Carousel />
        </div>

        <Button>{language === 'es' ? 'Ver Ofertas' : 'View Offers'}</Button>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          {isDarkMode ? (
            <RiSunLine style={{ fontSize: '3rem', marginRight: '1rem', cursor: 'pointer' }} onClick={toggleDarkMode} />
          ) : (
            <RiMoonClearLine style={{ fontSize: '3rem', marginRight: '1rem', cursor: 'pointer' }} onClick={toggleDarkMode} />
          )}
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.2rem' }}>
            {language === 'es' ? 'Activa o desactiva el modo oscuro' : 'Toggle dark mode'}
          </p>
        </div>
      </Container>
      <LanguageSelector>
        <button onClick={() => handleLanguageChange('es')} className={language === 'es' ? 'active' : ''}>
          {getButtonLabel('es')}
        </button>
        <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>
          {getButtonLabel('en')}
        </button>
      </LanguageSelector>
      <ChatBotComponent language={language} />
      <Footer />
    </>
  );
};

export default LandingPage;