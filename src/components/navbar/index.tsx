import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./link";
import LinkPic from "./linkPicture"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
const flexBetween = "flex items-center justify-between";
const isAboveMediumScreens = useMediaQuery("(min-width: 7600px)");
const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
const [open, setOpen] = useState(true);

  return (
    <div
        className={` ${
          open ? "w-[200px]" : "w-20"
        } bg-primary-color h-screen p-5  pt-8 relative duration-300`}
      >
    <div>
    <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          </h1>
        </div>

    <nav className="pt-6">
      <ul className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
        <LinkPic image="./src/assets/User.png" page="Dashboard" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          <Link page="Dashboard" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </span>
      </ul>

      <ul className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
        <LinkPic image="./src/assets/Chart.png" page="Metrics" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          <Link page="Metrics" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </span>
      </ul>

      <ul className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
        <LinkPic image="./src/assets/Chart_fill.png" page="Assets" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          <Link page="Assets" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </span>
      </ul>

      <ul className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
        <LinkPic image="./src/assets/Folder.png" page="Test" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          <Link page="Test" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </span>
      </ul>

      <ul className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
        <LinkPic image="./src/assets/Setting.png" page="Settings" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          <Link page="Settings" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </span>
      </ul>
        
    </nav>
    </div>
    </div>
  )
}

export default Navbar