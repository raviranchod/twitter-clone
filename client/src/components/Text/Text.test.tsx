import { render, screen } from "@testing-library/react";
import { Text, TextProps } from "./Text";
import { axe } from "jest-axe";

describe("<Text />", () => {
  let expectedProps: TextProps;

  beforeEach(() => {
    expectedProps = {
      children: "Follow",
    };
  });

  it("renders correctly", () => {
    render(<Text {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("P");
  });

  it("renders as a SPAN tag", () => {
    render(<Text {...expectedProps} as='span' />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element.tagName).toEqual("SPAN");
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Text {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
