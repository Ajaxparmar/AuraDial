import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const WelcomeMessageSection = () => {
  return (
    <div className="mb-6 bg-gray-800 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Welcome Message</h3>
        <div className="flex items-center space-x-2">
          <span className="text-teal-500">Dynamic</span>
          <Checkbox id="dynamic" checked />
        </div>
      </div>
      <Textarea
        defaultValue="Hello, and welcome to our product selection and purchasing support. How can I assist you in finding what you need today?"
        className="w-full mb-2 bg-gray-700 border-gray-600 rounded"
      />
      <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-teal-500">Dynamic</span>
          <Checkbox id="dynamic-toggle" checked />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-teal-500">Interruption</span>
          <Checkbox id="interruption-toggle" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessageSection;