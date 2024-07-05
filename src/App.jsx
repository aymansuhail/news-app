import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState(["general"]);
  const [country, setCountry] = useState("us");
  return (
    <div>
      <div>
        <Navbar setCategory={setCategory} setCountry={setCountry} />
        <NewsBoard category={category} country={country} />
      </div>
    </div>
  );
}

export default App;
