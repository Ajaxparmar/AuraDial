"use client";

import React from 'react';
import Header from '@/components/agentHeader';
import ChatbotPanel from '@/components/agentChatbot';
import MainContent from '@/components/agentContent';

const AssistantInterface = () => {
  return (
    <div className="flex flex-col h-screen  text-white" style={{height:"95vh"}}>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ChatbotPanel />
        <MainContent />
      </div>
    </div>
  );
};

export default AssistantInterface;