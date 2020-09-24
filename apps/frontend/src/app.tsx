import React from 'react';
import { Main } from '@abacus/components/main';

export interface AppProps {
  text: string;
}

export const defaultText = 'Default Text';

export const App = ({ text }: AppProps) => <Main text={text || defaultText} />;

export const rootContainerId = 'SITE_MAIN';
