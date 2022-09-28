import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
