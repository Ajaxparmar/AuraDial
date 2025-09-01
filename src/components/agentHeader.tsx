"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react"; // shadcn uses lucide icons

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      {/* Left Side */}
      <div className="flex items-center space-x-2">
        <button className="text-white dark:text-gray-200">&larr;</button>
        <span className="text-green-500 font-medium">Incoming</span>
        <span className="text-gray-400 text-sm hidden sm:inline">
          Changes saved at 09:02 PM
        </span>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-2">
        <Button className="bg-teal-500 text-white hover:bg-teal-600">Test with</Button>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">Chat</Button>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">Web Call</Button>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">Phone Call</Button>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">
          Deploy <span className="ml-1">&#9660;</span>
        </Button>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-md">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Test with</DropdownMenuItem>
            <DropdownMenuItem>Chat</DropdownMenuItem>
            <DropdownMenuItem>Web Call</DropdownMenuItem>
            <DropdownMenuItem>Phone Call</DropdownMenuItem>
            <DropdownMenuItem>Deploy</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
