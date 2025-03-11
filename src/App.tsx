import "./App.css";
import { LabelAm, InputAm, ListAm, UlAm } from "./components";

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
