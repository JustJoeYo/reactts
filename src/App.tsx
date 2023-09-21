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
    <Router basename="/reactts/">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
    </Router>
    </div>

    </>);
}

export default App;