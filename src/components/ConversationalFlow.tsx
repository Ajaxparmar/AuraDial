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
      defaultValue: "Warm greeting and quick rapport-building.",
    },
    {
      title: "2. Needs Discovery",
      id: "needs",
      checked: true,
      defaultValue: "Ask conversational questions to understand customer needs and budget.",
    },
    {
      title: "3. Product Recommendation",
      id: "recommendation",
      checked: true,
      defaultValue: "Explain product benefits in plain language and recommend based on needs.",
    },
    {
      title: "4. Objection Handling and Interest Confirmation",
      id: "objection",
      checked: false,
      defaultValue: "Address objections confidently and confirm customer interest.",
    },
    {
      title: "5. Order Finalization or Follow-up",
      id: "finalization",
      checked: false,
      defaultValue: "Finalize the order or arrange follow-up if needed.",
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