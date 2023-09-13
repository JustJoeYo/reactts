import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [open, setOpen] = useState(true);

  return (
    <div className="app bg-primary-color h-screen border-border-color flex">
      
      <Navbar
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      <div className="h-screen flex-1 p-7">

      <div className="bg-secondary-color w-full h-full border-[1px] border-border-color ml-400px">
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </Router>
      </div>
      
      </div>
    </div>
  )
}

export default App
