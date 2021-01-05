import React from 'react';
import { render, screen } from '@testing-library/react';

import Road from './road';

describe('Road', () => {
  test('check Road behavior', () => {
    render(<Road />);
    expect(screen.getByText('歩んできた道のり', { exact: false })).toBeInTheDocument;
  });
});
