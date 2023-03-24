import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bootstrap3Page from './Bootstrap3Page';

describe('<Bootstrap3Page />', () => {
  test('it should mount', () => {
    render(<Bootstrap3Page />);
    
    const bootstrap3Page = screen.getByTestId('Bootstrap3Page');

    expect(bootstrap3Page).toBeInTheDocument();
  });
});