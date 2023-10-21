import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/bar';
import Header from './components/header/header'
import Banner from './components/banner/banner';
import Banner2 from './components/banner2/banner2'
import Banner3 from './components/banner3/banner3'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Banner/>
      <Banner2/>
      <Banner3/>

    </div>
  );
}

export default App;
