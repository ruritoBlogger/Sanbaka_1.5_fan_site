import React from 'react';
import { render, screen } from '@testing-library/react';

import Site from './site';

describe('Site', () => {
  test('check Site behavior', () => {
    render(<Site />);
    expect(screen.getByText('Site', { exact: false })).toBeInTheDocument;
  });
});

