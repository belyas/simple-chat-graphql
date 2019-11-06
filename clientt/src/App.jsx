import React from "react";

import Login from "./components/login/login.container";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <Login />
      </main>
    </div>
  );
}

export default App;
