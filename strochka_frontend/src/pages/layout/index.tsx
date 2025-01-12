import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import styles from './index.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
