import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap3 from './Bootstrap3';

describe('<Bootstrap3 />', () => {
  test('it should mount', () => {
    render(<Bootstrap3 />);
    
    const bootstrap3 = screen.getByTestId('Bootstrap3');

    expect(bootstrap3).toBeInTheDocument();
  });
});