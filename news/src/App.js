
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
    </div>
  );
}

export default App;
