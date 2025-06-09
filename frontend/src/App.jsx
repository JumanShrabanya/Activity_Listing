import { useState } from "react";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Homepage />
    </main>
  );
}

export default App;
