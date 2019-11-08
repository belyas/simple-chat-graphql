import React from "react";

import Login from "./components/login/login.container";
import Header from "./components/header/header.component";
import Chat from "./components/chat/chat.container";
import AuthProvider from "./auth-provider";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main>
          <Login />
          <Chat />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
