// import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/header/header';
import NewTeam from './components/newteam/newteam';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import FounderThing from './components/founderthing/founderthing';
import VideoPart from './components/videopart/videopart';
import il from './assets/CenterPic.png';
import './assets/newStyle.css';

function App() {
  return (
    <div>
      <Header />
      <VideoPart id="video"/>
      {/* <img className="thePicture" src={il}/> */}
      <About id="about" />
      <Meet id="gallery"/>
      
      <Mint />
      
      <RoadMap id="roadmap"/>
      <FounderThing id="team"/>
      <JoinCommunity />
      <TopItems />
      <Footer id="merch"/>
    </div>
  );
}

export default App;
