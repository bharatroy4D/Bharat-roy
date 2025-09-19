import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Navbar/Home/Home.jsx';
import About from './Components/Navbar/About/About.jsx';
import Skill from './Components/Navbar/Skill/Skill.jsx';
import Projects from './Components/Navbar/Projects/Projects.jsx';
import Contact from './Components/Navbar/Contact/Contact.jsx';
import Login from './Components/Navbar/Login/Login.jsx';
import HireMe from './Components/HireMe/HireMe.jsx';
import Hero from './Components/Navbar/Hero/Hero.jsx';
import Qualification from './Components/Navbar/Qualification/Qualification.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/hireMe",
        element: <HireMe />,
      },
      {
        path: '/hero',
        element: <Hero />
      },
      {
        path: '/qualification',
        element: <Qualification />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </ThemeProvider>
)
