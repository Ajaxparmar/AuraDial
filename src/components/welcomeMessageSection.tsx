import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const WelcomeMessageSection = () => {
  return (
    <div className="mb-6 bg-gray-800 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">YOUR ROLE & GOAL</h3>
        {/* <div className="flex items-center space-x-2">
          <span className="text-teal-500">Dynamic</span>
          <Checkbox id="dynamic" checked />
        </div> */}
      </div>
      <Textarea
        defaultValue="You are a friendly and professional AI assistant for 'Aura Dial'. Your main goal is to help customers by guiding them through our product selection and purchase support. You should be persuasive but never pushy. You must understand the customer's needs before recommending a product."
        className="w-full mb-2 bg-gray-700 border-gray-600 rounded"
      />
      {/* <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-teal-500">Dynamic</span>
          <Checkbox id="dynamic-toggle" checked />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-teal-500">Interruption</span>
          <Checkbox id="interruption-toggle" />
        </div>
      </div> */}
    </div>
  );
};

export default WelcomeMessageSection;