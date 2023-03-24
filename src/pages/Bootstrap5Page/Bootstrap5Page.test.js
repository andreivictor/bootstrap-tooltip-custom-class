import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap5Page from './Bootstrap5Page';

describe('<Bootstrap5Page />', () => {
  test('it should mount', () => {
    render(<Bootstrap5Page />);
    
    const bootstrap5Page = screen.getByTestId('Bootstrap5Page');

    expect(bootstrap5Page).toBeInTheDocument();
  });
});