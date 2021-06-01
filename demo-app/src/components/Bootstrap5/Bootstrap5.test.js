import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap5 from './Bootstrap5';

describe('<Bootstrap5 />', () => {
  test('it should mount', () => {
    render(<Bootstrap5 />);
    
    const bootstrap5 = screen.getByTestId('Bootstrap5');

    expect(bootstrap5).toBeInTheDocument();
  });
});