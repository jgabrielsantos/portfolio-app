import { NextPage } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
}

const Example: NextPage<Props> = ({ children }) => {
  return <div>Hello</div>;
}

export default Example;
