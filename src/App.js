import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Blogs from './pages/Blogs/Blogs'
import Login from './pages/shared/Login/Login';
import Signup from './pages/shared/Signup/Signup';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
