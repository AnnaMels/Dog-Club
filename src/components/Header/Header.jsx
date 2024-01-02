import css from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(`.${css.mobile_menu}`);
    mobileMenu.classList.toggle(css.is_open);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={css.header}>
      <a href="/">
        <svg className={css.logo_icon}>
          <use href="../../images/icons.svg#icon-logo"></use>
        </svg>
      </a>
      <div className={css.menu}>
        <nav>
          <ul className={css.nav_list}>
            <li>
              <a className={css.nav_link} href="">
                Less talk{" "}
              </a>
            </li>
            <li>
              <a className={css.nav_link} href="">
                Services category
              </a>
            </li>
            <li>
              <a className={css.nav_link} href="">
                Happy customer
              </a>
            </li>
            <li>
              <a className={css.nav_link} href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={css.icons_wrapper}>
        <svg className={css.basket_icon} width="24" height="24">
          <use href="../../images/icons.svg#icon-basket"></use>
        </svg>
        <button className="button hidden">Contact us</button>
        {!isMobileMenuOpen && (
          <svg
            onClick={toggleMobileMenu}
            className={css.burger_icon}
            width="24"
            height="24"
          >
            <use href="../../images/icons.svg#icon-burger"></use>
          </svg>
        )}
      </div>
      <div className={css.mobile_menu}>
        <svg
          onClick={toggleMobileMenu}
          className={css.close_icon}
          width="24"
          height="24"
        >
          <use href="../../images/icons.svg#icon-close"></use>
        </svg>
        <nav className={css.mobile_nav}>
          <ul className={css.mobile_nav_list}>
            <li>
              <a className={css.mobile_nav_link} href="#">
                Less talk
              </a>
            </li>
            <li>
              <a className={css.mobile_nav_link} href="#">
                Services category
              </a>
            </li>
            <li>
              <a className={css.mobile_nav_link} href="#">
                Happy customer
              </a>
            </li>
            <li>
              <a className={css.mobile_nav_link} href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className={css.socials}>
            <li>
              <a className={css.socials_link} href="#">
                <svg width="32" height="32" className={css.instagram_icon}>
                  <use href="../../images/icons.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className={css.socials_link} href="/">
                <svg className={css.facebook_icon} width="32" height="32">
                  <use href="../../images/icons.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
