import React from 'react';

export interface MainProps {
  text: string;
}

export const Main = ({ text }: MainProps) => <main>{text}</main>;

export interface CardProps {
  heading: string;
  text: string;
}

export const Card = ({ heading, text }: CardProps) => (
  <div className="card">
    <div className="card-heading">{heading}</div>
    <div className="card-body">{text}</div>
  </div>
);
