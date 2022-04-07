import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user.links);

function App() {
  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About user={user} />
    </div>
  );
}

export default App;
