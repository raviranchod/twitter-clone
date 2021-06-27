import { render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";
import { axe } from "jest-axe";

describe("<Button />", () => {
  let expectedProps: Pick<ButtonProps, "children">;

  beforeEach(() => {
    expectedProps = {
      children: "John Cena",
    };
  });

  const linkProps: Pick<ButtonProps, "href"> = {
    href: "http://www.google.com",
  };

  const eventProps: Pick<ButtonProps, "onClick" | "isDisabled" | "isLoading"> =
    {
      onClick: jest.fn(),
    };

  it("renders correctly", () => {
    render(<Button {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveAttribute("type", "button");
  });

  it("can change it's type", () => {
    render(<Button {...expectedProps} type='reset' />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toHaveAttribute("type", "reset");
  });

  it("renders an an A tag", () => {
    render(<Button {...expectedProps} {...linkProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element.tagName).toEqual("A");
    expect(element).toHaveAttribute("href", linkProps.href);
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Button {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
