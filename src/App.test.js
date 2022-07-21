import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App';

test('list is generated', async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/accusamus beatae ad facilis cum similique qui sunt/i));
  expect(screen.getByText(/accusamus beatae ad facilis cum similique qui sunt/i)).toBeInTheDocument();


});