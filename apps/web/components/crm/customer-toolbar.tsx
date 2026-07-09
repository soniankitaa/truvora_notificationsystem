"use client";

import { Search, Plus, Download, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CustomerToolbar() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="relative w-full lg:max-w-md">

        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search customers..."
          className="pl-10"
        />

      </div>

      <div className="flex flex-wrap gap-3">

        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Import
        </Button>

        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Customer
        </Button>

      </div>

    </div>
  );
}