import React from 'react';
import { render, screen } from '@testing-library/react';

import HistoryWindow from './historyWindow';

describe('HistoryWindow Component', () => {
  test('check HistoryWindow behavior', () => {
    render(<HistoryWindow isTop={true} />);
    expect(screen.getByText('1.5周年', { exact: false })).toBeInTheDocument;
  });
});
