"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface ColumnDropdownProps {
  items: { value: string; label: string }[];
  triggerText: string;
  buyButton?: React.ReactNode;
}

function ColumnDropdown({ items , triggerText}: ColumnDropdownProps) {
  return (
   <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="outline" className="rounded-full">{triggerText}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, index) => (
          <DropdownMenuItem key={index} data-value={item.value}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default ColumnDropdown