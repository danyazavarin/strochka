import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';

const expressApp = express();

const serverPort = 3000;

expressApp.listen(serverPort, () => {
  console.info(`Listening at http://localhost:${serverPort}`);
});

expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);
