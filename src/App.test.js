import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

test('full app rendering/navigating', () => {
  const console = global.console;
	global.console = { error: jest.fn() };
  const { container,unmount  } = render(
      <App />
    ,
    { container: document.body },
  )
  unmount();
  global.console = console;
  
});