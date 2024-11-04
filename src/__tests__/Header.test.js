// src/__tests__/Header.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} isDarkMode={false} />);

  expect(screen.getByText(/Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} isDarkMode={false} />);

  fireEvent.click(screen.getByText(/Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
});
