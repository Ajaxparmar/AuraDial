"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isSameDay } from "date-fns";


// Define the Lead data type (matching AddLeadForm's LeadFormData)
interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo?: string;
  profession?: string;
  organizationName?: string;
  address?: string;
  remarks?: string;
  employeeName: string;
  leadSource: string;
  leadType: string;
  leadStatus: string;
  createdAt: string; // ISO date string
}

export default function LeadsTable() {
  // State for leads and filters
  const [leads, setLeads] = React.useState<Lead[]>([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      mobileNo: "+91 9876543210",
      profession: "Software Engineer",
      organizationName: "Acme Inc.",
      address: "123 Main St, City",
      remarks: "Interested in course details",
      employeeName: "Alice Smith",
      leadSource: "Instagram",
      leadType: "Course",
      leadStatus: "High",
      createdAt: "2025-08-25T10:00:00Z",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      mobileNo: "+91 9123456789",
      profession: "Marketing Manager",
      organizationName: "Tech Corp",
      address: "456 Elm St, Town",
      remarks: "Follow-up next week",
      employeeName: "Bob Johnson",
      leadSource: "Referral",
      leadType: "Enquiry Only",
      leadStatus: "Follow-up",
      createdAt: "2025-08-24T12:00:00Z",
    },
  ]);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({
    employeeName: "all",
    leadSource: "all",
    leadType: "all",
    leadStatus: "all",
    createdAt: null as Date | null,
  });

  // Optional: Fetch leads from API
  React.useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch("/api/leads");
        if (response.ok) {
          const data = await response.json();
          setLeads(data);
        }
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      }
    }
    // Uncomment to enable API fetch
    // fetchLeads();
  }, []);

  // Filter leads based on search and filters
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.firstName.toLowerCase().includes(search.toLowerCase()) ||
      lead.lastName.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase());
    const matchesEmployee = filters.employeeName === "all" || lead.employeeName === filters.employeeName;
    const matchesSource = filters.leadSource === "all" || lead.leadSource === filters.leadSource;
    const matchesType = filters.leadType === "all" || lead.leadType === filters.leadType;
    const matchesStatus = filters.leadStatus === "all" || lead.leadStatus === filters.leadStatus;
    const matchesDate =
      !filters.createdAt || isSameDay(new Date(lead.createdAt), filters.createdAt);
    return (
      matchesSearch &&
      matchesEmployee &&
      matchesSource &&
      matchesType &&
      matchesStatus &&
      matchesDate
    );
  });

  // Unique filter options
  const employeeNames = Array.from(new Set(leads.map((lead) => lead.employeeName)));
  const leadSources = Array.from(new Set(leads.map((lead) => lead.leadSource)));
  const leadTypes = Array.from(new Set(leads.map((lead) => lead.leadType)));
  const leadStatuses = Array.from(new Set(leads.map((lead) => lead.leadStatus)));

  return (
    <Card className="w-full max-w-7xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Leads</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/3"
          />
          <Select
            value={filters.employeeName}
            onValueChange={(value) => setFilters({ ...filters, employeeName: value })}
          >
            <SelectTrigger className="w-full sm:w-1/6">
              <SelectValue placeholder="Employee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              {employeeNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.leadSource}
            onValueChange={(value) => setFilters({ ...filters, leadSource: value })}
          >
            <SelectTrigger className="w-full sm:w-1/6">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {leadSources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.leadType}
            onValueChange={(value) => setFilters({ ...filters, leadType: value })}
          >
            <SelectTrigger className="w-full sm:w-1/6">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {leadTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.leadStatus}
            onValueChange={(value) => setFilters({ ...filters, leadStatus: value })}
          >
            <SelectTrigger className="w-full sm:w-1/6">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {leadStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full sm:w-1/6">
            
                {filters.createdAt ? format(filters.createdAt, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={filters.createdAt || undefined}
                onSelect={(date) => setFilters({ ...filters, createdAt: date || null })}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            onClick={() =>
              setFilters({
                employeeName: "all",
                leadSource: "all",
                leadType: "all",
                leadStatus: "all",
                createdAt: null,
              })
            }
          >
            Clear Filters
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile No</TableHead>
                <TableHead>Profession</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead, index) => (
                  <TableRow key={index}>
                    <TableCell>{lead.firstName}</TableCell>
                    <TableCell>{lead.lastName}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.mobileNo || "-"}</TableCell>
                    <TableCell>{lead.profession || "-"}</TableCell>
                    <TableCell>{lead.organizationName || "-"}</TableCell>
                    <TableCell>{lead.address || "-"}</TableCell>
                    <TableCell>{lead.remarks || "-"}</TableCell>
                    <TableCell>{lead.employeeName}</TableCell>
                    <TableCell>{lead.leadSource}</TableCell>
                    <TableCell>{lead.leadType}</TableCell>
                    <TableCell>{lead.leadStatus}</TableCell>
                    <TableCell>{format(new Date(lead.createdAt), "PPP")}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={13} className="text-center">
                    No leads found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
