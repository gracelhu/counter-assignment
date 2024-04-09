import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  const countDisplay = screen.getByText(/0/i);
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText(/-/i);
  const countDisplay = screen.getByText(/0/i);
  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent(/-1/i);
});
