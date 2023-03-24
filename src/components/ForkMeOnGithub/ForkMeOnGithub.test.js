import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForkMeOnGithub from './ForkMeOnGithub';

describe('<ForkMeOnGithub />', () => {
  test('it should mount', () => {
    render(<ForkMeOnGithub />);
    
    const forkMeOnGithub = screen.getByTestId('ForkMeOnGithub');

    expect(forkMeOnGithub).toBeInTheDocument();
  });
});