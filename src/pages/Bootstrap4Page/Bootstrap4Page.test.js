import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap4Page from './Bootstrap4Page';

describe('<Bootstrap4Page />', () => {
  test('it should mount', () => {
    render(<Bootstrap4Page />);
    
    const bootstrap4Page = screen.getByTestId('Bootstrap4Page');

    expect(bootstrap4Page).toBeInTheDocument();
  });
});