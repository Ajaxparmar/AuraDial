"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ButtonGroup from "@/components/agentButtonGroup";
import WelcomeMessageSection from "@/components/welcomeMessageSection";
import ConversationalFlowSection from "@/components/ConversationalFlow";
import KnowledgeBasePanel from "@/components/KnowledgeBase"; // renamed for clarity

const collapsibleContentStyles = `
  .collapsible-content {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .collapsible-content[data-state="open"] {
    max-height: 500px;
    opacity: 1;
  }
  .collapsible-content[data-state="closed"] {
    max-height: 0;
    opacity: 0;
  }
`;

const MainContent = () => {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  const renderSection = () => {
    switch (activeSection) {
      case "welcome":
        return (
          <>
            <WelcomeMessageSection />
            <ConversationalFlowSection />
          </>
        );
      case "knowledge":
        return (
          <KnowledgeBasePanel/>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{collapsibleContentStyles}</style>
      <div className="flex-1 p-4 overflow-auto">
        <ButtonGroup onSelect={setActiveSection} activeSection={activeSection} />
        <div className="mt-4">{renderSection()}</div>
        <Button variant="default" className="bg-teal-500 mt-4">
          Provide feedback
        </Button>
      </div>
    </>
  );
};

export default MainContent;
