"use client"

import { IconCirclePlusFilled, IconPhoneCalling, type Icon } from "@tabler/icons-react"
import { useState } from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isLeadsDropdownOpen, setIsLeadsDropdownOpen] = useState(false)
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false)
  const [isVoiceAgentDropdownOpen, setIsVoiceAgentDropdownOpen] = useState(false)

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu)
  }

  const leadOptions = [
    { title: "All Leads", url: "/pages/leadsDetails" },
    { title: "Create New Lead", url: "/pages/addLeads" },
    { title: "Import Leads", url: "/leads/view" },
    { title: "Export Leads", url: "/leads/import" },
  ]

  const employeeOptions = [
    { title: "All Employees", url: "/pages/EmpDetails" },
    { title: "Create New Employee", url: "/pages/createEmployee" },
  ]

  const voiceAgents = [
    { title: "All Voice Agents", url: "/dashboard" }
  ]

  const buttonClasses = (menu: string) =>
    `min-w-8 duration-200 ease-linear ${
      activeMenu === menu
        ? "bg-primary text-primary-foreground"
        : "hover:bg-primary/90 hover:text-primary-foreground"
    }`

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {/* Voice Agents Section */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                setIsVoiceAgentDropdownOpen(!isVoiceAgentDropdownOpen)
                handleMenuClick("voiceAgents")
              }}
              aria-expanded={isVoiceAgentDropdownOpen}
              aria-controls="voiceagents-dropdown"
              className={buttonClasses("voiceAgents")}
            >
              <IconPhoneCalling />
              <span>Voice Agents</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <div
            id="voiceagents-dropdown"
            className={`ml-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isVoiceAgentDropdownOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
            role="menu"
          >
            {voiceAgents.map((option) => (
              <SidebarMenuItem key={option.title}>
                <SidebarMenuButton asChild>
                  <Link href={option.url} className="text-sm">
                    {option.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>

          {/* Manage Leads Section */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                setIsLeadsDropdownOpen(!isLeadsDropdownOpen)
                handleMenuClick("manageLeads")
              }}
              aria-expanded={isLeadsDropdownOpen}
              aria-controls="leads-dropdown"
              className={buttonClasses("manageLeads")}
            >
              <IconCirclePlusFilled />
              <span>Manage Leads</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <div
            id="leads-dropdown"
            className={`ml-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isLeadsDropdownOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
            role="menu"
          >
            {leadOptions.map((option) => (
              <SidebarMenuItem key={option.title}>
                <SidebarMenuButton asChild>
                  <Link href={option.url} className="text-sm">
                    {option.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>

          {/* Manage Employee Section */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen)
                handleMenuClick("manageEmployee")
              }}
              aria-expanded={isEmployeeDropdownOpen}
              aria-controls="employee-dropdown"
              className={buttonClasses("manageEmployee")}
            >
              <IconCirclePlusFilled />
              <span>Manage Employee</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <div
            id="employee-dropdown"
            className={`ml-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isEmployeeDropdownOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
            role="menu"
          >
            {employeeOptions.map((option) => (
              <SidebarMenuItem key={option.title}>
                <SidebarMenuButton asChild>
                  <Link href={option.url} className="text-sm">
                    {option.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>

          {/* Dynamic Items from Props */}
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                onClick={() => handleMenuClick(item.title)}
                className={buttonClasses(item.title)}
              >
                <Link href={item.url} className="flex items-center gap-2">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
