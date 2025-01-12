import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import { headerLinks, logoLink } from './constants';
import classnames from 'classnames';
import { SearchElement } from '../../assets/searchElement';

export const Header = () => {
  return (
    <header className={styles.header}>
      <main className={styles.header__content}>
        <Link className={styles.header__logo} to={logoLink}>
          Strochka
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            {headerLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  classnames(styles.header__link, { [styles.header__link_active]: isActive })
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
          <div className={styles.header__image} tabIndex={0}>
            <SearchElement />
          </div>
        </nav>
      </main>
    </header>
  );
};
