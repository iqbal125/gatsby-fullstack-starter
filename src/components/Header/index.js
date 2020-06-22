import React, { useState, useContext } from 'react';
import styles from './header.module.css';

import { Link } from 'gatsby';
import Search from '../Search';
import AuthContext from '../../utils/auth_context';
import GeneralContext from '../../utils/general_context';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

import { FcSearch } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Header = ({ props }) => {
  const [navLinks, toggleNavLinks] = useState(false);
  const [search, setSearch] = useState(false);
  const context = useContext(AuthContext);
  const contextGeneral = useContext(GeneralContext);
  const { uri } = props;

  const isHome = uri === '/';

  const navLinksHandler = () => (navLinks ? toggleNavLinks(false) : toggleNavLinks(true));
  const searchHandler = () => (search ? setSearch(false) : setSearch(true));
  const menuHandler = () => {
    contextGeneral.sideState.isOpen
      ? contextGeneral.closeSideDrawer()
      : contextGeneral.openSideDrawer();
  };

  const logOut = () => {
    navigate('/');
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
  };

  console.log(contextGeneral);

  return (
    <>
      <header className={isHome ? styles.header_home : styles.header_not_home}>
        <div className={styles.left_header}>
          {/* Desktop */}
          <div className={styles.desktop_logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Mobile */}
          <div className={styles.menu_icon}>
            {!navLinks ? (
              <div onClick={navLinksHandler} className={styles.hamburger}>
                <GiHamburgerMenu />
              </div>
            ) : (
              <div onClick={navLinksHandler} className={styles.close_button}>
                <AiOutlineClose />
              </div>
            )}
          </div>
        </div>

        <div className={styles.mid_header}>
          {/* Desktop */}
          <div className={styles.desktop_links}>
            <Link
              to="/about"
              className={styles.header_link}
              activeClassName={styles.header_link_active}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={styles.header_link}
              activeClassName={styles.header_link_active}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className={styles.header_link}
              activeClassName={styles.header_link_active}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={styles.header_link}
              activeClassName={styles.header_link_active}
            >
              Blog
            </Link>
          </div>
          {/* Mobile */}
          <div className={styles.mobile_logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.right_header}>
          {/* Desktop */}
          <div className={styles.searchbox}>
            <div className={styles.search}>
              <Search />
            </div>
          </div>
          {!context.authState.isAuthenticated && (
            <Link to="/app/login" className={styles.login_button_desktop}>
              Login
            </Link>
          )}
          {context.authState.isAuthenticated && (
            <div className={styles.header_photo_wrap_desk}>
              {context.authState.user.photo ? (
                <img
                  src={context.authState.user.photo}
                  onClick={menuHandler}
                  className={styles.header_photo}
                  alt="Not Found"
                />
              ) : (
                <MdAccountCircle className={styles.header_photo} onClick={menuHandler} />
              )}
            </div>
          )}
        </div>
        {/* Mobile */}
        <div className={styles.mobile_search}>
          {search && (
            <div className={isHome ? styles.search_home : styles.search_not_home}>
              <Search />
            </div>
          )}
          <div onClick={searchHandler} className={styles.search_icon}>
            <FcSearch />
          </div>
          {!context.authState.isAuthenticated && (
            <Link
              to="/app/login"
              className={styles.login_button_mobile}
              activeClassName={styles.login_button_active}
            >
              Login
            </Link>
          )}

          {context.authState.isAuthenticated && (
            <div className={styles.header_photo_wrap_mobile}>
              {context.authState.user.photo ? (
                <img
                  src={context.authState.user.photo}
                  onClick={menuHandler}
                  className={styles.header_photo}
                  alt="Not Found"
                />
              ) : (
                <MdAccountCircle className={styles.header_photo} onClick={menuHandler} />
              )}
            </div>
          )}
        </div>
      </header>
      {/* Mobile Hamburger Links*/}
      {navLinks && (
        <>
          <div className={isHome ? styles.dropdown_home : styles.dropdown_not_home}>
            <Link
              to="/about"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Blog
            </Link>
          </div>
        </>
      )}
      {contextGeneral.sideState.isOpen && <div className={styles.side_drawer}>fffff</div>}
    </>
  );
};

export default Header;
