import React from 'react';
import { render, screen } from '@testing-library/react';
//import App from './App';
import { AppRouter } from '../src/routes/AppRouter';

test('renders learn react link', () => {
  render(<AppRouter />);
  const linkElement = screen.getByText(/approuter/i);
  expect(linkElement).toBeInTheDocument();
});
