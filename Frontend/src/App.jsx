import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './components/Home';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import Jobs from './components/Jobs';
import BrowseJobs from './components/Browse';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
    {
      path: '/jobs',
      element: <Jobs />
    },
    {
      path: '/browse',
      element: <BrowseJobs/>
    }
   
  ]);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  )
}

export default App
