import React from "react";

type Props = {
  label: String;
  children: React.ReactNode;
};

export const LabelAm = (props: Props) => {
  return (
    <>
      <label>
        {props.label}
        {props.children}
      </label>
    </>
  );
};
