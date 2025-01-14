import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';
import styles from './index.module.scss';

export const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.outlet}>
      <Outlet />
    </div>
    <Footer />
  </div>
);
