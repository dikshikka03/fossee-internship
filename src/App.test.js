import { render, screen } from '@testing-library/react';
import App from './App';

test('renders workshop heading', () => {
  render(<App />);
  const heading = screen.getByText(/workshop booking/i);
  expect(heading).toBeInTheDocument();
});