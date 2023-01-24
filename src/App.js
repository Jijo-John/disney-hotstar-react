
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Header from './Components/Header';
import Routes from './Routes';


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes/>
    </Router>
    </>
  );

} 



export default App;