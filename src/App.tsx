import './App.less';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import ModalPage from './components/ModalPage/ModalPage';
import DropdownPage from './components/DropdownPage/DropdownPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/nav-bar' element={<NavBar />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='/dropdown' element={<DropdownPage />} />
      </Routes>
    </div>
  );
}

export default App;
