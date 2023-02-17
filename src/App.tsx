import { useState } from "react";
import "./App.css";
import { DatePicker } from "./date-picker";

function App() {
  const [date, setDate] = useState(() => new Date());

  return (
    <div className="App">
      <DatePicker value={date} onChange={setDate} />
    </div>
  );
}

export default App;
