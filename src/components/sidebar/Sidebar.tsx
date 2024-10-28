import React from 'react';
import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music2,
  PlayCircle,
  Radio,
  User,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Scrollbar } from 'react-scrollbars-custom';

import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';
import logo from "../../../public/images/logo.avif";
interface SidebarProps {
  className?: string;
  playlists?: string[];
  onClose: () => void; // Add onClose prop
}

export function Sidebar({ className, playlists,onClose }: SidebarProps) {
  return (
    <div className={`pb-12 w-[29rem] bg-gray-100 dark:bg-gray-800 ${className}`}>
   
      <div className="space-y-4 py-4">
        {/* change px-4 */}
        <div className="flex justify-between items-center px-4 py-1">
          <h2 className="mb-0 px-2 text-lg font-semibold tracking-tight">
          <Image
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
            ></Image>
          </h2>
          <div className=" cursor-pointer" onClick={onClose}>
  <RxCross1 />
</div>
          {/* <div className="space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start">
              <PlayCircle className="mr-2 h-4 w-4" />
              Listen Now
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Browse
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Radio
            </Button>
          </div> */}
        </div>
        {/* Change px-4 */}
        <div className="px-12 py-2">
          <h2 className="mb-2 px-2 text-2xl font-semibold font-serif tracking-tight">
            Library
          </h2>
          <div className="space-y-1 mx-4  font-serif">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <ListMusic className="mr-2 h-4 w-4 " />
              Playlists
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Music2 className="mr-2 h-4 w-4" />
              Songs
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Made for You
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Mic2 className="mr-2 h-4 w-4" />
              Artists
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              Albums
            </Button>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-6 text-lg font-semibold tracking-tight">
            {/* Playlists */}
          </h2>
          {/* <Scrollbar style={{ height: 300 }} className="px-2">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start font-normal"
                >
                  <ListMusic className="mr-2 h-4 w-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </Scrollbar> */}
        </div>
      </div>
    </div>
  );
}


