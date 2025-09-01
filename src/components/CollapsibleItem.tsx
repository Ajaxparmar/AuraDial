import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { IconGitBranch } from '@tabler/icons-react';
import { ClosedCaptionIcon } from 'lucide-react';
import { DialogClose } from '@radix-ui/react-dialog';

// Define the props interface for the CollapsibleItem component
interface CollapsibleItemProps {
  title: string;
  id: string;
  checked: boolean;
  defaultValue: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, id, checked, defaultValue }) => {
  return (
    <Collapsible>
      <div className="flex items-center w-full p-2 bg-gray-700 rounded">
        {/* Collapsible Trigger */}
        <CollapsibleTrigger className="flex-1 text-left">
          {title}
        </CollapsibleTrigger>
        {/* Checkbox and Delete Button */}
        <div className="flex items-center space-x-2">
          <Checkbox id={id} checked={checked} />
          <Button
            variant="ghost"
            size="icon"
            className="size-8 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            x
          </Button>

        </div>
      </div>
      <CollapsibleContent className="collapsible-content p-2 bg-gray-600 text-sm">
        <Textarea defaultValue={defaultValue} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleItem;