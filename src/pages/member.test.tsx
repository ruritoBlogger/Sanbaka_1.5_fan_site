import { render, screen } from '@testing-library/react';

import Member from './member';

describe('Member', () => {
  test('check Member behavior', () => {
    render(<Member />);
    expect(screen.getByText('ユニット', { exact: false })).toBeInTheDocument;
  });
});
