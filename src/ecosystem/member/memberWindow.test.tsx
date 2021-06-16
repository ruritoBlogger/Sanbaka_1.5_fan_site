import { render, screen } from '@testing-library/react';

import MemberWindow from './memberWindow';

describe('MemberWindow Component', () => {
  test('check MemberWindow behavior', () => {
    render(<MemberWindow isRight />);
    expect(screen.getByText('サンバカーニバル', { exact: false })).toBeInTheDocument;
  });
});
