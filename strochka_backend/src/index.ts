import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './trpc';

const expressApp = express();

expressApp.use(cors());

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
