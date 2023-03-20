import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Nav'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Home from './Pages/Home';
import Ministries from './Pages/Ministries'
import AboutUs from './Pages/AboutUs'
import Worship from './Pages/Worship';
import Events from './Pages/Events';
import Leaders from './Pages/Leaders';

import OurEvents from './Pages/OurEvents';

import MissionStatement from './Pages/MissionStatement';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
       
        <Route exact path="/ministries" element={<Ministries/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/mission" element={<MissionStatement/>} />
        <Route exact path="/zukolwakhe" element={<AboutUs/>} />
        <Route exact path="/whatshappening" element={<OurEvents/>} />
        <Route exact path="/worship" element={<Worship/>} />
        <Route exact path="/leaders" element={<Leaders/>} />
        <Route exact path="/contact" element={<Form/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
