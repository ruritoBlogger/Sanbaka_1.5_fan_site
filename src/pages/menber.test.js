import React from 'react';
import { render, screen } from '@testing-library/react';

import Member from './member';

describe('Member', () => {
  test('check Member behavior', () => {
    render(<Member />);
    expect(screen.getByText('Member', { exact: false })).toBeInTheDocument;
  });
});
