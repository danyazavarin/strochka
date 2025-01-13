import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { routerConfig } from '@/lib/routerConfig';
import { Layout } from '@/pages/layout';

const ThreadsPage = lazy(() => import('./pages/threadsPage'));
const OneThreadPage = lazy(() => import('./pages/oneThreadPage'));
const PreviewPage = lazy(() => import('./pages/previewPage'));

const {
  appRoutes: { getBaseUrl, getThreadsUrl, getOneThreadUrl },
} = routerConfig;

export const appRouter = createBrowserRouter([
  {
    path: getBaseUrl(),
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <PreviewPage />,
      },
      {
        path: getThreadsUrl(),
        element: <ThreadsPage />,
      },
      {
        path: getOneThreadUrl({ ideaNick: ':ideaNick' }),
        element: <OneThreadPage />,
      },
    ],
  },
]);
