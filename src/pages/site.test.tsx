import { render, screen } from '@testing-library/react';

import Site from './site';

describe('Site', () => {
  test('check Site behavior', () => {
    render(<Site />);
    expect(screen.getByText('サイト制作者', { exact: false })).toBeInTheDocument;
  });
});
