import WeatherNavBar from './components/WeatherNavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <WeatherNavBar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
