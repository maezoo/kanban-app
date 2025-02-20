import { useRecoilState, useRecoilValue } from "recoil";
import { minsuteState, hoursSelector } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minsuteState);
  const hours = useRecoilValue(hoursSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
