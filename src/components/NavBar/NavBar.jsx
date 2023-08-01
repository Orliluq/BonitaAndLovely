
import style from './NavBar.module.css';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logoBonitaLovelyw.png';
import bagIcon from '../../assets/img/baghandle.svg'
import bellIcon from '../../assets/img/-icon-bell.svg';
import vector from '../../assets/img/vector.svg'
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
     
      <nav className={style.nav}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={style.logo} />
        </Link>

        {/* <div className={style.menuIcon} onClick={toggleMenu}>
          <FaBars />
        </div> */}

        <ul className={`${style.menu} ${showMenu ? style.show : ''}`}>
          <li className={style.menuItem}>
            <NavLink to="/" lang={initialLanguage === 'en' ? 'en' : 'es'}>
              {initialLanguage === 'en' ? 'Home' : 'Inicio'}
            </NavLink>
          </li>

          <li className={style.menuItem}>
            <NavLink to="../../views/AboutUs/AboutUs" lang={initialLanguage === 'en' ? 'en' : 'es'}>
              {initialLanguage === 'en' ? 'Sobre Nosotros' : 'About Us'}
            </NavLink>
          </li>

          <li className={style.menuItem}>
            <NavLink to="../../views/contact/contact" lang={initialLanguage === 'en' ? 'en' : 'es'}>
              {initialLanguage === 'en' ? 'Contact Us' : 'Contacto'}
            </NavLink>
          </li>

          <li className={style.menuItem}>
            <NavLink to="" lang={initialLanguage === 'en' ? 'en' : 'es'}>
              {initialLanguage === 'en' ? 'FAQs' : 'FAQs'}
            </NavLink>
          </li>
        </ul>
        <div className={style.header}></div>
        <img className={style.bagIcon} alt="" src={bagIcon} />
        <img className={style.bellIcon} alt="" src={bellIcon} />
        <img className={style.vector} alt="" src={vector} />
        <p className={style.menuItem}>
            <NavLink to="" lang={initialLanguage === 'en' ? 'en' : 'es'}>
              {initialLanguage === 'en' ? 'Login/SignUp' : 'Ingresar/Crear cuenta'}
            </NavLink>
          </p>

      </nav>
    </>
  );
};

export default Navbar;
