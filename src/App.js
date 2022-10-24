import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Nav'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Home from './Pages/Home';
import Worship from './Pages/Worship';
import Events from './Pages/Events';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Worship /> */}
      <Events/>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
