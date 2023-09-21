"use client";

import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
