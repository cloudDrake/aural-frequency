"use client"

import Hamburger from "./Hamburger";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
}

export default function Navbar({ isOpen, setIsOpen }: IProps) {

  return (
    <header className="relative flex z-20 justify-between p-4 relative">
      <h1 className="font-medium">Example of a drawer</h1>
      <div>
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </div>

    </header>
  );
}