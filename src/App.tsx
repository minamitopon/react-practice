import "./App.css";
import { LabelAm } from "./components/atoms/common/LabelAm";
import { InputAm } from "./components/atoms/common/InputAm";
import { ListAm } from "./components/atoms/common/ListAm";
import { UlAm } from "./components/atoms/common/UlAm";

function App() {
  const handleChanged = (v: string) => {
    console.log(v);
  };
  return (
    <>
      <h1>Hello world</h1>
      <UlAm>
        <ListAm>
          <LabelAm label={"test"}>
            <InputAm placeholder={"入力欄"} changed={handleChanged} />
          </LabelAm>
        </ListAm>
        <ListAm>
          <LabelAm label={"test"}>
            <InputAm placeholder={"入力欄"} changed={handleChanged} />
          </LabelAm>
        </ListAm>
      </UlAm>
    </>
  );
}

export default App;
