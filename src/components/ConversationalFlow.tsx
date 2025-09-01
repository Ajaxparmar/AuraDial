"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import CollapsibleItem from './CollapsibleItem';

const ConversationalFlowSection = () => {
  const items = [
    {
      title: "1. Greeting and Rapport Building",
      id: "greeting",
      checked: true,
      defaultValue: "Start with a warm and quick greeting",
    },
    {
      title: "2. Needs Discovery",
      id: "needs",
      checked: true,
      defaultValue: "Ask conversational questions to understand the customer's needs and budget.",
    },
    {
      title: "3. Product Recommendation",
      id: "recommendation",
      checked: true,
      defaultValue: "Explain product benefits in plain language and recommend based on their needs.",
    },
    {
      title: "4. Objection Handling and Interest Confirmation",
      id: "objection",
      checked: false,
      defaultValue: "Address objections confidently and If the customer is interested, confirm the customer's interest level.",
    },
    {
      title: "5. Closing for Automated Flagging",
      id: "finalization",
      checked: false,
      defaultValue: "If the customer is interested, confirm their interest one last time, thank them for their time, and end the call professionally. The system will automatically flag this call with an interest score in the call logs based on this conversation.",
    },
  ];

  return (
    <div className="mb-6 p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Conversational Flow (Assistants Instructions)</h3>
        <Button variant="default" className="bg-teal-500">+ Add Section</Button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <CollapsibleItem
            key={index}
            title={item.title}
            id={item.id}
            checked={item.checked}
            defaultValue={item.defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationalFlowSection;