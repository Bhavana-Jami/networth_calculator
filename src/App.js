import logo from './logo.svg';
import './App.css';
import BarGraph from './components/BarGraph';
import Main from './components/Main';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Nabvar from './components/Navbar'; 
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <Nabvar />
      {/* <Main /> */}
      <Dashboard/>

<Footer />      
    </div>
  );
}

export default App;
