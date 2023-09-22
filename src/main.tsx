import 'tailwindcss/tailwind.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from "react";
import Header from './components/navigationbar/Header';
import Particles from './components/particles/Particles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Resume, Contact, Portfolio, PageNotFound, SelectedPage} from "./components/pages/types";

const router = createBrowserRouter([
  {
    path: "/reactts/",
    children: [
        {
          path: "/reactts/",
          element: <About />,
        },
        {
          path: "/reactts/about",
          element: <About />,
        },
        {
          path: "/reactts/resume",
          element: <Resume />,
        },
        {
          path: "/reactts/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/reactts/contact",
          element: <Contact />,
        },
        {
          path: "/reactts/*",
          element: <PageNotFound />,
        },
    ]
  }
]);

function HeaderFix() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
  return (
    <Header
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderFix/>
    <Particles/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)