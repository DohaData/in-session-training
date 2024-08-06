import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Button from "./components/Button/Button";

function App() {
  const sayHello = () => {
    console.log("Hello!");
  };
  return (
    <>
      <Navbar />
      <MainSection />
      <Button content="Click me!" action={sayHello} />
    </>
  );
}

export default App;
