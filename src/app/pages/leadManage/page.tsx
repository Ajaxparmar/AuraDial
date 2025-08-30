"use client";

import * as React from "react";
import { AddLeadForm } from "@/components/add-lead-form";
import { LeadsTable } from "@/components/leads-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { IconCirclePlusFilled, IconDownload, IconUpload } from "@tabler/icons-react";
import { parse } from "papaparse";
import { saveAs } from "file-saver";

export default function LeadsManagementPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedLeads, setSelectedLeads] = React.useState<string[]>([]);
  const [assignEmployee, setAssignEmployee] = React.useState("all");

  // Sample employees for assignment dropdown
  const employees = [
    "Alice Smith",
    "Bob Johnson",
    "Carol Williams",
    "David Brown",
    "Emma Davis",
  ];

  // Handle CSV import
  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    parse(file, {
      header: true,
      complete: async (results) => {
        const leads = results.data.map((row: any) => ({
          firstName: row.firstName || "",
          lastName: row.lastName || "",
          email: row.email || "",
          mobileNo: row.mobileNo || undefined,
          profession: row.profession || undefined,
          organizationName: row.organizationName || undefined,
          address: row.address || undefined,
          remarks: row.remarks || undefined,
          employeeName: row.employeeName || "",
          leadSource: row.leadSource || "",
          leadType: row.leadType || "",
          leadStatus: row.leadStatus || "",
          createdAt: row.createdAt || new Date().toISOString(),
        }));
        try {
          const response = await fetch("/api/leads/bulk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(leads),
          });
          if (response.ok) {
            console.log("Leads imported successfully");
            // Trigger table refresh (e.g., via context or refetch)
          } else {
            console.error("Failed to import leads");
          }
        } catch (error) {
          console.error("Error importing leads:", error);
        }
      },
    });
  };

  // Handle CSV export
  const handleExport = async () => {
    try {
      const response = await fetch("/api/leads");
      if (response.ok) {
        const leads = await response.json();
        const csv = [
          [
            "firstName",
            "lastName",
            "email",
            "mobileNo",
            "profession",
            "organizationName",
            "address",
            "remarks",
            "employeeName",
            "leadSource",
            "leadType",
            "leadStatus",
            "createdAt",
          ].join(","),
          ...leads.map((lead: any) =>
            [
              lead.firstName,
              lead.lastName,
              lead.email,
              lead.mobileNo || "",
              lead.profession || "",
              lead.organizationName || "",
              lead.address || "",
              lead.remarks || "",
              lead.employeeName,
              lead.leadSource,
              lead.leadType,
              lead.leadStatus,
              lead.createdAt,
            ].join(","),
          ),
        ].join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        saveAs(blob, "leads.csv");
      }
    } catch (error) {
      console.error("Error exporting leads:", error);
    }
  };

  // Handle lead assignment
  const handleAssign = async () => {
    if (!selectedLeads.length || assignEmployee === "all") return;
    try {
      const response = await fetch("/api/leads/assign", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadIds: selectedLeads, employeeName: assignEmployee }),
      });
      if (response.ok) {
        console.log("Leads assigned successfully");
        setSelectedLeads([]);
        setAssignEmployee("all");
        // Trigger table refresh
      } else {
        console.error("Failed to assign leads");
      }
    } catch (error) {
      console.error("Error assigning leads:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Add New Lead Button */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <IconCirclePlusFilled className="h-4 w-4" />
              Add New Lead
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl p-6">
            <DialogHeader>
              <DialogTitle>Add New Lead</DialogTitle>
            </DialogHeader>
            <AddLeadForm />
          </DialogContent>
        </Dialog>

        {/* Import Button */}
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <label>
            <IconUpload className="h-4 w-4" />
            Import Leads
            <Input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleImport}
            />
          </label>
        </Button>

        {/* Export Button */}
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleExport}
        >
          <IconDownload className="h-4 w-4" />
          Export Leads
        </Button>

        {/* Assign Lead Dropdown */}
        <div className="flex items-center gap-2">
          <Select
            value={assignEmployee}
            onValueChange={setAssignEmployee}
            disabled={!selectedLeads.length}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Assign to Employee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Select Employee</SelectItem>
              {employees.map((employee) => (
                <SelectItem key={employee} value={employee}>
                  {employee}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={handleAssign}
            disabled={!selectedLeads.length || assignEmployee === "all"}
          >
            Assign
          </Button>
        </div>
      </div>

      {/* Leads Table */}
      <LeadsTable selectedLeads={selectedLeads} setSelectedLeads={setSelectedLeads} />
    </div>
  );
}