import React from 'react';
import { render, screen } from '@testing-library/react';

import MemberWindow from './memberWindow';

describe('MemberWindow Component', () => {
  test('check MemberWindow behavior', () => {
    render(<MemberWindow />);
    expect(screen.getByText('メンバー', { exact: false })).toBeInTheDocument;
  });
});