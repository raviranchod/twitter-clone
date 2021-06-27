import React from "react";
import NextLink from "next/link";

export type LinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const Link = ({ children, className, href }: LinkProps) => (
  <NextLink href={href}>
    <a className={className}>{children}</a>
  </NextLink>
);

export { Link };
