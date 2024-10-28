"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    setCounted(true);
  },[]);

  if (!counted) {
    return <Button variant="secondary" size="icon" disabled={true}></Button>;
  }

  const dark = theme === "dark";

  return (
    <Button className="mt-[-0.3rem]"
      variant="secondary"
      size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? (
        <MdOutlineWbSunny className="hover:cursor-pointer hover:text-primary" size={24}/>
      ) : (
        <FaRegMoon className="hover:cursor-pointer hover:text-primary" size={24} />
      )}
    </Button>
  );
};

export default ToggleMode;
