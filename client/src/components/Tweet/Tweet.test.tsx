// https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-1681
// Although our React DOM version exceeds 16.9, we still get these errors when using next/image or next/link
import { render, screen } from "@testing-library/react";
import { Tweet, TweetProps } from "./Tweet";
import { axe } from "jest-axe";

describe("<Tweet />", () => {
  const originalError = console.error;
  let expectedProps: TweetProps;

  beforeEach(() => {
    console.error = (...args: string[]) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };

    expectedProps = {
      name: "Jack Dorsey",
      username: "jack",
      tweet: "just setting up my twttr",
      createdAt: "Mar 21, 2006",
      profileImageUrl: "/images/jack.png",
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  it("renders correctly", () => {
    render(<Tweet {...expectedProps} />);
    const name = screen.getByText(expectedProps.name);
    const username = screen.getByText(`@${expectedProps.username}`);
    const tweet = screen.getByText(expectedProps.tweet);
    const createdAt = screen.getByText(expectedProps.createdAt);
    const profileImage = screen.getByAltText(expectedProps.username);

    expect(name).toBeVisible();
    expect(username).toBeVisible();
    expect(tweet).toBeVisible();
    expect(createdAt).toBeVisible();
    expect(profileImage).toBeVisible();
  });

  it("has no accessibility issues", async () => {
    const { container } = render(<Tweet {...expectedProps} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
