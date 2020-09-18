import React from 'react';
import { Main } from '@abacus/components';

export interface AppProps {
  text: string;
}

export const App: React.FunctionComponent<AppProps> = ({ text }) => <Main text={text} />;
