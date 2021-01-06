import { render, screen } from '@testing-library/react';

import Home from './home';

describe('Home', () => {
  test('check Home behavior', () => {
    render(<Home />);
    expect(screen.getByText('おめでとうございます', { exact: false })).toBeInTheDocument;
  });
});
