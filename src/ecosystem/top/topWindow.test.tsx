import React from 'react';
import { render, screen } from '@testing-library/react';

import TopWindow from './topWindow';

describe('TopWindow Component', () => {
  test('check TopWindow behavior', () => {
    render(<TopWindow />);
    expect(screen.getByText('さんばか1.5周年', { exact: false })).toBeInTheDocument;
  });
});
