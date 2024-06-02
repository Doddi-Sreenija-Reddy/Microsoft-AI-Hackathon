import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Landing } from './pages';
import { Footer, Navbar } from './components';

function App() {

  const routes = [
    { path: '/', element: <Landing/> },
    { path: '/home', element: <Home/> },
  ];

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} exact/>
            );
          })}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
