class Config {
  private readonly baseBackendRouteUrl: URL;

  public readonly appRoutes = {
    getBaseUrl: () => inferLiteralFromString('/'),
    getThreadsUrl: () => inferLiteralFromString('/threads'),
    getOneThreadUrl: ({ ideaNick }: { ideaNick: string }) =>
      inferLiteralFromString(`/threads/${ideaNick}`),
    getRecommendsUrl: () => inferLiteralFromString('/recommends'),
    getMostPopularUrl: () => inferLiteralFromString('/most-popular'),
    getAboutUrl: () => inferLiteralFromString('/about'),
  };

  public constructor(baseBackendRouteUrl = 'http://localhost:3000/') {
    this.baseBackendRouteUrl = new URL(baseBackendRouteUrl);
  }

  public getBackendRouteUrl(pathname = '/trpc'): string {
    const backendRouteUrl = new URL(this.baseBackendRouteUrl.href);
    backendRouteUrl.pathname = pathname;
    return backendRouteUrl.href;
  }
}

export const routerConfig = new Config();
export type TAppRoutesParams = TParams<typeof routerConfig.appRoutes>;

function inferLiteralFromString<T extends string>(str: T): T {
  return str;
}

type TParams<T> = {
  readonly [K in keyof T]: T[K] extends (arg: infer P) => string ? P : never;
};
