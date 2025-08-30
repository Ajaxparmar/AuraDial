"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { HelpCards } from "@/components/help-cards";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json";
import { Button } from "@/components/ui/button";
import ColumnDropdown from "@/components/ColumnDropdown";

export default function Page() {
  const dropdownItems = [
    { label: "All Agents", value: "all" },
    { label: "General", value: "general" },
    { label: "Sales&Marketing", value: "sales" },
    { label: "CustomerSupport", value: "support" },
    { label: "Healthcare&Appointments", value: "healthcare" },
    { label: "Hospitality&Services", value: "hospitality" },
    { label: "Education", value: "education" },
    { label: "ProfessionalServices", value: "professional" },
    { label: "Events&Community", value: "events" },
    { label: "Logistics", value: "logistics" },
    { label: "EmergencyServices", value: "emergency" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4">
            <Card className="data-[slot=card]:bg-card data-[slot=card]:shadow-xs">
              <CardHeader>
                {/* <CardDescription>Overview</CardDescription> */}
                <CardTitle className="text-xl font-semibold tabular-nums">
                Create and manage your voice AI assistants
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                {/* <div className="text-muted-foreground">
                      Design and deploy AI Assistants with global telephony and dedicated infrastructure for agile, scalable and real-time engagement.
                    </div> */}
              </CardFooter>
              <CardAction className="flex justify-end px-4">
                <Button variant="outline" size="sm" className="w-full">
                  Explore More
                </Button>
              </CardAction>
            </Card>
          </div>

          <div className="flex flex-col gap-4 px-4 lg:px-6">
            <div className="text-lg font-semibold">
              {" "}
              <span className="px-2">Select Category</span>
              <ColumnDropdown items={dropdownItems} triggerText="Filter" />
            </div>
          </div>
          <SectionCards />
          <div className="flex flex-col gap-4 px-4 lg:px-6">
            <div className="text-lg font-semibold">
              {" "}
              <span className="px-2">Explore Products</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4 lg:px-6">
            <Card className="data-[slot=card]:bg-card px-4 data-[slot=card]:shadow-xs">
              <CardHeader>
                <CardDescription>Recent Activity</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums">
                Leads Overview: 1,245 Active Leads
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="text-muted-foreground">
                Track and manage all leads, employees, and AI agents in
                real-time.
                </div>
                <div className="text-muted-foreground mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                  View Reports
                  </Button>
                </div>
              </CardFooter>
              <CardAction className="flex justify-end px-4">
                <Button variant="outline" size="sm" className="w-full">
                  Export Data
                </Button>
              </CardAction>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
