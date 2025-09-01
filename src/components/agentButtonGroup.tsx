"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonGroupProps {
    onSelect: (section: string) => void;
    activeSection: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onSelect, activeSection }) => {
    const buttons = [
        { key: "welcome", label: "Details" },
        { key: "knowledge", label: "Knowledge Base" },
        { key: "Configurations", label: "Configurations" },
        { key: "Post Call", label: "Post Call" },
        { key: "Recent Calls", label: "Recent Calls" },
    ];

    return (
        <div className="mb-4 flex space-x-2">
            {buttons.map((btn) => (
                <Button
                    key={btn.key}
                    variant={activeSection === btn.key ? "default" : "outline"}
                    className={activeSection === btn.key ? "bg-teal-500 text-white" : ""}
                    onClick={() => onSelect(btn.key)}>
                    {btn.label}
                </Button>
            ))}

            <Button variant="default" className="ml-auto bg-teal-500">
                UI
            </Button>
            <Button variant="default" className="bg-teal-500">
                Code
            </Button>
        </div>
    );
};

export default ButtonGroup;
