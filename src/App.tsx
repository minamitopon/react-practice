import "./App.css";
import { LabelAm } from "./components/atoms/common/LabelAm";
import { InputAm } from "./components/atoms/common/InputAm";

function App() {
  const handleChanged = (v: string) => {
    console.log(v);
  };
  return (
    <>
      <h1>Hello world</h1>
      <LabelAm label={"test"}>
        <InputAm placeholder={"入力欄"} changed={handleChanged} />
      </LabelAm>
    </>
  );
}

export default App;
