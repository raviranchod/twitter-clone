import { render, screen } from "@testing-library/react";
import { Link, LinkProps } from "./Link";
import { axe } from "jest-axe";

describe("<Link />", () => {
  let expectedProps: LinkProps;

  beforeEach(() => {
    expectedProps = {
      children: "John Cena",
      href: "/home",
    };
  });

  it("renders correctly", () => {
    render(<Link {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveAttribute("href", expectedProps.href);
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Link {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
