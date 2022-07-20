import { appRouter } from '@/backend/router';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';


// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});