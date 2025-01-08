import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
