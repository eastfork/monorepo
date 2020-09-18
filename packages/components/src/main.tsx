import React from 'react';

export interface MainProps {
  text: string;
}

export const Main = ({ text }: MainProps) => <main>{text}</main>;
