import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@/util/testUtils/test-utils";
import RefreshButton from "@/components/elements/buttons/RefreshButton";

it("RefreshButton renders with children", () => {
  render(<RefreshButton variant="primary">Refresh</RefreshButton>);

  expect(screen.getByRole('button')).toHaveTextContent('Refresh');

  render(<RefreshButton variant="primary" test-id="button-with-nodes">
    <h1>Heading</h1>
  </RefreshButton>);

  expect(screen.getByRole('heading')).toBeInTheDocument();
})

it("RefreshButton click event handles click", () => {
  const onClick = jest.fn();

  render(<RefreshButton variant="primary" onClick={onClick}>Refresh</RefreshButton>);

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalledTimes(1);
})

it("Disabled RefreshButton gets no clicks", () => {
  const onClick = jest.fn();

  render(<RefreshButton variant="primary" disabled>Disabled Refresh</RefreshButton>);

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalledTimes(0);
})
