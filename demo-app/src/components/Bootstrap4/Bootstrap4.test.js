import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap4 from './Bootstrap4';

describe('<Bootstrap4 />', () => {
  test('it should mount', () => {
    render(<Bootstrap4 />);
    
    const bootstrap4 = screen.getByTestId('Bootstrap4');

    expect(bootstrap4).toBeInTheDocument();
  });
});