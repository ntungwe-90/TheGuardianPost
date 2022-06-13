
import './App.css';
// import Culture from './components/Culture';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Headlines from './components/Headlines' 
import Opinions from './components/opinionComponent/Opinions';
import Footer from './components/Footer';
// import Explore from './components/Explore';
// import LifeStyle from './components/LifeStyle';
// import Opinion from './components/Opinion';
// import Sports from './components/Sports';
// import TakePart from './components/TakePart';
// import WeeklyNews from './components/WeeklyNews';
// import TodayInFocus from './components/TodayInFocus';
// import InPictures from './components/InPictures';
// import Opinions from './components/opinionComponent/Opinions';
// import Card from './components/Card';





function App() {
  return (
    <div>
       {/* <Router>
      <Header />
        <Routes>
          <Route path="/headlines" element= {<Headlines/>} />
         

        </Routes>
      </Router> */}
      
      <Header />
     <Headlines/>
     <Opinions/>
   
 {/* <Opinion/> */}
 
 {/* <Sports/> */}
 {/* <Card/> */}
 {/* <Culture/> */}
 {/* <LifeStyle/> */}
 {/* <Explore/> */}
 {/* <TakePart/> */}
 {/* <TodayInFocus/> */}
 {/* <InPictures/> */}

 <Footer/>



      </div>
  );
}

export default App;
