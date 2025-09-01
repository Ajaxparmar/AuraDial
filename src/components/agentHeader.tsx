"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <button className="text-white">&larr;</button>
        <span className="text-green-500">Incoming</span>
        <span className="text-green-500">&check;</span>
        <span className="text-gray-400">Changes saved at 09:02 PM</span>
      </div>
      <div className="flex space-x-2">
        <Button variant="default" className="bg-teal-500">Test with</Button>
        <Button variant="default" className="bg-teal-500">Chat</Button>
        <Button variant="default" className="bg-teal-500">Web Call</Button>
        <Button variant="default" className="bg-teal-500">Phone Call</Button>
        <Button variant="default" className="bg-teal-500">
          Deploy <span className="ml-1">&#9660;</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;