import { Link, Outlet } from 'react-router-dom';
import { routerConfig } from '../../lib/routerConfig';

export const Layout = () => {
  return (
    <div>
      <p>
        <b>IdeaNick</b>
      </p>
      <ul>
        <li>
          <Link to={routerConfig.appRoutes.allIdeas()}>All Ideas</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
