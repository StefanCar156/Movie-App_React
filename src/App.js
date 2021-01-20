import './App.css';
import MovieComponent from './components/MovieComponent';
import MoviesContainer from './components/MoviesContainer';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MoviesContainer />
        <Sidebar />
        <MovieComponent />
    </div>
  );
}

export default App;
