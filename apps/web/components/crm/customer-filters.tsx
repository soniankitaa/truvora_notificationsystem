"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CustomerFilters() {
  return (
    <div className="flex flex-wrap gap-4">

      <Select defaultValue="all-status">

        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="all-status">
            All Status
          </SelectItem>

          <SelectItem value="lead">
            Lead
          </SelectItem>

          <SelectItem value="customer">
            Customer
          </SelectItem>

          <SelectItem value="vip">
            VIP
          </SelectItem>

        </SelectContent>

      </Select>

      <Select defaultValue="all-stage">

        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="all-stage">
            All Stages
          </SelectItem>

          <SelectItem value="new">
            New
          </SelectItem>

          <SelectItem value="qualified">
            Qualified
          </SelectItem>

          <SelectItem value="proposal">
            Proposal
          </SelectItem>

          <SelectItem value="won">
            Won
          </SelectItem>

          <SelectItem value="lost">
            Lost
          </SelectItem>

        </SelectContent>

      </Select>

    </div>
  );
}