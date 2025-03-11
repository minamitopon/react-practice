import React from "react";

type Props = {
  children: React.ReactNode;
};

export const UlAm = (props: Props) => {
  return <ul>{props.children}</ul>;
};
