import { render, screen } from "@testing-library/react";
import { Heading, HeadingProps } from "./Heading";
import { axe } from "jest-axe";

describe("<Heading />", () => {
  let expectedProps: Pick<HeadingProps, "children">;

  beforeEach(() => {
    expectedProps = {
      children: "Twitter",
    };
  });

  it("renders correctly", () => {
    render(<Heading {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("H1");
  });

  it("renders as a H6 tag", () => {
    render(<Heading {...expectedProps} as='h6' />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element.tagName).toEqual("H6");
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Heading {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
