import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { routerConfig } from './lib/routerConfig';
import { Layout } from './pages/layout';

const AllIdeasPage = lazy(() => import('./pages/allIdeasPage'));
const ViewIdeaPage = lazy(() => import('./pages/viewIdeaPage'));

const {
  appRoutes: { baseUrl, allIdeas, viewIdea },
} = routerConfig;

export const appRouter = createBrowserRouter([
  {
    path: baseUrl(),
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Navigate to={allIdeas()} replace />,
      },
      {
        path: allIdeas(),
        element: <AllIdeasPage />,
      },
      {
        path: viewIdea({ ideaNick: ':ideaNick' }),
        element: <ViewIdeaPage />,
      },
    ],
  },
]);
