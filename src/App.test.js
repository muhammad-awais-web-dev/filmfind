import { render, screen } from '@testing-library/react';
import Home from './pages/home/Home';

test('renders welcome message', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
