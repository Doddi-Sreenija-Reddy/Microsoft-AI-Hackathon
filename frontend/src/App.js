import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Landing } from './pages';

function App() {

  const routes = [
    { path: '/', component: Landing },
    { path: '/home', component: Home },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} component={route.component} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
