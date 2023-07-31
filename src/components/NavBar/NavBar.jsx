import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ initialLanguage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState(initialLanguage || 'en');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageMenu(false);
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>
        <Menu showMenu={showMenu}>
          <MenuItem>
            <MenuLink to="/" lang={language === 'en' ? 'en' : 'es'}>
              {language === 'en' ? 'Home' : 'Inicio'}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/products" lang={language === 'en' ? 'en' : 'es'}>
              {language === 'en' ? 'Products' : 'Productos'}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about" lang={language === 'en' ? 'en' : 'es'}>
              {language === 'en' ? 'About' : 'Sobre Nosotros'}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact" lang={language === 'en' ? 'en' : 'es'}>
              {language === 'en' ? 'Contact' : 'Contacto'}
            </MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
      <LanguageButton onClick={toggleLanguageMenu}>
        {language === 'en' ? 'Language' : 'Idioma'}
      </LanguageButton>
      <LanguageMenu showLanguageMenu={showLanguageMenu}>
        <LanguageOption onClick={() => changeLanguage('en')} lang="en">
          English
        </LanguageOption>
        <LanguageOption onClick={() => changeLanguage('es')} lang="es">
          Español
        </LanguageOption>
      </LanguageMenu>
    </>
  );
};


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b959bb;
  color: #fff;
  padding: 1rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #b959bb;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #eecafa;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  position: relative;

  &:hover {
    color: #eecafa;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LanguageMenu = styled.ul`
  display: ${({ showLanguageMenu }) => (showLanguageMenu ? 'block' : 'none')};
  background-color: #b959bb;
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

const LanguageOption = styled.li`
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: #eecafa;
    color: #b959bb;
  }
`;

export default Navbar;