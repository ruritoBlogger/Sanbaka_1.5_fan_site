import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  test('check Header behavior', () => {
    render(<Header />);
    expect(screen.getByText('header', { exact: false })).toBeInTheDocument;
  });
});
