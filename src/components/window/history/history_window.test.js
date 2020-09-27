import React from 'react';
import { render, screen } from '@testing-library/react';

import HistoryWindow from './history_window';

describe('HistoryWindow Component', () => {
  test('check HistoryWindow behavior', () => {
    render(<HistoryWindow />);
    expect(screen.getByText('1.5周年', { exact: false })).toBeInTheDocument;
  });
});