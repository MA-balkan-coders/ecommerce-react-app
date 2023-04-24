import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header" id="header">
      <a className="logo" href="/">{}</a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item nav__item--is-active">
            <a href="#home" className="nav__link ">
              home
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              phones
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              tablets
            </a>
          </li>

          <li className="nav__item">
            <a href="/" className="nav__link">
              accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__icons">
        <a
          className="icon icon--favorite-empty"
          href="favorite-empty-icon"
        >
          {}
        </a>
        <a
          className="icon icon--cart-empty"
          href="cart-empty-icon"
        >
          {}
        </a>
        <a
          className="icon--menu"
          href="icon--menu"
        >
          {}
        </a>
      </div>

    </header>
  );
};
