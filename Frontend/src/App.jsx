import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './components/Home';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import Jobs from './components/Jobs';
import BrowseJobs from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';

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
      path: '/jobs/description/:id',
      element: <JobDescription />
    },
    {
      path: '/browse',
      element: <BrowseJobs/>
    },
    {
      path: '/profile',
      element: <Profile/>
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
