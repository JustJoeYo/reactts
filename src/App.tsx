import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import 'tailwindcss/tailwind.css';
import Header from './components/navigationbar/Header';
import Particles from './components/particles/Particles';
import { SelectedPage } from "./components/pages/types";
import { About, Resume, Contact, Portfolio, PageNotFound} from "./components/pages/types";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
    return ( <>
    <Header
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
    />
    
    <Particles/>
    
    <div className="flex justify-center items-center">
    <Router>
          <Routes>
            <Route path="/reactts/" element={<About />} />
            <Route path="/reactts/about" element={<About />} />
            <Route path="/reactts/resume" element={<Resume />} />
            <Route path="/reactts/portfolio" element={<Portfolio />} />
            <Route path="/reactts/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
    </Router>
    </div>

    </>);
}

export default App;