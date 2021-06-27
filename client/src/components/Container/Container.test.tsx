import { render, screen } from "@testing-library/react";
import { Container, ContainerProps } from "./Container";
import { axe } from "jest-axe";

describe("<Container />", () => {
  let expectedProps: ContainerProps;

  beforeEach(() => {
    expectedProps = {
      children: "Four more years.",
    };
  });

  it("renders correctly", () => {
    render(<Container {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("DIV");
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Container {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
