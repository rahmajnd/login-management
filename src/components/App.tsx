import React from "react";
import Sidebar from "./Sidebar"; // Make sure this path is correct
import Settings from "./Settings"; // Correct this path to point to your Settings component

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Settings />
    </div>
  );
};

export default App;
