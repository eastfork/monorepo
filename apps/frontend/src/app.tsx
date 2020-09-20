import React from 'react';
import { Main } from '@abacus/components/main';

export interface AppProps {
  text: string;
}

export const App: React.FunctionComponent<AppProps> = ({ text }) => <Main text={text} />;

export const rootContainerId = 'SITE_MAIN';
