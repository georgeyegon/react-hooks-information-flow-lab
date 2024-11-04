// src/__tests__/Filter.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  const handleCategoryChange = jest.fn();
  render(<Filter selectedCategory="All" onCategoryChange={handleCategoryChange} />);

  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange when the category is changed", () => {
  const handleCategoryChange = jest.fn();
  render(<Filter selectedCategory="All" onCategoryChange={handleCategoryChange} />);

  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Dairy" } });
  expect(handleCategoryChange).toHaveBeenCalled();
});
