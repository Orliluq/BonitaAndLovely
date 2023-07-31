import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
// import { terms, privacy, legal, contact } from './constants';
import { animateScroll } from 'react-scroll';

const Footer = ({ language }) => {

	const handleClick = (ev) => {
		animateScroll.scrollToTop({ duration: 300 });
	}

	const us = language === 'en' ? 'About us' : 'Sobre nosotros';

	return (
		<footer>
			<img src={logo} alt="Logo" />
			<ul>
				<li>
					<Link onClick={handleClick} className='aboutUs' to="/aboutUs">{us}</Link>
				</li>
			</ul>
			<nav className="navbar__bottom">
				{/* <ul>
					<li><Link onClick={handleClick} to="/terms">{terms}</Link></li>
					<li><Link onClick={handleClick} to="/privacy">{privacy}</Link></li>
					<li><Link onClick={handleClick} to="/legal">{legal}</Link></li>
					<li><Link onClick={handleClick} to="/contact">{contact}</Link></li>
				</ul> */}
			</nav>
		</footer>
	)
}

// const Foot = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #b959bb;
//   color: #fff;
//   padding: 1rem;
//   position: relative;
//   z-index: 1;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 1rem 0;
//   }
// `;

// const MenuIcon = styled.div`
//   display: none;
//   cursor: pointer;
//   font-size: 1.5rem;

//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;

//   @media screen and (max-width: 768px) {
//     display: ${({showMenu}) => showMenu ? 'flex' : 'none'};
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background-color: #b959bb;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 1rem;
//   }
// `;

// const MenuItem = styled.li`
//   margin: 0 1rem;

//   @media screen and (max-width: 768px) {
//     margin: 0.5rem 0;
//   }
// `;

// const MenuLink = styled(NavLink)`
//   color: #fff;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     color: #eecafa;
//   }
// `;

// const LanguageButton = styled.button`
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 1rem;
//   cursor: pointer;
//   margin-left: 1rem;
//   position: relative;

//   &:hover {
//     color: #eecafa;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 0.8rem;
//   }
// `;

// const LanguageMenu = styled.ul`
//   background-color: #b959bb;
//   border-radius: 5px;
//   list-style: none;
//   margin: 0;
//   padding:0.5rem;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
// `;

// const LanguageOption = styled.li`
//   color: #fff;
//   cursor: pointer;
//   padding: 0.5rem;

//   &:hover {
//     background-color: #eecafa;
//     color: #b959bb;
//   }
// `;


export default Footer;