import React, { useEffect } from "react";
import { StyledPage } from "./page.styles";

interface PageProps {
  homepage?: boolean;
  children: any;
  className?: any;
}

const Page = ({ homepage, children, className }: PageProps) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <StyledPage homepage={homepage} className={className}>{children}</StyledPage>;
};

export default Page;
