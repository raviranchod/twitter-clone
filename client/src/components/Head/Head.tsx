import NextHead from "next/head";

type HeadProps = {
  children?: React.ReactNode;
  title: string;
};

const Head = ({ children, title }: HeadProps) => (
  <NextHead>
    <title>{title} / Twitter</title>
    {/* <meta name="description" content="Generated by create next app" /> */}
    <link rel="icon" href="/favicon.ico" />
    {children}
  </NextHead>
);

export { Head };
