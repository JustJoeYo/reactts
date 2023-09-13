import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-color px-10 py-2 hover:bg-primary-color hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Home)}
      href={`#${SelectedPage.Home}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;