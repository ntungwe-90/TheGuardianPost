
import './App.css';
import Culture from './components/Culture';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Header from './components/Header';
import Headlines from './components/Headlines' 
import LifeStyle from './components/LifeStyle';
import Opinion from './components/Opinion';
import Sports from './components/Sports';
import TakePart from './components/TakePart';
import WeeklyNews from './components/WeeklyNews';
import TodayInFocus from './components/TodayInFocus';
import InPictures from './components/InPictures';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Opinions from './opinionComponent/Opinions'



function App() {
  return (
    <div className="App">
     <Header />
     <Headlines/>
 <Opinion/>
 {/* <WeeklyNews/> */}
 <Sports/>
 {/* <Card/> */}
 <Culture/>
 <LifeStyle/>
 <Explore/>
 <TakePart/>
 <TodayInFocus/>
 <InPictures/>

 <Footer/>

 
<>
 {/* <Router>
     
        <Routes>
          {/* <Route path="/" element= {Opinions} /> */}
          {/* <Route path="/opinions" element= {Opinions} />
          <Route ></Route>

        </Routes>
      </Router> */}
      </> 
      </div>
  );
}

export default App;
