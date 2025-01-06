import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { routerConfig } from './lib/routerConfig';

const AllIdeasPage = lazy(() => import('./pages/allIdeasPage'));
const ViewIdeaPage = lazy(() => import('./pages/viewIdeaPage'));

const {
  appRoutes: { baseUrl, allIdeas, viewIdea },
} = routerConfig;

export const appRouter = createBrowserRouter([
  {
    path: baseUrl(),
    element: <div>Home</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: allIdeas(),
    element: <AllIdeasPage />,
  },
  {
    path: viewIdea({ ideaNick: ':ideaNick' }),
    element: <ViewIdeaPage />,
  },
]);
