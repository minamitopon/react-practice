type Props = {
  label: String;
  clicked: () => void;
};

export const ButtonAm = ({ label, clicked }: Props) => {
  return (
    <>
      <button type="button" onClick={() => clicked()}>
        {label}
      </button>
    </>
  );
};
