import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/appRouter';
import { TrpcProvider } from '@/lib/trpcConfig';
import '@/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrpcProvider>
      <RouterProvider router={appRouter} />
    </TrpcProvider>
  </StrictMode>,
);
