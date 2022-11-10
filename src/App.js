import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Home/Home';
import Login from './Lging/Login';
import Sigin from './Sigin/Singin';
import Banner from './Banner/Banner';
import Showall from './Showall/Showall';
import ServiceShowAll from './ServiceShowAll/ServiceShowAll';
import ServiceCardes from './ServiceCardes/ServiceCardes';
import AddService from './AddService/AddService';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import PrivateRoute from './Private/PrivateRoute';
import Blog from './Blog/Blog';
import Errorpage from './Errorpage/Errorpage';
import Myreview from './Myreview/Myreview';
import Review from './Review/Review';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Errorpage></Errorpage>,
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
        {
          path:'/serviceCardes',
          element:<ServiceCardes></ServiceCardes>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
        },
        {
          path:'/myreview',
          element:<Myreview></Myreview>,
          loader:()=> fetch(" https://server-site-shahjhanmiah.vercel.app/services")
        },
        {
          path:'/servicedetails',
          element:<ServiceDetails></ServiceDetails>,
          loader:()=> fetch(" https://server-site-shahjhanmiah.vercel.app/service")
        },
        {
          path:'/review/:id',
          element:<PrivateRoute><Review></Review></PrivateRoute>,
          loader:({params})=> fetch(` https://server-site-shahjhanmiah.vercel.app/services/${params.id}`)
        },
        {
          path:'/addservice/:id',
          element:<AddService></AddService>,
          loader:({params})=> fetch(` https://server-site-shahjhanmiah.vercel.app/services/${params.id}`)
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
