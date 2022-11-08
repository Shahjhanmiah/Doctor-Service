import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Home/Home';
import Login from './Lging/Login';
import Sigin from './Sigin/Sigin';
import Banner from './Banner/Banner';
import Showall from './Showall/Showall';
import ServiceShowAll from './ServiceShowAll/ServiceShowAll';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/sigin',
          element:<Sigin></Sigin>,
        },
        {
          path:'/banner',
          element:<Banner></Banner>,
        },
        {
          path:'/showall',
          element:<Showall></Showall>,
        },
        {
          path:'/serviceShowall',
          element:<ServiceShowAll></ServiceShowAll>,
        },
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
