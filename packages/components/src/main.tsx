import React from 'react';

export interface MainProps {
  text: string;
  reqs: number;
}

export const Main = ({ text }: MainProps) => <main>{text}</main>;
