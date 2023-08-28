import './App.less';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/nav-bar' element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
