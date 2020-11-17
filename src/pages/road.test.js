import React from 'react';
import { render, screen } from '@testing-library/react';

import Road from './road';

describe('Road', () => {
  test('check Road behavior', () => {
    render(<Road />);
    expect(screen.getByText('Road', { exact: false })).toBeInTheDocument;
  });
});
