import { dirname, join } from 'path';
import express from 'express';
import compression from 'compression';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App, rootContainerId } from '@abacus/frontend';

const appRootDirectory = dirname(require.resolve('@abacus/frontend/package.json'));
const appBundleDirectory = join(appRootDirectory, 'build', 'umd');

export const createHttpServer = (): express.Express => {
  const app = express();

  app.use(compression());
  app.use(express.static(appBundleDirectory));
  app.get('/server', ssrHandler);

  return app;
};

const ssrHandler = (_req: express.Request, res: express.Response) => {
  res.end(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Monorepo example server-side renderer app">
    <title>Monorepo Example</title>
    <link href="main.css" rel="stylesheet">
</head>
<body>
    <div id="${rootContainerId}" data-ssr>
        ${ReactDOMServer.renderToString(<App text="Hello World (SSR!)" />)}
    </div>
    <script type="text/javascript" src="index.js"></script>
</body>
</html>`
  );
};
