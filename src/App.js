import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import WorkProcedure from './components/workProcedure/WorkProcedure';
import CountDown from './components/countDown/CountDown';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <WorkProcedure></WorkProcedure>
      <About></About>
      <Experience></Experience>
      <CountDown></CountDown>
    </div>
  );
}

export default App;
