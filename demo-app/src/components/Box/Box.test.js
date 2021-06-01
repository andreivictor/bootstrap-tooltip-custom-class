import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Box from './Box';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<Box />);
    
    const box = screen.getByTestId('Box');

    expect(box).toBeInTheDocument();
  });
});