import React from 'react';
import { render, hydrate } from 'react-dom';
import { App, rootContainerId } from './app';
import 'sanitize.css';
import 'sanitize.css/typography.css';

const createContainer = (targetParent: Element) => {
  const newContainer = document.createElement('div');
  newContainer.id = rootContainerId;
  targetParent.appendChild(newContainer);
  return newContainer;
};

const container = document.getElementById(rootContainerId) ?? createContainer(document.body);

if (container.hasAttribute('data-ssr')) {
  hydrate(<App text="Hello World (hydrated)" />, container);
} else {
  render(<App text="Hello World (client-only)" />, container);
}
