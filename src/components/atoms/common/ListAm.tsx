import React from "react";

type Props = {
  children: React.ReactNode | String;
};

export const ListAm = (props: Props) => {
  return (
    <>
      <li>{props.children}</li>
    </>
  );
};
