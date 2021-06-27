import { render, screen } from "@testing-library/react";
import { VisuallyHidden, VisuallyHiddenProps } from "./VisuallyHidden";
import { axe } from "jest-axe";

describe("<VisuallyHidden />", () => {
  let expectedProps: VisuallyHiddenProps;

  beforeEach(() => {
    expectedProps = {
      children: "John Cena",
    };
  });

  it("renders correctly", () => {
    render(<VisuallyHidden {...expectedProps} />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element).toBeVisible();
    expect(element.tagName).toEqual("SPAN");
  });

  it("renders as a P tag", () => {
    render(<VisuallyHidden {...expectedProps} as='p' />);
    const element = screen.getByText(expectedProps["children"] as string);

    expect(element.tagName).toEqual("P");
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<VisuallyHidden {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
