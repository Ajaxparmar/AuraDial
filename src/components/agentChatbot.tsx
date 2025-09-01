"use client";

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from 'lucide-react'; // Assuming you're using lucide-react for icons

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatbotPanel = () => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Create a voice AI agent that guides callers through product selection and purchasing. Personality: - Friendly, persuasive, and confident—never pushy. Capabilities: - Ask conversational questions to understand needs and budget. - Explain product benefits in plain language",
      sender: 'user',
      timestamp: 'August 18, 2025 at 05:37 PM',
    },
    {
      id: 2,
      text: "Your assistant is ready. This helper chat will guide you with your agent setup, integrations, and platform help. Ask anything, like: \"How do I integrate with NLU?\"",
      sender: 'bot',
      timestamp: 'August 18, 2025 at 05:37 PM',
    },
    {
      id: 3,
      text: "Your agents ready! Shall we move to the next step?",
      sender: 'bot',
      timestamp: 'August 18, 2025 at 05:37 PM',
    },
  ]);

  const handleSendMessage = () => {
    if (chatInput.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: chatInput,
      sender: 'user',
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
    };

    setMessages([...messages, newMessage]);
    setChatInput('');

    // Simulate bot response (replace with actual API call in production)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Got your message! How can I assist you further?",
        sender: 'bot',
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-1/3 p-4 bg-gray-800 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-white">Aura AI</h2>
      <ScrollArea className="flex-grow mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-gray-700 text-gray-300 ml-8'
                  : 'bg-teal-500 text-white mr-8'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-gray-400 text-sm mt-1">{message.timestamp}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2">
        <Textarea
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
        />
        <Button
          onClick={handleSendMessage}
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatbotPanel;
