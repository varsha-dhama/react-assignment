import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductDescriptionPage from "./components/ProductDescriptionPage";

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    {window.location.path !=="/" ? <Header modify={false}/> : <Header modify={true}/>}
      
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pdp/:productId">
          <ProductDescriptionPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
