import { ChangeEvent } from "react";

type Props = {
  type?: "text" | "textarea";
  placeholder: string;
  changed: (value: string) => void;
};

export const InputAm = ({
  type = "text",
  placeholder = "入力してください",
  changed,
}: Props) => {
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    changed(e.target.value);
  };
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={updateValue} />
    </>
  );
};
