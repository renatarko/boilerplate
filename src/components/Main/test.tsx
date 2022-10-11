import { screen, render } from "@testing-library/react";
import Main from ".";

// describe: o que estamos testando
describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole("heading", { name: /React Avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
